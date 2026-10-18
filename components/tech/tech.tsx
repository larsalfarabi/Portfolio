import CardTech from "@/utils/cardTech";
import Divider from "@/utils/divider";
import { MotionHeader } from "@/utils/motionHeader";
import type { ReactNode } from "react";

interface TechItem {
  icon: ReactNode;
  name: string;
  content: string;
}

interface props {
  tech: TechItem[];
  tool: TechItem[];
  ai: TechItem[];
}

const Tech = ({ tech, tool, ai }: props) => {
  // Kelompok dengan data kosong tidak dirender, jadi tidak ada heading menggantung.
  const groups = [
    { title: "Teknologi Inti", items: tech },
    { title: "Perangkat & Tools", items: tool },
    { title: "Pengembangan Berbantuan AI", items: ai },
  ].filter((group) => group.items.length > 0);

  return (
    <section id="keahlian" className="scroll-mt-20">
      <MotionHeader title="Keahlian" meta="Stack yang saya pakai" />

      <div className="space-y-12">
        {groups.map((group) => (
          <div key={group.title} data-reveal>
            <p className="meta-label mb-2">{group.title}</p>
            <ul
              data-reveal-list
              className="grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-4"
            >
              {group.items.map((item) => (
                <li key={item.name}>
                  <CardTech
                    name={item.name}
                    icon={item.icon}
                    content={item.content}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Divider />
    </section>
  );
};

export default Tech;
