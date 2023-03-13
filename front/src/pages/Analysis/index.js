import React from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, PageTitle, Back } from "../../components/MainComponents";
import { PageArea } from "./styled";

const Page = () => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }
    return (
        <PageContainer>
            <Back onClick={handleBackButton}>Voltar</Back>
            <PageTitle>área de analise.</PageTitle>
            <PageArea>

            </PageArea>
        </PageContainer>
    )
};

export default Page;