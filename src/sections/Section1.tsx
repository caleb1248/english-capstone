import { ArrowDown } from "lucide-react";
import { ContextSnippet, Context, Snippet } from "../components/ContextSnippet";

export default function Section1() {
  return (
    <section
      className="flex min-h-screen flex-col gap-10 bg-linear-to-br from-0% to-red-900/60 p-28 pt-14"
      id="section1"
    >
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h2 className="mb-4 text-[3rem] font-bold">
            To start, read this short <b className="red-accent">snippet,</b>
          </h2>
          <p>focusing on a dog named Buck.</p>
        </div>
        <div className="pt-5">
          <ContextSnippet>
            <Context>
              <p>
                Buck, a dog, is the main character of the novel{" "}
                <i>Call of the Wild.</i> He gets sent up to the Yukon to work in
                the Klondike gold rush. At one point, Buck finds his beloved
                master, John Thornton, dead on the ground, a victim of murder.
              </p>
              <br />
              <p>Click the "Snippet" button above to read how Buck reacts.</p>
            </Context>
            <Snippet>
              <blockquote>
                “Buck saw what made his hair leap straight up on his neck and
                shoulders. A <b className="red-accent">gust</b> of overpowering
                rage swept over him. He did not know that he growled but he{" "}
                <b className="red-accent">growled</b> aloud with a terrible
                ferocity. For the last time in his life he allowed{" "}
                <b className="red-accent">passion</b> to usurp cunning and
                reason, and it was because of his great{" "}
                <b className="red-accent">love</b> for John Thornton that he
                lost his head.”
              </blockquote>
              <p className="mt-3 text-sm">
                - <i>Call of the Wild,</i> by Jack London
              </p>
            </Snippet>
          </ContextSnippet>
        </div>
      </div>
      <h3 className="text-center text-xl font-bold">
        Now, take a moment to process what just happened in the clip.
      </h3>
      <ul className="text-center">
        <li>How does Buck feel?</li>
        <li>
          How do <i className="red-accent font-bold">you</i> feel?
        </li>
      </ul>

      <div className="flex justify-center">
        <button
          className="flex items-center gap-2 rounded-full bg-red-500 px-7 py-2 shadow transition hover:opacity-90 active:translate-y-1"
          onClick={() =>
            document
              .getElementById("section2")!
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
