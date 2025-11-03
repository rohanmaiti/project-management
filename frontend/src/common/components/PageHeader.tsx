import type { LucideIcon } from "lucide-react";
import React from "react";
type PageHeaderProp = {
  title: string;
  description: string;
  Icon: LucideIcon;
  buttonText: string;
  onClick: () => void;
};

export const PageHeader = ({
  title,
  description,
  Icon,
  buttonText,
  onClick,
}: PageHeaderProp) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-1">
          {" "}
          {title}{" "}
        </h1>
        <p className="text-gray-500 dark:text-zinc-400 text-sm">
          {" "}
          {description}{" "}
        </p>
      </div>
      <div>
        <button
          // onClick={() => setIsDialogOpen(true)}
          className="flex items-center gap-2 px-5 py-2 text-sm rounded bg-gradient-to-br from-blue-500 to-blue-600 text-white space-x-2 hover:opacity-90 transition"
        >
          <Icon size={16} /> {buttonText}
        </button>
      </div>
    </div>
  );
};
