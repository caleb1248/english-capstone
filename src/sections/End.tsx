import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function End() {
  return (
    <section
      id="end"
      className="flex min-h-screen flex-col bg-linear-to-b from-black to-black px-28 pt-28 pb-14"
    >
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="m-0 mb-16 text-center text-7xl font-semibold">
          In <span className="text-accent">conclusion,</span>
        </h1>
        <p className="text-center text-xl">
          We tell and read stories to <b className="text-accent"> empathize</b>{" "}
          with characters in the stories.
          <div className="h-8"></div>
          <b className="text-accent">Details</b> and literary devices that
          describe characters' emotions and feelings{" "}
          <b className="text-accent">help</b> the audience empathize better.
          <div className="h-8"></div>
          Empathy can <b className="text-accent">change</b> people's views and
          allow them to <b className="text-accent">connect</b> with others.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-accent group: mt-10 flex items-center gap-2 rounded-full px-7 py-2 shadow transition hover:opacity-90 active:translate-y-1"
          onClick={() =>
            document
              .getElementById("sources")!
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Sources
          <span className="not-active:animate-arrowdown flex items-center">
            <ArrowDown />
          </span>
        </button>
      </div>
    </section>
  );
}
