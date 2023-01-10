import ColorText from "./components/text/Text";
import Button from "./components/button/button";
import "./App.css";

function App() {
  return (
    <>
      <ColorText color="pink">
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
        sit amet urna quis sollicitudin. Nulla ac mi vel velit pulvinar
        fermentum ut a nisi. Donec maximus, enim eu euismod lacinia, purus orci
        volutpat tortor, id volutpat odio nulla ut justo. Cras porttitor mollis
        purus, ac posuere lectus. Curabitur a elementum velit, non mattis velit.
        Aenean et molestie eros. Etiam ultricies nisi eros. '
      </ColorText>
      <Button label="Baixar CV"></Button>
    </>
  );
}

export default App;
