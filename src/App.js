import sprite from "./sprite.svg";
import germanyFlag from "./images/germany.svg";
function App() {
  return (
    <div className="w-full min-h-full flex flex-col space-y-2 bg-[#292C34]">
      <header className="text-white flex items-center justify-between min-w-full bg-dark-blue px-4 py-7">
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
      </header>
      <main>
        <div className="flex flex-col space-y-5 min-w-full px-4">
          <form
            className="bg-dark-blue flex mt-4 relative items-center w-full rounded-2xl shadow-lg"
            action="#"
          >
            <svg
              fill="white"
              height={"1.5rem"}
              width={"2rem"}
              className="cursor-pointer absolute left-10"
            >
              <use xlinkHref={`${sprite}#icon-search`}></use>
            </svg>
            <input
              type="text"
              id="name"
              className="bg-transparent py-5 text-md outline-none pl-24  placeholder:text-white text-very-light-gray w-11/12"
              placeholder="Search for country"
            />
          </form>
          <select
            className="w-1/2 py-4 text-very-light-gray bg-dark-blue border-0 rounded-md shadow-xl"
            name="countries"
            id="countries"
          >
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <section className="min-h-full flex flex-col space-y-5 justify-center items-center p-12">
          <div className="flex flex-col min-w-full space-y-4 bg-[#222c35] rounded-lg shadow-2xl">
            <img src={germanyFlag} className="w-full rounded-t-lg" alt="flag" />
            <div className="flex flex-col space-y-4 p-7 pb-11 text-white">
              <h2 className="text-bold text-xl font-semibold">Germany</h2>
              <ul>
                <li className="font-light mb-1">
                  <span className="font-semibold">Population: </span>1,789,009
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Region: </span>Europe
                </li>
                <li className="font-light">
                  <span className="font-semibold">Capital: </span>Berlin
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col min-w-full space-y-4 bg-[#222c35] rounded-lg shadow-2xl">
            <img src={germanyFlag} className="w-full rounded-t-lg" alt="flag" />
            <div className="flex flex-col space-y-4 p-7 pb-11 text-white">
              <h2 className="text-bold text-xl font-semibold">Germany</h2>
              <ul>
                <li className="font-light mb-1">
                  <span className="font-semibold">Population: </span>1,789,009
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Region: </span>Europe
                </li>
                <li className="font-light">
                  <span className="font-semibold">Capital: </span>Berlin
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col min-w-full space-y-4 bg-[#222c35] rounded-lg shadow-2xl">
            <img src={germanyFlag} className="w-full rounded-t-lg" alt="flag" />
            <div className="flex flex-col space-y-4 p-7 pb-11 text-white">
              <h2 className="text-bold text-xl font-semibold">Germany</h2>
              <ul>
                <li className="font-light mb-1">
                  <span className="font-semibold">Population: </span>1,789,009
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Region: </span>Europe
                </li>
                <li className="font-light">
                  <span className="font-semibold">Capital: </span>Berlin
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col min-w-full space-y-4 bg-[#222c35] rounded-lgshadow-2xl">
            <img src={germanyFlag} className="w-full rounded-t-lg" alt="flag" />
            <div className="flex flex-col space-y-4 p-7 pb-11 text-white">
              <h2 className="text-bold text-xl font-semibold">Germany</h2>
              <ul>
                <li className="font-light mb-1">
                  <span className="font-semibold">Population: </span>1,789,009
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Region: </span>Europe
                </li>
                <li className="font-light">
                  <span className="font-semibold">Capital: </span>Berlin
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col min-w-full space-y-4 bg-[#222c35] rounded-lg shadow-2xl">
            <img src={germanyFlag} className="w-full rounded-t-lg" alt="flag" />
            <div className="flex flex-col space-y-4 p-7 pb-11 text-white">
              <h2 className="text-bold text-xl font-semibold">Germany</h2>
              <ul>
                <li className="font-light mb-1">
                  <span className="font-semibold">Population: </span>1,789,009
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Region: </span>Europe
                </li>
                <li className="font-light">
                  <span className="font-semibold">Capital: </span>Berlin
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col min-w-full space-y-4 bg-[#222c35] rounded-lg shadow-2xl">
            <img src={germanyFlag} className="w-full rounded-t-lg" alt="flag" />
            <div className="flex flex-col space-y-4 p-7 pb-11 text-white">
              <h2 className="text-bold text-xl font-semibold">Germany</h2>
              <ul>
                <li className="font-light mb-1">
                  <span className="font-semibold">Population: </span>1,789,009
                </li>
                <li className="font-light mb-1">
                  <span className="font-semibold">Region: </span>Europe
                </li>
                <li className="font-light">
                  <span className="font-semibold">Capital: </span>Berlin
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
