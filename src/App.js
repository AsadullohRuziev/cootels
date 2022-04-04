import Header from "./containers/Header";
import styled from "styled-components";
import About from "./containers/About";
import Showcase from "./containers/Showcase";
import Reservation from "./containers/Reservation";
import Room from "./containers/Room";

function App() {
  return (
    <Container>
      <Header />
      <About />
      <Showcase/>
      <Reservation/>    
      <Room/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
