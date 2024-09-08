import styled, {keyframes} from "styled-components";

const Wraper = styled.div`
    display: flex;
`;
const rotationAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% {
        transform: rotate(360deg);
        border-radius: 100px;
    }
    100% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
`
const Emoji = styled.p`
    font-size: 36px;
`
const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${rotationAnimation} 1s linear infinite;

    ${Emoji} {
        &:hover {
            font-size: 98px;
        }

        &:active {
            opacity: 0;
        }
    }
`

function App() {
    return <Wraper>
        <Box>
            <Emoji>ㅋ</Emoji>
        </Box>
            <Emoji>ㅎ</Emoji>
    </Wraper>;
}

export default App;
