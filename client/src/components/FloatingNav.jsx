import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../utils/cn";


export const FloatingNav = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();


  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    let direction = current - scrollYProgress.getPrevious();

    if (scrollYProgress.get() < 0.05) {
      setVisible(true);
    } else {
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[300px]  border-2 border-blue-700  fixed top-3 inset-x-0 mx-auto dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-2  items-center justify-center space-x-3",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <div
            onClick={() => window.scrollTo({ top: navItem.link, behavior: 'smooth' })}
            key={idx}
            href={navItem.link}
            className={cn(
              "relative p-1 dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm cursor-pointer">{navItem.name}</span>
          </div>
        ))}

      </motion.div>
    </AnimatePresence>
  );
};
