import "./App.css";
import Card from "./Components/UI/Card";
import Header from "./Components/Layouts/Header";
import MainIcons from "./Components/Icons/MainIcons";
import BottomPannel from "./Components/Layouts/BottomPannel";

function App() {
  return (
    <div className="App">
      <Header />
      <Card>
        <h2> Main Functions</h2>
        <MainIcons />
        <BottomPannel />
      </Card>
    </div>
  );
}

export default App;
