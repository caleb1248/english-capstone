import React from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const Title: React.FC = () => {
  return (
    <div
      className="flex min-h-screen flex-col bg-linear-to-b from-black to-black px-28 pt-28 pb-14"
      id="title"
    >
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="m-0 mb-16 text-center text-7xl font-semibold">
          Why we tell <span className="text-accent">stories</span>
        </h1>
        <p className="text-center text-xl font-semibold">
          A story of <span className="text-accent">empathy</span>, emotions, and{" "}
          connections.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-accent mt-10 flex items-center gap-2 rounded-full px-7 py-2 shadow transition hover:opacity-90 active:translate-y-1"
          onClick={() =>
            document
              .getElementById("section1")!
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn about it
          <motion.span
            animate={{
              y: [-3, 3, -3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeIn",
            }}
            className="flex items-center"
          >
            <ArrowDown />
          </motion.span>
        </button>
      </div>
    </div>
  );
};

export default Title;
