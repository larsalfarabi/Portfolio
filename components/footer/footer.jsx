import { MotionDiv } from "@/utils/motionDiv";
import { Copyright } from "iconsax-react";
import { ScrollToTop } from "../../utils/scrollToTop";
export default function Footer() {
  return (
    <div>
      {" "}
      <div className="fixed bottom-6 left-6 ">
        <ScrollToTop />
      </div>
      <div className="fixed bottom-6 right-6">
        <MotionDiv
          initial={{ x: 80, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 0.4 } }}
          className="flex justify-center items-center bg-[#3030300d] rounded-md w-20 h-10 gap-1 text-primary"
        >
          <Copyright variant="TwoTone" />
          <p className="font-roboto_mono text-sm  font-medium"> 2023</p>
        </MotionDiv>
      </div>
    </div>
  );
}
