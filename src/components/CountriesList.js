import { useState } from "react";
import Country from "./Country";
import TopHeading from "./TopHeading";
function CountriesList({ countries, selectHandler }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter countries based on the search query
  const filteredCountries = countries.filter((country) => {
    return country.name.official
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  return (
    <section>
      <TopHeading handleSearch={handleSearch} searchQuery={searchQuery} />
      <div className="min-h-full flex flex-col space-y-5 justify-center items-center p-12 sm:grid sm:grid-cols-2 sm:gap-3 sm:p-4 sm:space-y-0 md:grid md:grid-cols-4 md:gap-4 md:space-y-0 md:p-4 md:max-w-[1440px]">
        {searchQuery
          ? // Display filtered countries when there's a search query
            filteredCountries.map((country) => (
              <Country
                key={country.name.official}
                flagImg={country.flags.png}
                countryName={country.name.official}
                population={country.population}
                region={country.region}
                capital={country.capital}
                selectHandler={selectHandler}
              />
            ))
          : // Display all countries when there's no search query
            countries.map((country) => (
              <Country
                key={country.name.official}
                flagImg={country.flags.png}
                countryName={country.name.official}
                population={country.population}
                region={country.region}
                capital={country.capital}
                selectHandler={selectHandler}
              />
            ))}
      </div>
    </section>
  );
}

export default CountriesList;
