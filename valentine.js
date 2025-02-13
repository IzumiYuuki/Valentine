/** @jsxImportSource https://esm.sh/react@18.2.0 */
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import React, { useState } from "https://esm.sh/react@18.2.0";

const NO_PHRASES = [
  "No 💔", "Pretty please? 🥺", "But we'd be so cute together! 💕",
  "One more chance, pookie?", "Don't break my heart :(",
  "What about a maybe?", "Please don't do this to me, I'm fragile",
];

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = (noClicks * 20) + 16;

  return React.createElement("div", { style: { textAlign: "center", padding: "50px" } },
    !isValentine
      ? React.createElement("div", null,
          React.createElement("img", { src: "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif" }),
          React.createElement("h1", null, "Will you be my Valentine? 💘"),
          React.createElement("button", {
            onClick: () => setIsValentine(true),
            style: { fontSize: `${yesButtonSize}px`, backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", margin: "10px" }
          }, "Yes"),
          React.createElement("button", {
            onClick: () => setNoClicks(prev => prev + 1),
            style: { fontSize: "16px", backgroundColor: "red", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", margin: "10px" }
          }, noClicks === 0 ? "No" : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)])
        )
      : React.createElement("div", null,
          React.createElement("img", { src: "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif" }),
          React.createElement("div", { style: { fontSize: "48px", color: "pink", fontWeight: "bold" } }, "Yay!!! 💖🎉")
        )
  );
}

function client() {
  createRoot(document.getElementById("root")).render(React.createElement(App));
}

if (typeof document !== "undefined") { client(); }
