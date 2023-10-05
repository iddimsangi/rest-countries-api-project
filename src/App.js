import sprite from "./sprite.svg";
import CountriesList from "./components/CountriesList";
import SearchCountry from "./components/SearchCountry";
import CountriesCategories from "./components/CountriesCategories";
function App() {
  return (
    <div className="w-full min-h-full flex flex-col space-y-2 bg-[#292C34]">
      <header className="text-white flex items-center justify-between min-w-full bg-dark-blue px-4 py-7 md:max-w-[1440px]">
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
        <div className="flex flex-col space-y-5 min-w-xl px-4 md:flex-row sm:flex-row sm:space-x-12 md:space-y-3 md:justify-between md:max-w-[1440px]">
          <SearchCountry />
          <CountriesCategories />
        </div>
        <CountriesList />
      </main>
    </div>
  );
}

export default App;
