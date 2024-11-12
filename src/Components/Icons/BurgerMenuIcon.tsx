import classNames from "classnames";
import { FC } from "react";

interface IProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerMenuIcon: FC<IProps> = ({ isOpen, onClick }) => {
  return (
    <div
      className={classNames("header__burger-icon", {
        header__menu_open: isOpen,
      })}
    >
      <svg
        className="header__burger-icon_open"
        width="18"
        height="15"
        onClick={onClick}
        viewBox="0 0 18 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H17C17.5523 0.5 18 0.947715 18 1.5C18 2.05228 17.5523 2.5 17 2.5H1C0.447716 2.5 0 2.05228 0 1.5ZM0 7.5C0 6.94772 0.447715 6.5 1 6.5H17C17.5523 6.5 18 6.94772 18 7.5C18 8.05228 17.5523 8.5 17 8.5H1C0.447716 8.5 0 8.05228 0 7.5ZM1 12.5C0.447715 12.5 0 12.9477 0 13.5C0 14.0523 0.447716 14.5 1 14.5H17C17.5523 14.5 18 14.0523 18 13.5C18 12.9477 17.5523 12.5 17 12.5H1Z"
          fill="white"
        />
      </svg>
      <svg
        className="header__burger-icon_close"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7911 3.20937C20.5142 2.93249 20.0653 2.93249 19.7884 3.20937L12 10.9978L4.21156 3.20937C3.93468 2.93249 3.48578 2.93249 3.2089 3.20937C2.93202 3.48624 2.93202 3.93515 3.2089 4.21203L10.9973 12.0005L3.2089 19.7889C2.93202 20.0658 2.93202 20.5147 3.2089 20.7916C3.48578 21.0684 3.93468 21.0684 4.21156 20.7916L12 13.0031L19.7884 20.7916C20.0653 21.0684 20.5142 21.0684 20.7911 20.7916C21.068 20.5147 21.068 20.0658 20.7911 19.7889L13.0027 12.0005L20.7911 4.21203C21.068 3.93515 21.068 3.48624 20.7911 3.20937Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
