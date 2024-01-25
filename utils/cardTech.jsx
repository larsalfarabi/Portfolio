"use client";
import { Tooltip } from "@nextui-org/react";

export default function CardTech(props) {
  return (
    <Tooltip
      showArrow={true}
      content={
        <div className="px-1 py-2 font-DM_sans">
          <div className="text-sm font-semibold">It means</div>
          <div className="text-[13px] leading-[18px]">{props.content}</div>
        </div>
      }
      className="max-w-xs bg-[#fbf8f8] text-justify text-black"
      triggerScaleOnOpen={true}
    >
      <div className="select-none rounded-lg bg-base_col text-[#e8e8e8] duration-500 hover:bg-[#303030]">
        <div className="flex flex-col items-center justify-center gap-1.5 p-6 ">
          {" "}
          {props.icon}
          <p className="font-DM_sans text-xs font-semibold">{props.name}</p>
        </div>
      </div>
    </Tooltip>
  );
}
