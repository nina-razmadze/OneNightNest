export default function NavBar() {
  return (
    <div>
      <nav className="bg-primary-light  fixed w-full z-20 top-20 left-0  border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex md:order-2">
            <p>დაჯავშნა</p>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-primary-light text-black list-none">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  მთავარი
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent  md:p-0 hover:bg-white "
                >
                  ბინები დღიურად
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent  md:p-0 "
                >
                  ბინა - ქუთაისი
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
