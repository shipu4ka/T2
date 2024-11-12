import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Menu } from "./Components/Menu/Menu";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenuVisible = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenuVisible={toggleMenuVisible} />
      <Menu isMenuOpen={isMenuOpen} />
      <Main />
    </>
  );
};

export default App;
