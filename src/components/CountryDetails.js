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
        console.log(data);
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
    altSpellings,
    languages,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    borders,
  } = countryData;
  console.log(altSpellings);
  return (
    <section className="flex h-screen flex-col space-y-5  items-center p-12  md:p-0 md:w-[1040px]">
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
          <img
            src={countryData.flags.png}
            className="w-full shadow-2xl h-72"
            alt="flag"
          />
        </div>
        <div className="flex flex-col space-y-4  justify-center md:min-w-1/2  text-white text-sm  md:pr-1">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <div className="flex flex-col w-64 space-y-4">
              <h2 className="text-bold text-xl font-semibold">{name.common}</h2>
              <ul className="text-sm">
                <li className="font-light flex items-center">
                  <span className="font-semibold">Native Language: </span>
                  {altSpellings && altSpellings.length > 0
                    ? altSpellings[1]
                    : "Not specified"}
                </li>
                <li className="font-light mb-1 flex items-center">
                  <span className="font-semibold">Population: </span>
                  {population}
                </li>
                <li className="font-light mb-1 flex items-center">
                  <span className="font-semibold">Region: </span>
                  {region}
                </li>
                <li className="font-light flex items-center">
                  <span className="font-semibold block">Sub Regional:</span>
                  {subregion}
                </li>
                <li className="font-light flex items-center">
                  <span className="font-semibold">Capital: </span>
                  {capital[0]}
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <ul className="mt-8">
                <li className="font-light flex items-center">
                  <span className="font-semibold">Top Level Domain: </span>
                  {tld[0]}
                </li>
                <li className="font-light mb-1 flex items-center">
                  <span className="font-semibold">Currencies: </span>
                  {currencies && Object.keys(currencies).length > 0
                    ? Object.keys(currencies).map((currencyCode) => (
                        <div key={currencyCode}>
                          <p>{currencies[currencyCode].name}</p>
                        </div>
                      ))
                    : "Not specified"}
                </li>

                <li className="font-light mb-1 flex items-center">
                  <span className="font-semibold mr-1">Languages: </span>
                  {languages && Object.keys(languages).length > 0
                    ? Object.keys(languages).map((lang) => (
                        <div key={lang}>
                          <p className="">{languages[lang]},</p>
                        </div>
                      ))
                    : "Not specified"}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4  md:flex-row md:space-y-0 md:items-center md:space-x-6 text-sm">
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
