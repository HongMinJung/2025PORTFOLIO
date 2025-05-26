export const contactStyles = {
    input: {
      base: "text-sm w-full rounded-lg border bg-white dark:bg-zinc-900 px-10 py-3 text-gray-800 dark:text-white focus:outline-none focus:border-2 focus:border-primary-500 dark:focus:border-secondary-800 placeholder:text-gray-500 dark:placeholder:text-500",
      error: "border-red-500",
      normal: "border-gray-200",
    },
    label: "block text-sm font-semibold mb-1 text-gray-800 dark:text-white",
    button: {
      base: "w-full mt-8 py-3 rounded-lg bg-primary text-gray-800 dark:text-white border dark:border-gray-700 font-medium text-md transition",
      hover: "hover:bg-primary-100 hover:border-primary-300 dark:hover:bg-secondary-200/10",
      focus: "focus:outline-none focus:border-2 focus:bg-primary-300/40 dark:focus:bg-secondary-400/20 focus:border-primary-300 dark:focus:border-secondary-800 focus:ring-offset-2",
    },
    modal: {
      overlay: "absolute inset-0 bg-gray-300/70 dark:bg-black/70 backdrop-blur-sm",
      container: "relative bg-white/90 dark:bg-black/90 rounded-xl w-[600px] mx-4 py-20 px-10 shadow-lg",
      header: "flex justify-between items-center pb-10 mb-20 border-b border-gray-200 dark:border-gray-700 pb-4",
      closeButton: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
    },
  };