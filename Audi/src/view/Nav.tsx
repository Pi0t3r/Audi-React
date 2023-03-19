import MenuIcon from "@mui/icons-material/Menu";
function Nav() {
  return (
    <div className="flex flex-row h-24 items-center px-4">
      <div className="w-1/4 flex items-center">
        <button>
          <MenuIcon />
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="bg-logo bg-cover bg-center w-24 h-10" />
      </div>
      <div className="w-1/4 bg-red-500 hidden"></div>
    </div>
  );
}

export default Nav;
