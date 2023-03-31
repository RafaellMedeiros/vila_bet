import React from "react";
import { HeaderArea, LogoItem, Title, UserArea, LogOut } from "./styled";

const Header = () => {
  return (
    <HeaderArea>
      <LogoItem src="./assets/logo.png" />
      <Title src="./assets/name.png" />
      <UserArea>
        <LogOut>Sair</LogOut>
      </UserArea>
    </HeaderArea>
  );
};

export default Header;
