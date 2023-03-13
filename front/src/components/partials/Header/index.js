import React from "react";
import { 
    HeaderArea,
    LogoItem,
    Title,
    UserArea,
    UserName,
    LogOut

} from './styled';


const Header = ()=>{
    return (
        <HeaderArea>
            <LogoItem src="./assets/logo.png"/>
            <Title>VilaBet</Title>
            <UserArea>
                <UserName>Usuario</UserName>
                <LogOut>Sair</LogOut>
            </UserArea>
        </HeaderArea>
    )
};

export default Header;