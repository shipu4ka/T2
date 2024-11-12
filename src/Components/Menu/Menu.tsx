import { FC, useState } from "react";
import { LocationIcon } from "../Icons/LocationIcon";
import { menuItems } from "./Menu.const";
import "./Menu.css";
import classNames from "classnames";

interface IProps {
  isMenuOpen: boolean;
}

export const Menu: FC<IProps> = ({ isMenuOpen }) => {
  const [selectedItem, setSelectedItem] =
    useState<string>("Преимущества Теle2");

  return (
    <nav className={classNames("menu", { menu_open: isMenuOpen })}>
      <ul className="menu__navigation">
        {menuItems.map((item) => (
          <li
            className={classNames("menu__navigation-item", {
              "menu__navigation-item_active": item === selectedItem,
            })}
            onClick={() => setSelectedItem(item)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="menu__location">
        <LocationIcon />
        <p>Москва и область</p>
      </div>
    </nav>
  );
};
