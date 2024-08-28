import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;
const Box = styled.div`
    width: 100px;
    height: 100px;
`;
const BoxOne = styled(Box)`
    background-color: teal;
`;
const BoxTwo = styled(Box)`
    background-color: tomato;
`;
const Text = styled.span`
    color: white;`;

function App() {
    return <Father>
        <BoxOne>
            <Text>Hello</Text>
        </BoxOne>
        <BoxTwo/>
    </Father>;
}

export default App;
