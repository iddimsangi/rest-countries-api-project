import germanyFlag from "../images/germany.svg";
import sprite from "../sprite.svg";
function CountryDetails() {
  return (
    <section className="min-h-full flex flex-col space-y-5 justify-center items-center p-12 md:pr-2">
      <div className="flex flex-col min-w-full space-y-4 md:flex-row md:space-x-4">
        <div className="flex flex-col space-y-12 md:w-1/2 md:p-4 md:justify-between md:max-w-xl">
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
          <img src={germanyFlag} className="w-full" alt="flag" />
        </div>
        <div className="flex flex-col space-y-4 p-7 justify-center md:w-1/2  text-white text-sm  md:pr-1">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <div className="flex flex-col space-y-4">
              <h2 className="text-bold text-xl font-semibold">Germany</h2>
              <ul className="text-sm">
                <li className="font-light">
                  <span className="font-semibold">Native Language: </span>
                  Bargie
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Population: </span>1,789,009
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Region: </span>Europe
                </li>
                <li className="font-light">
                  <span className="font-semibold">Sub Regional: </span>Western
                  Europe
                </li>
                <li className="font-light">
                  <span className="font-semibold">Capital: </span>Berlin
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <ul className="mt-8">
                <li className="font-light">
                  <span className="font-semibold">Top Level Domain: </span>
                  be
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Currencies: </span>Euro
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Languages: </span>
                  Dutch,French,English
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row md:space-y-0 md:items-center md:space-x-6 text-sm ">
            <h2 className=" text-white text-sm font-semibold">
              Border countries:
            </h2>
            <div className="flex space-x-2">
              <button className="bg-dark-blue text-sm text-very-light-gray py-1 px-2 shadow-2xl">
                France
              </button>
              <button className="bg-dark-blue py-1 text-sm text-very-light-gray px-2 shadow-2xl">
                Germany
              </button>
              <button className="bg-dark-blue py-1 text-sm text-very-light-gray px-2 shadow-2xl">
                Nerthelands
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetails;
