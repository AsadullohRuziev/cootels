import Header from './containers/Header';
import styled from 'styled-components';
import About from './containers/About';

function App() {
  return (
    <Container>
      <Header/>
      <About/>
    </Container>
  );
}

export default App;



const Container = styled.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
`