import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          The <span className="text-blue-400">Athlete's</span> Creed
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I solemnly swear to respect my journey of{" "}
        <span className="text-blue-400 font-medium">strength and health</span>,
        pushing beyond my limits with every workout. I commit to lifting not
        just weights, but also my spirits and those of my fellow athletes,
        fostering an environment of{" "}
        <span className="text-blue-400 font-medium">
          growth, endurance, and mutual support.
        </span>
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}
