import * as React from "react";

export default function Page() {
  return (
    <main className="p-4 min-h-screen border flex flex-col w-full max-w-screen-lg mx-auto">
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
              <p> adewale.johnson@example.com</p>
            </div>
          </div>
          <div className="w-full  p-4">
            <h3 className="text-xs font-geist-mono">[ contact ]</h3>
            <div className="text-xs font-geist-mono ">
              <p> Adewale Johnson</p>
              <p> +234 803 456 7890</p>
              <p> adewale.johnson@example.com</p>
            </div>
          </div>

          <div className="p-4 md:col-start-2">
            <h3 className="text-xs font-geist-mono">[ gmt ]</h3>
            <h3 className="font-humane leading-none text-[25vw] font-bold">
              03:35
            </h3>
          </div>
        </div>
      </section>
      <section className=" flex-1 flex md:justify-center"></section>
    </main>
  );
}
