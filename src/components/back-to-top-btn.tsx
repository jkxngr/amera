"use client"
import React from "react";

export const BackToTop = () => {
  return (
    <div>
      <button
        className="bg-property py-[15px] text-white text-center w-full"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to Top
      </button>
    </div>
  );
};
