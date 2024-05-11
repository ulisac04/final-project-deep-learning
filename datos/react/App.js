import Container from './components/Container.js';
import Header from './components/Header.js';
import Welcome from './components/Welcome.js';
import PersonajeContainer from './components/PersonajeContainer.js';
import { useState } from 'react';
import Logo from './the-simpson.png';
import styled from "styled-components"

function App() {
  const [ personajes, setPersonaje] = useState(null);
  const reqApi = async() => {
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=4");
    const frase = await api.json();
    setPersonaje(frase);
  }

  return (
    <Container>
      <Header />
      {!personajes ? (
        <>
        <Welcome>Bienvenido para poder utilizar las frases... pincha la imagen</Welcome>
        <ContentLogo>
          <ImageLogo src={Logo} onClick={reqApi} alt="logo simpson" />
        </ContentLogo>
        </>
      ) :(
        <PersonajeContainer personajes={personajes} reqApi={reqApi} />
      )}
      

      
    </Container>
  );
}

const ImageLogo = styled.img`
  width: 450px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;




export default App;
