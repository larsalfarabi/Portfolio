import Divider from "@/utils/divider";
import { MotionDiv } from "@/utils/motionDiv";
export default function Project() {
  return (
    <section>
      <h1
        className="text-2xl font-DM_sans text-primary font-extrabold mb-5"
      >
        Project
      </h1>
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
