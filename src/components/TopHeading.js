import SearchCountry from "./SearchCountry";
import CountriesCategories from "./CountriesCategories";
function TopHeading() {
  return (
    <div className="flex flex-col space-y-5 min-w-xl px-4 md:flex-row sm:flex-row sm:space-x-12 md:space-y-3 md:justify-between md:max-w-[1440px]">
      <SearchCountry />
      <CountriesCategories />
    </div>
  );
}

export default TopHeading;
