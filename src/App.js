import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import sprite from "./sprite.svg";
import CountriesList from "./components/CountriesList";
import Loader from "./components/Loader";
import CountryDetails from "./components/CountryDetails";
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setselectedCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((resp) => {
        setCountries(resp);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center space-y-2 bg-[#292C34]">
      <header className="min-w-full flex flex-col justify-center items-center px-4 py-7 bg-dark-blue">
        <nav className="text-white w-full flex items-center px-4 justify-between  md:max-w-[1440px]">
          <h1 className="font-bold">Where in the world?</h1>
          <h2 className="flex items-center text-sm font-light">
            <svg
              fill="white"
              height={"1.5rem"}
              width={"2rem"}
              className="cursor-pointer"
            >
              <use xlinkHref={`${sprite}#icon-moon`}></use>
            </svg>
            Dark Mode
          </h2>
        </nav>
      </header>
      <main>
        <Router>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Routes>
                <Route
                  path="/"
                  element={<CountriesList countries={countries} />}
                />
                <Route
                  path="/country"
                  element={<CountryDetails selectedCountry={selectedCountry} />}
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
