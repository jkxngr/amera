import Image from "next/image";
import React from "react";
import img1 from "../../public/banner.png";
import img2 from "../../public/banner2.png";
import img3 from "../../public/banner3.png";
export const MiniBanner = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <img src={img1.src}  />
      <img src={img2.src}  />
      <img src={img3.src}  />
    </div>
  );
};
