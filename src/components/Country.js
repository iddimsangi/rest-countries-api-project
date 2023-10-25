import { useNavigate } from "react-router-dom";
function Country({ flagImg, countryName, population, region, capital }) {
  const navigate = useNavigate();

  const navigateToCountryDetails = () => {
    navigate("/country", { state: { countryName: countryName } });
  };
  return (
    <div className="flex flex-col max-w-[400px] h-[462px] space-y-4 bg-[#222c35]  rounded-lg shadow-2xl cursor-pointer">
      <img
        src={flagImg}
        className="w-full h-56 rounded-t-lg"
        alt="flag"
        onClick={navigateToCountryDetails}
      />
      <div className="flex flex-col space-y-4 p-7 pb-11 text-white">
        <h2 className="text-bold text-xl font-semibold">{countryName}</h2>
        <ul>
          <li className="font-light mb-1">
            <span className="font-semibold text-sm">Population: </span>
            {population}
          </li>
          <li className="font-light mb-1">
            <span className="font-semibold text-sm">Region: </span>
            {region}
          </li>
          <li className="font-light">
            <span className="font-semibold text-sm">Capital: </span>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Country;
