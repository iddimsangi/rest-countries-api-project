import { useState, useEffect } from "react";
import Loader from "./Loader";
import { Link, useLocation } from "react-router-dom";
import sprite from "../sprite.svg";

function CountryDetails() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${location.state.countryName}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data[0]); // Assuming the API response is an array
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading country details:", error);
        setIsLoading(false);
      });
  }, [location.state.countryName]);

  if (isLoading) {
    return <Loader />;
  }

  if (!countryData) {
    return <div>Country not found.</div>;
  }

  const {
    name,
    languages,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    borders,
  } = countryData;
  console.log(currencies);
  return (
    <section className="min-h-full flex flex-col space-y-5 justify-center items-center p-12  md:p-0">
      <div className="flex flex-col min-w-full space-y-4 md:flex-row md:space-x-4">
        <div className="flex flex-col space-y-12 md:w-1/2 md:p-4 md:justify-between md:max-w-xl">
          <Link to={"/"}>
            <button className="py-2 px-4 bg-dark-blue text-base shadow-2xl text-white flex items-center w-28">
              <svg
                fill="white"
                height={"1.2rem"}
                width={"2rem"}
                className="cursor-pointer"
              >
                <use xlinkHref={`${sprite}#icon-west`}></use>
              </svg>{" "}
              Back
            </button>
          </Link>
          {/* Assuming you have a flag image URL */}
          <img
            src={countryData.flags.png}
            className="w-full shadow-2xl"
            alt="flag"
          />
        </div>
        <div className="flex flex-col space-y-4 p-7 justify-center md:w-1/2  text-white text-sm  md:pr-1">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <div className="flex flex-col space-y-4">
              <h2 className="text-bold text-xl font-semibold">{name.common}</h2>
              <ul className="text-sm">
                <li className="font-light">
                  <span className="font-semibold">Native Language: </span>
                  {languages.nativeName && languages.nativeName.eng
                    ? languages.nativeName.eng.common
                    : "Not specified"}
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Population: </span>
                  {population}
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Region: </span>
                  {region}
                </li>
                <li className="font-light">
                  <span className="font-semibold">Sub Regional: </span>
                  {subregion}
                </li>
                <li className="font-light">
                  <span className="font-semibold">Capital: </span>
                  {capital[0]}
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <ul className="mt-8">
                <li className="font-light">
                  <span className="font-semibold">Top Level Domain: </span>
                  {tld[0]}
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Currencies: </span>
                  {currencies && currencies.XAF
                    ? currencies.XAF.name
                    : "Not specified"}
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Languages: </span>
                  {languages && languages.eng
                    ? languages.eng.common
                    : "Not specified"}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4  md:flex-row md:space-y-0 md:items-center md:space-x-6 text-sm ">
            <h2 className=" text-white text-sm font-semibold">
              Border countries:
            </h2>
            <div className="flex space-x-2">
              {borders && Array.isArray(borders) ? (
                borders.map((border) => (
                  <button
                    key={border}
                    className="bg-dark-blue text-sm text-very-light-gray py-1 px-2 shadow-2xl"
                  >
                    {border}
                  </button>
                ))
              ) : (
                <p>No border countries found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetails;
