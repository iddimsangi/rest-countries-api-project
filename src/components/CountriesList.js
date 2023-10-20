import Country from "./Country";
function CountriesList({ countries }) {
  return (
    <section className="min-h-full flex flex-col space-y-5 justify-center items-center p-12 sm:grid sm:grid-cols-2 sm:gap-3 sm:p-4 sm:space-y-0 md:grid md:grid-cols-4 md:gap-4 md:space-y-0 md:p-4 md:max-w-[1440px]">
      {countries.map((country) => (
        <Country
          flagImg={country.flags.png}
          countryName={country.name.official}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </section>
  );
}

export default CountriesList;
