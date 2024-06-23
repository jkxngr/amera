
import React from "react";
import { CardIcon } from "../../public/card-icon";
import { BackToTop } from "./back-to-top-btn";

export const Foooter = () => {
  return (
    <div>
      <BackToTop />
      <div className="bg-darksea  ">
        <div className="mx-[50px] py-[70px] flex justify-between flex-wrap">
          <ul className="flex flex-col gap-[5px]">
            <h3 className="text-white  text-base font-medium mb-6 ">
              Company Info
            </h3>
            <li>
              <a href="#" className="text-steam text-sm">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Business With Us
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Find a Store
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Press & Talent
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-[5px]">
            <h3 className="text-white  text-base font-medium mb-6 ">
              Let Us Help You
            </h3>

            <li>
              <a href="#" className="text-steam text-sm">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Downloads
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Addresses
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Account details
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Lost password
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-[5px]">
            <h3 className="text-white  text-base font-medium mb-6 ">
              Quick Links
            </h3>

            <li>
              <a href="#" className="text-steam text-sm">
                Special Offers
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                F21 Red
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Teams of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Portfolio
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-[5px]">
            <h3 className="text-white  text-base font-medium mb-6 ">
              Company Info
            </h3>

            <li>
              <a href="#" className="text-steam text-sm">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Business With Us
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Find a Store
              </a>
            </li>
            <li>
              <a href="#" className="text-steam text-sm">
                Press & Talent
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-infinity py-[30px]   ">
          <div className="mx-[50px]  flex items-center justify-between flex-wrap">
            <p>Copyright © 2019 amera Theme by Lionthemes88</p>
            <ul className="flex gap-5 flex-wrap">
              <li>
                <a href="" className="text-steam text-sm ">
                  Site Map
                </a>
              </li>
              <li>
                <a href="" className="text-steam text-sm ">
                  Search Terms{" "}
                </a>
              </li>
              <li>
                <a href="" className="text-steam text-sm ">
                  Advanced Search{" "}
                </a>
              </li>
              <li>
                <a href="" className="text-steam text-sm ">
                  Contact Us.
                </a>
              </li>
            </ul>
            <div className="xs:max-w-[400px] xs:block s:hidden">
              <CardIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
