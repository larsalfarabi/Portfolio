export const MotionHeader = ({
  title,
  meta,
}: {
  title: string;
  meta?: string;
}) => {
  return (
    <div
      data-reveal
      className="rule mb-10 flex flex-col items-baseline justify-between gap-4 pt-6 md:mb-14 md:flex-row"
    >
      <h2 className="section-title text-5xl md:text-7xl lg:text-8xl">
        {title}.
      </h2>
      {meta ? <span className="meta-label shrink-0">{meta}</span> : null}
    </div>
  );
};
