import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
`;
const Hi = styled.h1`
    color: ${props => props.theme.textColor};
`;

function App() {

    return (
        <div>
            <Container>
                <Hi>protected</Hi>
            </Container>
        </div>
    )
}

export default App;
