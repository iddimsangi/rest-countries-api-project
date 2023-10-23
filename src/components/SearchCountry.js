import sprite from "../sprite.svg";
function SearchCountry({ handleSearch, searchQuery }) {
  return (
    <form
      className="bg-dark-blue flex mt-4 relative items-center w-full md:max-w-md rounded-md shadow-lg"
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
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="bg-transparent py-5 text-md outline-none pl-24  placeholder:text-white text-very-light-gray w-11/12"
        placeholder="Search for country"
      />
    </form>
  );
}

export default SearchCountry;
