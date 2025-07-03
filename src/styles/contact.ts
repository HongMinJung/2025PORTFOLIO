export const contactStyles = {
    input: {
      base: "text-sm w-full bg-white dark:bg-zinc-900 rounded-lg border px-10 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-2 focus:border-primary-500 dark:focus:border-secondary-800 placeholder:text-gray-500 dark:placeholder:text-500",
      error: "border-red-500",
      normal: "border-gray-200",
    },
    label: "block text-sm font-semibold mb-1 text-gray-800 dark:text-white",
    modal: {
      overlay: "absolute inset-0 bg-gray-300/70 dark:bg-black/70 backdrop-blur-sm",
      container: "relative bg-white/90 dark:bg-black/90 dark:border dark:border-gray-800 rounded-xl w-[90%] md:w-auto mx-4 py-10 px-10 shadow-lg",
      header: "flex justify-between items-center pb-10 mb-20 border-b border-gray-200 dark:border-gray-700 pb-4",
      closeButton: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
    },
  };