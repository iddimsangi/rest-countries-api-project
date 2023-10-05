function CountriesCategories() {
  return (
    <select
      className="w-1/2 py-4 text-very-light-gray bg-dark-blue border-0 md:max-w-[200px] rounded-md shadow-xl"
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
  );
}

export default CountriesCategories;
