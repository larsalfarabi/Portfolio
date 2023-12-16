import { MotionDiv } from "./motionDiv";
export default function Divider() {
  return (
    <MotionDiv
      initial={{ x: 0, y: 0, width: 0 }}
      animate={{
        x: 0,
        y: 0,
        width: 510,
        transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
      }}
      className="my-5 h-[1px] bg-black w-full opacity-30"
    />
  );
}
