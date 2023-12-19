import CardTech from "@/utils/cardTech";
import React from "react";
import { NextPage } from "next";
import Divider from "@/utils/divider";
import { MotionHeader } from "@/utils/motionHeader";

interface props {
  item: { icon: JSX.Element; name: string }[];
  title: string;
}

const renderItem = (
  item: { icon: JSX.Element; name: string },
  index: number
) => {
  const delay = index * 100;
  return (
    <div
      key={item.name}
      data-aos="zoom-in"
      data-aos-delay={delay}
      data-aos-duration="300"
      data-aos-once="true"
    >
      <CardTech name={item.name} icon={item.icon} />
    </div>
  );
};

const Tech: NextPage<props> = ({ item, title }) => {
  return (
    <section>
      <MotionHeader title={`${title}`} />
      <div className="grid grid-cols-3 gap-3">{item.map(renderItem)}</div>{" "}
      <Divider />
    </section>
  );
};

export default Tech;
