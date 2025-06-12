import "./App.css";
import Title from "./sections/Title";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Sources from "./sections/Sources";
import End from "./sections/End";

function App() {
  return (
    <div>
      <Title />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <End />
      <Sources />
    </div>
  );
}

export default App;
