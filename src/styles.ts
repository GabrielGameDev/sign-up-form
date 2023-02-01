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

