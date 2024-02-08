import React from "react";
import { FooterLink } from "../footer_link/footer-link.components";

export const Footer = () => {
  return (
    <div className="bg-gray-900 p-12">
      <div>
        <div className="mb-4">
          <span className="uppercase font-bold text-sm text-zing-500">
            Contacts
          </span>
        </div>
      </div>
      <div className="mb-8">
        <ul>
          <FooterLink href="tel:+380508331679">050 833 16 79</FooterLink>
          <FooterLink href="mailto:jeruselem@gmail.com">jeruselem@gmail.com</FooterLink>
        </ul>
      </div>
      <div>
        <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
        <div>
            <span className="text-xl font-semibold text-white ">🍕 PizzaStack</span>
        </div>
      </div>
    </div>
  );
};
