import React from "react";
import { Header } from "./common/components/header/header.components";
import { MenuList } from "./modules/menu/components/menu-list/menu-list.components";
import pizzaMenu from '../src/mocks/pizza.json'
import { Footer } from "./common/components/footer/footer.components";
export const  App = () => {
  return (
    <div>
      <Header/>
      <div className="mx-2 mb-24">
       <MenuList items={pizzaMenu}/>
      </div>
      <Footer/>
    </div>
  );
}


