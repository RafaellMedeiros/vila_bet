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