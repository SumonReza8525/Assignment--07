import React from "react";
import Container from "./Container";
import tLogo from "../assets/fi_5969020.png";
import lLogo from "../assets/fi_145807.png";
import gLogo from "../assets/fi_6244710.png";
import fLogo from "../assets/fi_5968764.png";
const Footer = () => {
  return (
    <div className="bg-black pt-20 pb-6 flex justify-center items-center flex-col ">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 px-3">
          {/* div 1 */}
          <div className="space-y-2.5">
            <h2 className="text-xl font-bold text-white">Cs--Ticket System</h2>
            <p className="text-gray-300 text-sm w-60">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* div 2 */}
          <div>
            <ul className="text-gray-300 space-y-2.5">
              <li className="text-white font-bold text-xl">Company</li>
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>

          {/* div 3 */}

          <div>
            <ul className="text-gray-300 space-y-2.5">
              <li className="text-white font-bold text-xl">Services</li>
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>

          {/* div 4 */}
          <div>
            <ul className="text-gray-300 space-y-2.5">
              <li className="text-white font-bold text-xl">Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>

          {/* div 5 */}
          <div>
            <ul className="text-gray-300 space-y-3">
              <li className="text-white font-bold text-xl">Social Links</li>
              <li className="flex gap-1.5">
                <img src={tLogo} alt="" />
                @CS--Ticket System
              </li>
              <li className="flex gap-1.5">
                <img src={lLogo} alt="" />
                @CS--Ticket System
              </li>
              <li className="flex gap-1.5">
                <img src={fLogo} alt="" />
                @CS--Ticket System
              </li>
              <li className="flex gap-1.5">
                <img src={gLogo} alt="" />
                @CS--Ticket System
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <p className="text-white text-center mt-10 text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
