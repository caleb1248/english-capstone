import { ArrowUp } from "lucide-react";

export default function Sources() {
  return (
    <section
      className="flex min-h-screen flex-col gap-10 bg-white p-28 pt-14 text-black"
      id="sources"
    >
      <div>
        <div>
          <h2 className="mb-10 text-[3rem] font-bold">Sources</h2>
          <p
            style={{
              fontFamily: '"Times New Roman"',
            }}
            dangerouslySetInnerHTML={{
              __html: `
            <pre style="margin: 0px; line-height: 2; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Gibbons, Kaye. <i>Ellen Foster</i>. Vintage Books, 1987. </pre><pre style="margin: 0px; line-height: 2; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Golding, William. <i>Lord of the Flies</i>. New York City, Perigee, 1954. </pre><pre style="margin: 0px; line-height: 2; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">London, Jack. <i>Call of the Wild</i>. Macmillan, 1903. </pre><pre style="margin: 0px; line-height: 2; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Shakespeare, William, et al. <i>The Tragedy of Romeo and Juliet</i>. Washington Square Press new Folger's </pre><pre style="margin: 0px; line-height: 2; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">     ed ed., Washington Square Press Published by Pocket Books, 1992. </pre><pre style="margin: 0px; line-height: 2; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><i>The Truman Show</i>. Directed by Peter Weir, produced by Andrew Niccol, Paramount Pictures, 1998. </pre>`,
            }}
          ></p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="mt-10 flex items-center gap-2 rounded-full bg-slate-500 px-7 py-2 text-white shadow transition hover:opacity-90 active:translate-y-1"
          onClick={() =>
            document
              .getElementById("title")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Back to top
          <span className="animate-arrowdown flex items-center">
            <ArrowUp />
          </span>
        </button>
      </div>
    </section>
  );
}
