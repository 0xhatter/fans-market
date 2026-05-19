"use client";

import dynamic from "next/dynamic";

const FansMarketApp = dynamic(() => import("@/components/FansMarketApp"), {
  ssr: false,
});

export default function HomeClient() {
  return <FansMarketApp />;
}
