import styled from "styled-components";

const colors = {
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
    text-align: center;
    padding: 0 2rem;
    background-color: aliceblue;
    margin: 0 20px;
}
`;