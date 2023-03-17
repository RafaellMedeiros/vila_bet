import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, PageTitle, Back } from "../../components/MainComponents";
import { PageArea, LinkArea } from "./styled";



const Page = () => {

    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const [games, setGames] = useState([

        {
            teams: {
                home: 'Treze', away: 'Queimadense'
            },
            result: 'home'
        },
        {
            teams: {
                home: 'Sousa', away: 'CSP'
            },
            result: 'home'
        },
        {
            teams: {
                home: 'Auto Esporte', away: 'Campinense'
            },
            result: 'away'
        },
        {
            teams: {
                home: 'Nacional', away: 'Botafogo'
            },
            result: 'away'
        },
        {
            teams: {
                home: 'São Paulo Cristal', away: 'Serra Branca'
            },
            result: 'draw'
        },
        {
            teams: {
                home: 'Treze', away: 'Queimadense'
            },
            result: 'home'
        },
        {
            teams: {
                home: 'Sousa', away: 'CSP'
            },
            result: 'home'
        },
        {
            teams: {
                home: 'Auto Esporte', away: 'Campinense'
            },
            result: 'away'
        },
        {
            teams: {
                home: 'Nacional', away: 'Botafogo'
            },
            result: 'away'
        },
        {
            teams: {
                home: 'São Paulo Cristal', away: 'Serra Branca'
            },
            result: 'draw'
        },
        {
            teams: {
                home: 'Treze', away: 'Queimadense'
            },
            result: 'home'
        },
        {
            teams: {
                home: 'Sousa', away: 'CSP'
            },
            result: 'home'
        },
        {
            teams: {
                home: 'Auto Esporte', away: 'Campinense'
            },
            result: 'away'
        },
        {
            teams: {
                home: 'Nacional', away: 'Botafogo'
            },
            result: 'away'
        },
        {
            teams: {
                home: 'São Paulo Cristal', away: 'Serra Branca'
            },
            result: 'draw'
        },
        {
            teams: {
                home: 'Treze', away: 'Queimadense'
            },
            result: 'home'
        },
        {
            teams: {
                home: 'Sousa', away: 'CSP'
            },
            result: 'home'
        },
        {
            teams: {
                home: 'Auto Esporte', away: 'Campinense'
            },
            result: 'away'
        },
        {
            teams: {
                home: 'Nacional', away: 'Botafogo'
            },
            result: 'away'
        },
        {
            teams: {
                home: 'São Paulo Cristal', away: 'Serra Branca'
            },
            result: 'draw'
        },


    ]);


    const handleOnChange = (index, value) => {
        
        const gamesCopy = [...games];
        gamesCopy[index].result = value;
        setGames(gamesCopy);

    }

    const handleBackButton = () => {
        navigate(-1);
    }
    return (
        <PageContainer>
            <Back onClick={handleBackButton}>Nova Aposta</Back>
            <PageTitle>Ticket da Aposta</PageTitle>
            <PageArea>
                <div className="container">
                    {games.map((i, k) =>

                        <div className="games" key={k}>
                            <h3 key={k}>Jogo {k + 1}</h3>

                            
                                <div className="time" style={{backgroundColor: i.result === 'home' ? '#CA3237': '', color: i.result === 'home' ? '#FFF': '' }}>
                                    
                                    {i.teams.home}
                                </div>
                            
                            
                                <div className="time" style={{backgroundColor: i.result === 'draw' ? '#CA3237': '', color: i.result === 'draw' ? '#FFF': '' }}>
                                    
                                    Empate
                                </div>
                            
                            
                                <div className="time" style={{backgroundColor: i.result === 'away' ? '#CA3237': '' , color: i.result === 'away' ? '#FFF': '' }}>
                                    
                                    {i.teams.away}
                                </div>
                            

                        </div>

                    )}
                </div>
                <LinkArea>
                    <div className="link--container">
                        <div className="link--title">Link do ticket: </div>
                        <a href="">https://vilabet.com.br/ticket?qId=12345</a>
                        <button>Copiar link</button>
                    </div>
                </LinkArea>
            </PageArea>
        </PageContainer>
    )
};

export default Page;