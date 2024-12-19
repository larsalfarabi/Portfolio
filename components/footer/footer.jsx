import { ScrollToTop } from "../../utils/scrollToTop";
export default function Footer() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div className="flex select-none flex-col items-start font-DM_sans text-[clamp(.75rem,3vw,1rem)] text-primary">
          <p>
            © Folio 2024 <span className="font-semibold">LARS ALFARABI</span>
          </p>
          <p>Site designed and coded with ❤️‍🔥</p>
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}
