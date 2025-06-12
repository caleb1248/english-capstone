import { ArrowDown } from "lucide-react";

export default function Section5() {
  return (
    <section
      className="flex min-h-screen flex-col gap-10 bg-gradient-to-br from-0% to-teal-700/50 p-28 pt-14"
      id="section5"
    >
      <div>
        <div>
          <h2 className="mb-4 text-[3rem]">
            The <b className="text-teal-400">power </b>
            of empathy
          </h2>
          <p>
            Empathy allows people to <b className="text-teal-400">connect</b>{" "}
            with others and{" "}
            <b className="text-teal-400">build relationships.</b> <br />
            <br /> It also helps to understand other people's perspectives. It
            can
            <b className="text-teal-400"> change</b> people's opinions on
            topics.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="mt-10 flex items-center gap-2 rounded-full bg-teal-500 px-7 py-2 shadow transition hover:opacity-90 active:translate-y-1"
          onClick={() =>
            document
              .getElementById("end")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Almost done!
          <b className="animate-arrowdown flex items-center">
            <ArrowDown />
          </b>
        </button>
      </div>
    </section>
  );
}
