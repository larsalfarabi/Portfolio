import Divider from "@/utils/divider";
import { MotionHeader } from "@/utils/motionHeader";
import MotionCard from "@/utils/motionCard";
export default function Project() {
  return (
    <section className="h-full">
      <MotionHeader title="Project" />
      <MotionCard />
      <Divider className="my-5 h-[1px] w-full bg-black" />
    </section>
  );
}
