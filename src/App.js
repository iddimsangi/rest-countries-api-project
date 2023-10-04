import sprite from "./sprite.svg";
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
        <div className="flex flex-col space-y-5 bg-red-500 min-w-full px-4">
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
          <select name="countries" id="countries">
            <option value="" disabled selected>
              Filter By Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </main>
    </div>
  );
}

export default App;
