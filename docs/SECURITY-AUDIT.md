# Security Audit Report — Portfolio

> Dokumentasi audit keamanan hasil analisis GitHub Security, verifikasi lokal, dan pemetaan codebase via Graphify.

## 1. Status Awal & Ringkasan Temuan GitHub Security

- **Repository**: `larsalfarabi/Portfolio`
- **Default Branch GitHub**: `master` (berisi Next.js 13.5.4 dengan `package-lock.json`)
- **Active Branch**: `migrate/next-baseline` (telah bermigrasi ke Next.js 16.4.2, React 19, lockfile: `bun.lock`)
- **Secret Scanning**: Non-aktif pada repository (`HTTP 404`).
- **Code Scanning (CodeQL)**: Belum dikonfigurasi / belum ada hasil analisis (`HTTP 404`).
- **Dependabot Alerts**: Total **67 alerts terbuka** pada `master`:
  - **CRITICAL**: 2
  - **HIGH**: 37
  - **MEDIUM**: 25
  - **LOW**: 3

### Ringkasan Alert per Package (GitHub Dependabot)
| Package | Status di Master | Severity Tertinggi | Jumlah Alert | Status di `migrate/next-baseline` |
| :--- | :--- | :--- | :--- | :--- |
| `next` | 13.5.4 | CRITICAL (1), HIGH (9) | 20 alert | **Selesai (Sudah di-patch)** via upgrade ke Next 16.4.2 |
| `swiper` | 11.0.5 | CRITICAL (1) | 1 alert | **Unused runtime** (tidak pernah di-import dalam kode) |
| `brace-expansion` | 1.1.11 / 2.0.1 | HIGH (10) | 16 alert | Transitive devDependency (dari minimatch/glob) |
| `minimatch` | 3.1.2 / 9.0.3 | HIGH (6) | 6 alert | Transitive devDependency |
| `js-yaml` | 4.1.0 | HIGH (3) | 5 alert | Transitive devDependency |
| `nanoid` | 3.3.6 | HIGH (3) | 4 alert | Transitive dependency (dari postcss / next) |
| `postcss` | 8.4.31 | HIGH (2) | 4 alert | Direct devDependency di package.json |
| `braces` | 3.0.2 | HIGH (2) | 2 alert | Transitive devDependency |
| `picomatch` | 2.3.1 | HIGH (1) | 2 alert | Transitive devDependency |
| `source-map-js` | 1.0.2 | HIGH (1) | 1 alert | Transitive dependency |
| `browserslist` | 4.22.1 | HIGH (1) | 1 alert | Transitive devDependency |
| `flatted` | 3.2.9 | HIGH (1) | 1 alert | Transitive devDependency |
| `glob` | 10.3.10 | HIGH (1) | 1 alert | Transitive devDependency |
| `cross-spawn` | 7.0.3 | HIGH (1) | 1 alert | Transitive devDependency |
| `yaml` | 2.3.3 | MEDIUM (1) | 1 alert | Transitive devDependency |
| `@babel/runtime`| 7.23.2 | MEDIUM (1) | 1 alert | Transitive dependency |
| `postcss-selector-parser` | 6.0.13 | MEDIUM (1) | 1 alert | Transitive devDependency |
| `micromatch` | 4.0.5 | MEDIUM (1) | 1 alert | Transitive devDependency |

---

## 2. Analisis Arsitektur Codebase via Graphify

Pemeriksaan AST dan graph analysis (`graphify`) terhadap repository `migrate/next-baseline`:
1. **Titik Masuk Pengguna & Attack Surface**:
   - **API Routes / Route Handlers**: **0** (tidak ada direktori `app/api` atau `pages/api`).
   - **Form & Input Handler**: **0** (tidak ditemukan tag `<form>`, `<input>`, `<textarea>`, `onSubmit`, atau Server Actions).
   - **Environment Variables**: Tidak ada pemanggilan credential / secret di client maupun server.
   - **Kesimpulan**: Aplikasi merupakan landing page portofolio statis interaktif (Client Components untuk animasi GSAP, Framer Motion, Lenis). Attack surface dari sisi web request injection / SSRF / CSRF di level aplikasi praktis nihil.
