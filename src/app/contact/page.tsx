"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 60000); // Updates every 60000ms = 1 minute

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [time]);

  const getNigerianTime = () => {
    const currentTime = new Date();
    const offset = 1; // Nigerian Time (UTC +1)
    currentTime.setHours(currentTime.getUTCHours() + offset);
    return currentTime;
  };

  return (
    <main className="min-h-screen border flex flex-col w-full max-w-screen-lg mx-auto">
      <section className="flex-1 flex items-end py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4">
            <h3 className="text-xs font-geist-mono">[ location ]</h3>
            <p className="text-xs font-geist-mono">
              23 Akin Adesola Street, Victoria Island, Lagos, Nigeria
            </p>
          </div>
          <div className="w-full p-4">
            <h3 className="text-xs font-geist-mono">[ info ]</h3>
            <div className="text-xs font-geist-mono ">
              <p> Adewale Johnson</p>
              <p> +234 803 456 7890</p>
              <p> holla@nate.work</p>
            </div>
          </div>
          <div className="w-full  p-4">
            <h3 className="text-xs font-geist-mono">[ contact ]</h3>
            <div className="text-xs font-geist-mono ">
              <p> Adewale Johnson</p>
              <p> +234 803 456 7890</p>
              <p> holla@nate.work</p>
            </div>
          </div>

          <div className="p-4 col-start-1 md:col-start-2">
            <h3 className="text-xs font-geist-mono">[ gmt +1 ]</h3>
            <h3 className="font-humane leading-none text-[25vw] font-bold">
              {getNigerianTime().toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
