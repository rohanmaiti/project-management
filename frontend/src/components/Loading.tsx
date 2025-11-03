import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400"
        >
          <Loader2 className="w-full h-full text-white" />
        </motion.div>
        
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Loading
        </motion.h2>
        
        <motion.div
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 rounded-full mx-auto"
          style={{ maxWidth: '200px' }}
        />
        
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Please wait a moment...
        </p>
      </div>
    </motion.div>
  );
};