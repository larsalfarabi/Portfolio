"use client";
import { Tooltip } from "@nextui-org/react";

export default function CardTech(props) {
  const cardContent = (
    <div className="flex items-center gap-3 border-b border-[var(--border-color)] py-3 transition-colors duration-300 hover:border-[var(--accent-color)]">
      <span className="shrink-0">{props.icon}</span>
      <span className="text-sm font-medium">{props.name}</span>
    </div>
  );

  // Tanpa deskripsi, tidak ada yang bisa ditampilkan tooltip-nya.
  if (!props.content) {
    return cardContent;
  }

  return (
    <Tooltip
      showArrow={true}
      content={
        <div className="max-w-xs font-sans text-[12px] leading-relaxed">
          <div className="meta-label mb-1 !text-[var(--accent-color)]">
            Ringkasan
          </div>
          {props.content}
        </div>
      }
      classNames={{
        content:
          "bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-3 max-w-xs text-[var(--text-color)]",
      }}
      triggerScaleOnOpen={true}
    >
      {cardContent}
    </Tooltip>
  );
}
