import Header from "./Components/Header";
import "./App.css";
import FirstContainer from "./Containers/FirstContainer";
import SecondContainer from "./Containers/SecondContainer";

function App() {
  return (
    <>
      <div className="wave">
        <Header />

        <FirstContainer />

        <SecondContainer />
      </div>
    </>
  );
}

export default App;
