import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeContainer, HomeTitle, PageArea } from "./styled.js";

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);



        setDisabled(false);
    }
    return (
        <HomeContainer>
            <HomeTitle>
                Bem-vindo a VilaBet!
                <br />
                Fazer Login:
            </HomeTitle>
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input
                                type="email"
                                disabled={disabled}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input
                                type="password"
                                disabled={disabled}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    {/* <label className="area">
                        <div className="area--title">Lembrar Senha</div>
                        <div className="area--input ">
                            <input
                                type="checkbox"
                                disabled={disabled}
                                checked={rememberPassword}
                                onChange={() => setRememberPassword(!rememberPassword)}
                            />
                        </div>
                    </label> */}
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </HomeContainer>
    )
};

export default Page;