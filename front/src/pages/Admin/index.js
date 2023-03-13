import React from "react";
import { Link } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import { PageArea } from "./styled";

const Page = () => {
    return (
        <PageContainer>
            <PageTitle>Bem vindo a área do administrador</PageTitle>
            <PageArea>
                <div className="links"> 
                    <Link to={'/analise'} className='texto'>Análise</Link>
                    <Link to={'/cadrep'}>Cadastro de Representantes</Link>
                    <Link to={'/jogos'}>Jogos da Semana</Link>
                    <Link to={'/resultados'}>Cadastrar Resultado</Link>
                </div>
            </PageArea>
        </PageContainer>
    )
};

export default Page;