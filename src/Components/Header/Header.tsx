import { FC } from "react";
import { BellIcon } from "../Icons/BellIcon";
import { BurgerMenuIcon } from "../Icons/BurgerMenuIcon";
import { InboxIndicatorIcon } from "../Icons/InboxIndicatorIcon";
import { LocationIcon } from "../Icons/LocationIcon";
import { Tele2Logo } from "../Logo/Tele2Logo";
import "./Header.css";
import classNames from "classnames";

interface IProps {
  isMenuOpen: boolean;
  toggleMenuVisible: () => void;
}

export const Header: FC<IProps> = ({ isMenuOpen, toggleMenuVisible }) => {
  return (
    <header className="header">
      <div className="header__content">
        <Tele2Logo />
        <div className="header__info">
          <div className="header__location">
            <LocationIcon />
            <p>Москва и область</p>
          </div>
          <div
            className={classNames("header__notifications", {
              header__notifications_visible: !isMenuOpen,
            })}
          >
            <BellIcon />
            <InboxIndicatorIcon />
          </div>
          <BurgerMenuIcon isMenuOpen={isMenuOpen} onClick={toggleMenuVisible} />
        </div>
      </div>
    </header>
  );
};
