import { Zap } from "lucide-react";


export const Logo = () => {
  return (
    <div className="p-2 border-b border-gray-200 dark:border-zinc-800">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 dark:from-indigo-500 dark:to-cyan-400 flex items-center justify-center shadow-lg">
          <Zap className="size-5 text-white" strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
            M-Project
          </h1>
          <p className="text-xs text-gray-500 dark:text-zinc-500">
            Project Management
          </p>
        </div>
      </div>
    </div>
  );
};
