import styled from "styled-components";

export const PageArea = styled.div`
     .container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
    .games{
        margin: 10px;
        .time{
            text-align: justify;
            border: 1px solid #999;
            margin: 5px 0;
            padding: 5px 15px;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            justify-content: left;
            
            background-color: ${props => props.selected ? '#CA3237' : ''} ;
           
            
           

            &:hover{
                background-color: #CA3237;
                color: #FFF;
            }
            
        }
        h3{
            text-align: center;
            background-color: #ed3237;
            border-radius: 10px;
            color: #FFF;
            margin: 0;
            margin-bottom: 10px;
        }
    }
`;

export const InfosArea = styled.div`
    max-width: 1000px;
    margin-bottom: 20px;
    border: 1px solid #999;
    padding: 15px 0 ;
    form{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        

        .area{
            width: 235px;
            padding: 0  15px;
           .area--input{
            width: 235px;
            input{width: 200px;}
           }
            
        }
    }

`;

export const SendButton = styled.button`
    padding: 10px;
    background-color: #ed3237;
    color: #FFF;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    border: 0;
`;