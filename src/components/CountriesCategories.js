function CountriesCategories({ selectRegionHandler, isLighttheme }) {
  return (
    <select
      className={`w-1/2 py-4 text-${isLighttheme ? "black" : "white"} ${
        isLighttheme ? "light" : "dark"
      }-theme border-0 custom-shadow md:max-w-[200px] rounded-md shadow-xl`}
      name="countries"
      id="countries"
      onChange={(e) => selectRegionHandler(e.target.value)}
    >
      <option value="">Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default CountriesCategories;
