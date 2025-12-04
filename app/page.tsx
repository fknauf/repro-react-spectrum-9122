"use client";

import { ActionButton } from "@adobe/react-spectrum";

export default function Home() {
  return <>
    <button data-cy="plain-btn">
      Plain
    </button>
    <ActionButton data-cy="spectrum-btn">
      Spectrum
    </ActionButton>
  </>;
}
