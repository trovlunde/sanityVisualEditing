// ./src/app/(blog)/layout.tsx
"use client";

import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { useEffect, useState } from "react";

export default function VisEd() {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  return <div>{client && draftMode().isEnabled && <VisualEditing />}</div>;
}
