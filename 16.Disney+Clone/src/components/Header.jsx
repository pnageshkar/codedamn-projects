import logo from '../images/logo.svg'
function Header({ login, setLogin }) {
  return (
    <header className="sticky  bg-[#131A28] top-0 h-[4.5rem] px-6 z-[1000] flex items-center justify-between ">
      <img
        src={logo}
        width="80"
        height="80"
        alt="logo"
        className="cursor-pointer"
      />

      {!login ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={() => setLogin(true)}
        >
          Login
        </button>
      ) : (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={() => setLogin(false)}
        >
          Log Out
        </button>
      )}
    </header>
  );
}

export default Header;
