import React, { useState } from "react";
import { motion } from "framer-motion";

export interface Tab {
  label: string;
  href?: string;
}

export default function ChipTabs({
  tabs,
  activeTab,
  onSelect,
}: {
  tabs: Tab[];
  activeTab?: string;
  onSelect?: (tab: Tab) => void;
}) {
  const [internalSelected, setInternalSelected] = useState(tabs[0].label);
  const selected = activeTab ?? internalSelected;

  return (
    <div className="flex gap-6 px-6 py-4">
      {tabs.map((tab) => {
        const isActive = selected === tab.label;

        return (
          <div
            key={tab.label}
            className="relative w-28 h-10"
          >
            {/* BLACK BASE (fills space when tab lifts) */}
            <div className="absolute inset-0 rounded-lg bg-white" />

            {/* TAB CARD */}
            <motion.button
              onClick={() => {
                setInternalSelected(tab.label);
                onSelect?.(tab);
              }}
              initial={false}
              animate={{
                y: isActive ? -4 : 0,
              }}
              whileHover={{
                rotateZ: -3,
                // y: -4,
              }}
              transition={{
                type: "tween",
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformOrigin: "left bottom",
              }}
              className={`
                absolute inset-0 rounded-lg border
                flex items-center justify-center
                transition-colors bg-black
                ${
                  isActive
                    ? "text-primary border-primary font-medium"
                    : "text-white border-white font-normal"
                }
              `}
            >
              {tab.label}
            </motion.button>
          </div>
        );
      })}
    </div>
  );
}
