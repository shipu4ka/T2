import { useState } from "react";
import { BellIcon } from "../Icons/BellIcon";
import { BurgerMenuIcon } from "../Icons/BurgerMenuIcon";
import { InboxIndicatorIcon } from "../Icons/InboxIndicatorIcon";
import { LocationIcon } from "../Icons/LocationIcon";
import { Tele2Logo } from "../Logo/Tele2Logo";
import "./Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuVisible = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header__content">
        <Tele2Logo />
        <div className="header__info">
          <div className="header__location">
            <LocationIcon />
            <p>Москва и область</p>
          </div>
          {!isMenuOpen && (
            <div className="header__notifications">
              <BellIcon />
              <InboxIndicatorIcon />
            </div>
          )}
          <BurgerMenuIcon isOpen={isMenuOpen} onClick={toggleMenuVisible} />
        </div>
      </div>
    </header>
  );
};
