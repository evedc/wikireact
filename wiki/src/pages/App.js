import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import { Container } from './styles';

function App() {
  return (

    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <input />
    </Container>
  );
}

export default App;
