"use client";

import { ActionButton } from "@adobe/react-spectrum";

export default function Home() {
  return <>
    <button
      data-cy="plain-btn"
      onBlur={console.log}
      onClick={console.log}
      onFocus={console.log}
      onMouseEnter={console.log}
      onMouseOver={console.log}
      onMouseDown={console.log}
      onMouseUp={console.log}
      onMouseLeave={console.log}
      onMouseMove={console.log}
      onMouseOut={console.log}
    >
      Plain
    </button>
    <ActionButton data-cy="spectrum-btn">
      Spectrum
    </ActionButton>
  </>;
}
