import styled from "styled-components";

interface StyledDivProps {
    padding: string;
  }

  interface InputProps{
    error: boolean;
  }

export const colors = {
    red: 'hsl(0, 100%, 74%)', 
    green: 'hsl(154, 59%, 51%)',
    darkGreen: 'hsl(154, 59%, 35%)',
    blue: 'hsl(248, 32%, 49%)',
    darkBlue: 'hsl(249, 10%, 26%)' ,
    grayishBlue: 'hsl(246, 25%, 77%)',
};

export const Body = styled.div`
    background-color: ${colors.red};
    background-image: url('../images/bg-intro-desktop.png');
    height: 100vh;
    width: 100vw;    
    color: white;

    `;

export const Container = styled.div`
margin: 0 auto;
max-width: 1440px;
display: flex;
min-height: 100vh;
align-items: center;
justify-content: center;

> div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: 0 2rem;
    margin: 0 20px;
    gap: 1.5rem;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        align-self: flex-start; 
    }
    
}
`;

export const Box = styled.div<StyledDivProps>`
    background-color: ${props => props.color};
    border-radius: 5px;
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    padding: ${props => props.padding};

    span{
        font-weight: 600;
    }

    `;

export const FormGroup = styled.div<InputProps>`
    position: relative;
    margin-bottom: 2rem;
    
    input{
        width: 100%;
        border-radius: 5px;
        padding: 15px 25px;
        border: 1.3px solid ${props => props.error ? colors.red : colors.grayishBlue};
        color: ${props => props.error ? colors.red : "#000"};
        font-weight: 600;
    }

    img{
        opacity: ${props => props.error ? 1 : 0};
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
    }

    small{
        opacity: ${props => props.error ? 1 : 0};
        position: absolute;
        bottom: -1.5rem;
        right: 0;
        color: ${colors.red};
        font-size: 0.7rem;
        font-weight: 600;
    }

`;

export const Button = styled.button`
    background-color: ${colors.green};
    border: 1px solid ${colors.darkGreen};
    border-radius: 5px;
    color: white;
    font-weight: 600;
    padding: 15px 25px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    letter-spacing: 1px;
    width: 100%;
    box-shadow: 0 2px ${colors.darkGreen};
    
    `;

export const Terms = styled.small`
    display: block;
    text-align: center;
    color: ${colors.grayishBlue};
    font-size: 0.7rem;
    margin-top: 1rem;

    a{
        color: ${colors.red};
        text-decoration: none;
        font-weight: 600;
    }
`;
    