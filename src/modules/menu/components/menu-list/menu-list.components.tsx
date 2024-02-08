import React from "react"
import pizzaMenu from '@app/mocks/pizza.json'
import { MenuItem } from "../menu-items/menu-items.components"

export const MenuList = ()=>{
    return (
    <div className="flex flex-wrap gap-10  justify-center">
        {pizzaMenu.map(({image,...pizza}) => (
            <MenuItem   {...pizza} imagePath={'/assets/pizza/'+image}/>
        ))}
    </div>
    )
}