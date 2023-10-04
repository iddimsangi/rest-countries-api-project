import Country from "./Country";
function CountriesList() {
  return (
    <section className="min-h-full flex flex-col space-y-5 justify-center items-center p-12">
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </section>
  );
}

export default CountriesList;
