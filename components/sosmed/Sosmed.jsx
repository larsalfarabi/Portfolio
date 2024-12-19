import { ArrowRight } from "iconsax-react";
import Link from "next/link";
export default function Sosmed() {
  const sosmed = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/larsalfarabi/",
    },
    { name: "Github", link: "https://github.com/larsalfarabi" },
    { name: "Bento", link: "https://bento.me/alfarabi" },
  ];
  return (
    <div className="mt-9 flex gap-2">
      {sosmed.map((item, index) => {
        const delay = index * 100;
        return (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            className="card"
            data-aos-delay={delay}
            data-aos="fade-up"
            data-aos-duration="550"
          >
            <p className="font-DM_sans font-medium">{item?.name}</p>
            <ArrowRight size={14} className="-rotate-45" variant="TwoTone" />
          </Link>
        );
      })}
    </div>
  );
}
