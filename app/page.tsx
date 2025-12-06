"use client";

import { SyntheticEvent } from "react";

export default function Home() {
  const logPlainBtnEvent = (handler: string) => (e: SyntheticEvent<HTMLButtonElement>) => {
    console.log("plain-btn", handler, e.nativeEvent.type, e.eventPhase, e.target);
  };

  return <>
    <button
      data-cy="plain-btn"
      onMouseEnter={logPlainBtnEvent("MouseEnter")}
      onMouseLeave={logPlainBtnEvent("MouseLeave")}
      onMouseOut={logPlainBtnEvent("MouseOut")}
      onMouseOutCapture={logPlainBtnEvent("MouseOutCapture")}
      onMouseOverCapture={logPlainBtnEvent("MouseOverCapture")}
      onMouseOver={logPlainBtnEvent("MouseOver")}

      onPointerEnter={logPlainBtnEvent("PointerEnter")}
      onPointerLeave={logPlainBtnEvent("PointerLeave")}
      onPointerOut={logPlainBtnEvent("PointerOut")}
      onPointerOutCapture={logPlainBtnEvent("PointerOutCapture")}
      onPointerOver={logPlainBtnEvent("PointerOver")}
      onPointerOverCapture={logPlainBtnEvent("PointerOverCapture")}
    >
      Plain
    </button>
    <div data-cy="clickable-area">&nbsp;</div>
  </>;
}
