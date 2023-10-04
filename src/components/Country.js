import germanyFlag from "../images/germany.svg";
function Country() {
  return (
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
  );
}

export default Country;
