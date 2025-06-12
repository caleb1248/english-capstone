import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { clsx } from "clsx";

type StateType = "context" | "snippet";

const snipCtx = createContext("context" as StateType);

export function ContextSnippet(
  props: PropsWithChildren<{ className?: string; snippetName?: string }>,
) {
  const [state, setState] = useState<StateType>("context");

  return (
    <snipCtx.Provider value={state}>
      <div
        className={clsx(
          "flex flex-col gap-4 rounded-xl p-5 shadow-xl",
          props.className,
        )}
      >
        <div className="flex">
          <div className="flex gap-2 rounded-full bg-black/35 p-1 *:text-sm">
            <button
              className={`rounded-full px-2 py-1 transition-colors ${
                state === "context" ? "bg-white text-black" : "bg-transparent"
              }`}
              onClick={() => setState("context")}
            >
              Context
            </button>
            <button
              className={`rounded-full px-2 py-1 transition-colors ${
                state === "snippet" ? "bg-white text-black" : "bg-transparent"
              }`}
              onClick={() => setState("snippet")}
            >
              {props.snippetName || "Snippet"}
            </button>
          </div>
        </div>
        <p className="ml-2">{props.children}</p>
      </div>
    </snipCtx.Provider>
  );
}

export function Context(props: { children: ReactNode }) {
  const currentState = useContext(snipCtx);
  if (currentState === "context") {
    return <>{props.children}</>;
  } else {
    return <></>;
  }
}

export function Snippet(props: { children: ReactNode }) {
  const currentState = useContext(snipCtx);
  if (currentState === "snippet") {
    return <>{props.children}</>;
  } else {
    return <></>;
  }
}
