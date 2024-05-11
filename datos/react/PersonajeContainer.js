import styled from "styled-components"
import Person from "./Person";

export default function PersonajeContainer(props){
    const { personajes, reqApi } = props;
    return (
        <>
            <ContainerPersonaje>
                {personajes.map((personaje, index)=>(
                    <Person p={personaje} i={index} />
                ))}
            </ContainerPersonaje>
            <ContainerButton>
                <ButtonBonito onClick={reqApi}>Recargar</ButtonBonito>
            </ContainerButton>
        
        </>
    );
}

const ContainerPersonaje = styled.div`
    display: flex;
`;

const ContainerButton = styled.div`
    width: 100%;
    text-align: center;
`;

const ButtonBonito = styled.button`
    width: 250px;
    background-color: #e76f51;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 18px;
    margin-top: 40px;
    transition: all 0.2s ease-out;
    &:hover {
        cursor: pointer;
        background-color: #1c0950;
    }
`;