import germanyFlag from "../images/germany.svg";
import sprite from "../sprite.svg";
function CountryDetails() {
  return (
    <section className="min-h-full flex flex-col space-y-5 justify-center items-center p-12">
      <div className="flex flex-col min-w-full space-y-4 bg-[#292C34]">
        <button className="py-2 px-4 bg-dark-blue text-base text-white flex items-center w-28">
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
        <div className="flex flex-col space-y-4 p-7 pb-11 text-white">
          <h2 className="text-bold text-xl font-semibold">Germany</h2>
          <ul>
            <li className="font-light">
              <span className="font-semibold">Native Language: </span>Bargie
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
            <div className="flex flex-col">
              <h2 className=" text-white font-semibold mb-4">
                Border countries:
              </h2>
              <div className="flex space-x-2">
                <button className="bg-dark-blue text-sm text-very-light-gray py-1 px-6 shadow-2xl">
                  France
                </button>
                <button className="bg-dark-blue py-1 text-sm text-very-light-gray px-6 shadow-2xl">
                  Germany
                </button>
                <button className="bg-dark-blue py-1 text-sm text-very-light-gray px-6 shadow-2xl">
                  Nerthelands
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetails;
