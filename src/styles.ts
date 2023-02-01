import styled from "styled-components";

export const colors = {
    red: 'hsl(0, 100%, 74%)', 
    green: 'hsl(154, 59%, 51%)',
    blue: 'hsl(248, 32%, 49%)',
    darkBlue: 'hsl(249, 10%, 26%)' ,
    grayishBlue: 'hsl(246, 25%, 77%)',
};

export const Body = styled.div`
    background-color: ${colors.red};
    background-image: url('../images/bg-intro-desktop.png');
    height: 100vh;
    width: 100vw;
    font-family: 'Poppins', sans-serif;
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

export const Box = styled.div`
    background-color: ${props => props.color};
    border-radius: 5px;
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    padding: 20px;

    span{
        font-weight: 600;
    }

    `;

export const FormGroup = styled.div`
    position: relative;
    margin-bottom: 1.5rem;
    
    input{
        width: 100%;
    }

`;

    