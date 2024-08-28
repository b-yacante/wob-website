"use client";
import { WoBButton } from "@/app/components/button";

function msg() {
  console.log("msg");
}
export default function News() {
  return (
    <div className="grid place-items-center">
      <WoBButton color="primary" onClick={msg}> asd </WoBButton>
      {/* <div className="bg-white w-full h-full rounded-lg shadow-md p-4 animate-pulse"></div> */}
    </div>
  );
}
