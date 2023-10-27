import sprite from "../sprite.svg";
function Loader({ isLighttheme }) {
  return (
    <div className=" w-full h-screen relative flex items-center justify-center">
      <svg
        fill={isLighttheme ? "black" : "white"}
        height={"4.5rem"}
        width={"4.5rem"}
        className=" animate-spin absolute top-1/4 left-1/2"
      >
        <use xlinkHref={`${sprite}#icon-spinner`}></use>
      </svg>
    </div>
  );
}

export default Loader;
