import Divider from "@/utils/divider";
import { MotionDiv } from "@/utils/motionDiv";
import { MotionHeader } from "@/utils/motionHeader";
export default function Project() {
  return (
    <section className="h-full">
      <MotionHeader title="Project" />
      <MotionDiv
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        data-aos="fade-up"
        data-aos-duration="550"
      >
        <div className="w-full h-[214px] bg-base_col rounded-lg"></div>
        <div className="w-full h-[214px] bg-base_col rounded-lg"></div>
      </MotionDiv>{" "}
      <Divider className="bg-black w-full h-[1px] my-5" />
    </section>
  );
}
