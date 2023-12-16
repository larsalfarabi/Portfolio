import { Poppins, Roboto_Mono, DM_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ['500',"600", "700", "800", "900"],
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export { poppins, dm_sans, roboto_mono };
