import { ArrowDown } from "lucide-react";
import { Context, ContextSnippet, Snippet } from "../components/ContextSnippet";

export default function Section3() {
  return (
    <section
      className="flex min-h-screen flex-col bg-gradient-to-br from-green-900/20 to-green-700/50 p-28 pt-14"
      id="section3"
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="mb-4 text-[3rem] font-bold">
            So <i className="font-bold text-green-500">how</i> do we help
            readers empathize?
          </h2>
          <p>
            The <span className="font-bold text-green-500">details</span> make
            all the difference. Here is an example.
          </p>
        </div>
        <ContextSnippet className="bg-green-900/20">
          <Context>
            A girl overhears her relatives making fun of a thoughtful Christmas
            present that she handmade for them.
          </Context>
          <Snippet>
            <p className="text-[0.9rem]">
              “I stood in the kitchen and heard all that and you can bet it{" "}
              <b className="green-accent">burned me to a crisp.</b> I felt my
              chest all the way up through my neck clear to my hair return red.
              And I walked the rest of the way to my room where I stayed all
              night not able to sleep with my{" "}
              <b className="green-accent">anger</b> and{" "}
              <b className="green-accent">shame</b>…”
            </p>
            <br />
            <p className="text-sm">
              - From <i>Ellen Foster</i>, by Kaye Gibbons
            </p>
          </Snippet>
        </ContextSnippet>
      </div>
      <div className="mt-10 px-5 text-center">
        <b className="green-accent">Details</b>, like "burned me to a crisp,"
        and also "anger" and "shame" describe the character's feelings. These
        details help the readers better empathize with the characters.
      </div>
      <div className="flex justify-center">
        <button
          className="mt-10 flex items-center gap-2 rounded-full bg-green-500 px-7 py-2 shadow transition hover:opacity-90 active:translate-y-1"
          onClick={() =>
            document
              .getElementById("section4")!
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Next
          <span className="animate-arrowdown flex items-center">
            <ArrowDown />
          </span>
        </button>
      </div>
    </section>
  );
}
