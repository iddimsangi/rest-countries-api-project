import "./App.css";
import sprite from "./sprite.svg";
function App() {
  return (
    <div className="App">
      <div class="font-nunito">This text uses the Nunito Sans font family.</div>
      <svg fill="green">
        <use xlinkHref={`${sprite}#icon-moon`}></use>
      </svg>
    </div>
  );
}

export default App;
