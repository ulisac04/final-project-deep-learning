import styled from "styled-components"

export default function Person(props){
    const { p, i } = props;
    const { character, characterDirection, image, quote } = p;
    return (
        <ContentPerson>
            <Title>{character}</Title>
            <ContainerImg>
                <Image src={image} alt={character} />
                
            </ContainerImg>
            <Frase>{quote}</Frase>
        </ContentPerson>
    );
}

const ContentPerson = styled.div`
    padding: 20px;
    border: 1px solid #2a9d8f;
    border-radius: 20px;
    width: 300px;
    margin: 10px;
    text-align: center;

    &:hover {
        filter: brightness(40%);
    }
`;

const Title = styled.h2`
    color: #264653;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const ContainerImg = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 130px;
    height: auto;
`;

const Frase = styled.h4`
    color: #2a9d8f;
    height: 100px;

`;