import Divider from "@/utils/divider";
import { MotionHeader } from "@/utils/motionHeader";
import MotionCard from "@/utils/motionCard";

export default function Project() {
  return (
    <section id="proyek" className="scroll-mt-20">
      <MotionHeader title="Proyek" meta="Karya terpilih" />
      <MotionCard />
      <Divider />
    </section>
  );
}
