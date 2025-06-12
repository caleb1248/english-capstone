import { ArrowDown } from "lucide-react";

export default function Section2() {
  return (
    <section
      className="flex min-h-screen flex-col gap-10 bg-gradient-to-br from-0% to-sky-700/50 p-28 pt-14"
      id="section2"
    >
      <div>
        <div>
          <h2 className="mb-4 text-[2rem] font-bold">
            You might felt the{" "}
            <span className="font-bold text-sky-400">same way</span> that Buck
            felt when you read that snippet.
          </h2>
          <p>
            This is a process called{" "}
            <span className="font-bold text-sky-400">empathy,</span> where one
            person connects to and experiences the feelings and emotions of
            another.
          </p>
          <br />
          <p>
            Storytelling lets the audience empathize and connect to the
            characters in stories.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="mt-10 flex items-center gap-2 rounded-full bg-blue-500 px-7 py-2 shadow transition hover:opacity-90 active:translate-y-1"
          onClick={() =>
            document
              .getElementById("section3")!
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          But how?
          <span className="animate-arrowdown flex items-center">
            <ArrowDown />
          </span>
        </button>
      </div>
    </section>
  );
}
