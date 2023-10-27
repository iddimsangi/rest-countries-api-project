import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import sprite from "./sprite.svg";
import CountriesList from "./components/CountriesList";
import Loader from "./components/Loader";
import CountryDetails from "./components/CountryDetails";
function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isLighttheme, setIsLighttheme] = useState(false);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((resp) => {
        setCountries(resp);
        setIsLoading(false);
      });
  }, []);
  const selectRegionHandler = (region) => setSelectedRegion(region);
  const themeHandler = () => setIsLighttheme(!isLighttheme);
  return (
    <div
      className={`w-full min-h-full flex flex-col justify-center items-center space-y-2 ${
        isLighttheme ? "light" : "dark"
      }-theme`}
    >
      <header
        className={`min-w-full flex flex-col shadow-lg justify-center items-center px-4 py-7 ${
          isLighttheme ? "light" : "dark"
        }-theme`}
      >
        <nav
          className={`text-${
            isLighttheme ? "black" : "white"
          } w-full flex items-center px-4 justify-between  md:max-w-[1440px]`}
        >
          <h1 className="font-bold">Where in the world?</h1>
          <h2 className="flex items-center text-sm font-light">
            <button onClick={themeHandler}>
              <svg
                fill={isLighttheme ? "black" : "white"}
                height={"1.5rem"}
                width={"2rem"}
                className="cursor-pointer"
              >
                <use
                  xlinkHref={`${sprite}#icon-${isLighttheme ? "sun" : "moon"}`}
                ></use>
              </svg>
            </button>
            {isLighttheme ? "Light Mode" : "Dark Mode"}
          </h2>
        </nav>
      </header>
      <main>
        <Router>
          {isLoading ? (
            <Loader isLighttheme={isLighttheme} />
          ) : (
            <>
              <Routes>
                <Route
                  path="/"
                  element={
                    <CountriesList
                      countries={countries}
                      selectRegionHandler={selectRegionHandler}
                      selectedRegion={selectedRegion}
                      isLighttheme={isLighttheme}
                    />
                  }
                />
                <Route
                  path="/country"
                  element={<CountryDetails isLighttheme={isLighttheme} />}
                />
              </Routes>
            </>
          )}
        </Router>
      </main>
    </div>
  );
}

export default App;
