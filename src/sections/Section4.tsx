import { ArrowDown } from "lucide-react";
import { Context, ContextSnippet, Snippet } from "../components/ContextSnippet";

export default function Section4() {
  return (
    <section
      className="flex min-h-screen flex-col gap-10 bg-gradient-to-br from-0% to-orange-700/50 px-28 pt-14 pb-[20rem]"
      id="section4"
    >
      <h2 className="mb-4 text-[3rem] font-bold">More examples</h2>
      <h3 className="-mb-1 text-[2rem] font-semibold">Romeo and Juliet</h3>
      <ContextSnippet className="bg-orange-900/20">
        <Context>
          <p>
            Romeo finds his wife Juliet dead in the family tomb, and decides to
            die by suicide next to her.
          </p>
        </Context>
        <Snippet>
          <p className="text-sm/7">
            Come, bitter conduct, come, unsavoury guide! <br />
            Thou desperate pilot, now at once run on
            <br />
            The dashing rocks thy sea-sick weary bark! Here's to my love! [
            <i>Drinking.</i>]<br />O true apothecary, Thy drugs are quick. Thus
            with a kiss I die.
          </p>
        </Snippet>
      </ContextSnippet>
      <div className="ml-4">
        <p className="mb-4">
          <b className="text-accent">Descriptions</b> using literary devices
          like <b className="text-accent">metaphors</b> can also be used to help
          the reader <b className="text-accent">empathize</b> with the
          characters.
        </p>
        <p>
          The <b className="text-accent"> metaphor</b> comparing death to the
          pilot of a boat who intentionally crashes into rocks helps the
          audience feel how hopeless and depressed Romeo feels.
        </p>
      </div>
      <h3 className="-mb-1 text-[2rem] font-semibold">Lord of the Flies</h3>
      <ContextSnippet className="bg-orange-900/20">
        <Context>
          <p>
            On an island, a boy named Ralph is being chased and hunted down by a
            group of boys, who have set the island on fire.
          </p>
        </Context>
        <Snippet>
          <p className="text-[0.95rem]/8">
            He [Ralph] swerved as a spear flew past and then was silent,
            running. All at once the lights flickering ahead of him merged
            together, the roar of the forest rose to thunder and a tall bush
            directly in his path burst into a great fan-shaped flame. He swung
            to the right, running desperately fast, with the heat beating on his
            left side and the fire racing forward like a tide…. He forgot his
            wounds, his hunger and thirst, and became fear;{" "}
            <b className="text-accent">hopeless fear on flying feet</b>, rushing
            through the forest toward the open beach.
          </p>
        </Snippet>
      </ContextSnippet>
      <div className="ml-4">
        <p className="mb-5">
          <b className="text-accent">Imagery</b> and other sensory details can
          also help readers and audiences empathize with characters in stories.
        </p>
        <p>
          "Fan-shaped flame," "thunder," and "hopeless fear on flying feet" are
          all examples of these sensory details that help the reader experience
          Ralph's terror.
        </p>
      </div>
      <h3 className="-mb-1 text-[2rem] font-semibold">Truman Show</h3>
      <ContextSnippet className="bg-orange-900/20" snippetName="Clip">
        <Context>
          <p>
            Truman, refusing to be conquered by the storm, shouts "IS THAT THE
            BEST YOU CAN DO?" to the people controlling the weather, as he tries
            to escape the island that he has been trapped on his whole life.
          </p>
        </Context>
        <Snippet>
          <video src="/truman.mp4" controls className="rounded-2xl"></video>
        </Snippet>
      </ContextSnippet>
      <div className="ml-4">
        <p className="mb-5">
          <b className="text-accent">Visual details</b> also help us empathize
          with characters.
        </p>
        <p>
          Even though we see these visual details such as the{" "}
          <b className="text-accent">heavy wind and downpour</b> that slam
          against Truman, when he speaks defiantly, he makes us feel his
          strength and <b className="text-accent">determination</b>.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className="group mt-10 flex items-center gap-2 rounded-full bg-orange-500 px-7 py-2 shadow transition hover:opacity-90 focus:outline-orange-500 active:translate-y-1"
          onClick={() =>
            document
              .getElementById("section5")!
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          So <i>why</i> is this empathy important?
          <b className="not-group-active:animate-arrowdown flex items-center">
            <ArrowDown />
          </b>
        </button>
      </div>
    </section>
  );
}