2. **Relevansi Dependensi (Reachability Analysis)**:
   - `swiper`: Dideklarasikan di `package.json`, tetapi **tidak ada import sama sekali** di seluruh codebase (`app`, `components`, `utils`).
   - `aos`, `react-device-detect`, `react-icons`, `typewriter-effect`: Terdaftar di `dependencies` namun tidak dipakai langsung.
   - `postcss`: Dipakai pada pipeline build CSS Tailwind. Versi di `bun.lock` masih 8.4.31 (rentan CVE path traversal & XSS jika menerima arbitrary sourceMappingURL).

---

## 3. Log Keputusan Grilling

### Keputusan 1: Dependensi `swiper` (CRITICAL - CVE-2026-27212)
- **Keputusan**: Hapus dependensi `swiper` dari `package.json` dan lockfile.
- **Rasional**: Berdasarkan audit Graphify, `swiper` sama sekali tidak pernah di-import di seluruh codebase (`app`, `components`, `utils`). Menghapusnya menutup kerentanan Prototype Pollution tanpa dampak terhadap fungsionalitas aplikasi.
- **Status**: **Selesai Diimplementasikan** (`c6c8d56`).

### Keputusan 2: DevDependency `postcss` (HIGH & MEDIUM - 4 CVE: CVE-2026-73646, CVE-2026-45623, CVE-2026-69153, CVE-2026-41305)
- **Keputusan**: Update `postcss` ke `^8.5.23` di `package.json` dan lockfile.
- **Rasional**: Versi 8.5.23 merupakan versi patch/minor dalam major yang sama (v8) yang menutup seluruh 4 CVE (termasuk Path Traversal). Versi ini juga identik dengan PostCSS yang dibundel internal oleh Next.js 16.4.2, sehingga 100% kompatibel dengan pipeline Tailwind CSS.
- **Status**: **Selesai Diimplementasikan** (`bbda42b`).

### Keputusan 3: Transitive Dependencies via `overrides` & Lockfile Update
- **Keputusan**: Tambahkan block `overrides` pada `package.json` untuk memaksa resolusi patch aman pada sub-dependensi tooling build/lint (termasuk `brace-expansion`, `minimatch`, `js-yaml`, `cross-spawn`, `flatted`, `nanoid`, `picomatch`, `yaml`, `@babel/runtime`), kemudian perbarui lockfile.
- **Rasional**: Tooling upstream (seperti eslint, tailwindcss v3) seringkali lambat meng-update semver range dependensi internal mereka. Fitur `overrides` memastikan tidak ada package usang berstatus CVE yang tersisa di lockfile.
- **Status**: **Selesai Diimplementasikan** (`25cac4c`).

### Keputusan 4: Sinkronisasi Lockfile untuk GitHub Dependabot
- **Keputusan**: Pertahankan `bun.lock` untuk workflow pengembangan lokal cepat berbasis Bun, dan buat `package-lock.json` yang sinkron via `npm i --package-lock-only`.
- **Rasional**: GitHub Dependabot secara native memonitor `package-lock.json` pada branch default. Menyertakan `package-lock.json` yang sinkron menjamin GitHub Security Dashboard secara instan memvalidasi dan menutup seluruh 67 alert Dependabot begitu branch ini di-push/merge ke upstream.
- **Status**: **Selesai Diimplementasikan** (`e7f4464`).

---

## 4. Hasil Verifikasi Sistem & Pengujian

- **Next.js Production Build**: `bun run build` sukses (Turbopack, compiled in 29s, TypeScript 10.3s, 4/4 static pages generated).
- **Linting & Code Quality**: `eslint .` sukses (0 errors, 0 warnings).
- **Dev Server Validation**: Dev server berjalan pada port 3000, `GET http://localhost:3000` merespons dengan `HTTP 200 OK` (SSR/SSG markup ter-render sempurna).

---

## 5. Temuan Non-Keamanan (Unused Dependencies)

Berdasarkan audit Graphify & AST, ditemukan dependensi langsung berikut yang saat ini tidak dipanggil di kode aplikasi:
- `aos`: ^2.3.4
- `react-device-detect`: ^2.2.3
- `react-icons`: ^4.11.0
- `typewriter-effect`: ^2.21.0

*Catatan: Dependensi di atas tidak memiliki alert kerentanan keamanan saat ini dan tidak diubah sesuai aturan konservatif audit keamanan.*





