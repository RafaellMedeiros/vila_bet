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
            border: 1px solid #999;
            margin: 5px 0;
            padding: 5px 15px;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            justify-content: center;
           
            
           

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

export const LinkArea = styled.div`
    .link--container{
        display: flex;
        margin: 15px 0;
        font-size: 25px;
        .link--title{
            margin-right: 10px;
            font-size: 25px;
        }
        button{
            margin-left: 10px;
            font-size: 20px;
            border: 0;
            background-color: #ed3237;
            color: #FFF;
            border-radius: 10px;
        }

    }
`;