import Logo from "../assets/logo.svg"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Line from "../assets/line.svg"
import { NavLink } from "react-router-dom";


const links = [
  { name: "00 HOME", path: "/", end: true },
  { name: "01 DESTINATION", path: "/destination/moon" },
  { name: "02 CREW", path: "/crew/commander" },
  { name: "03 TECHNOLOGY", path: "/technology/vehicle" },
];

function Header() {


  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };


  return (
    <header className="relative z-[100] -top-2 flex items-center justify-between mx-auto p-6 h-[70px] w-full bg-[#0b0d1526] ">
      <div
        className="icons flex items-center justify-center absolute right-0 lg:hidden mr-6"
        onClick={toggleMenu}
      >
        {toggle ? <X className="hidden" /> : <Menu className="cursor-pointer ml-5 text-white" />}
      </div>

      <div>
        <img src={Logo} alt="Logo" className="" />
      </div>

      {/* nav desktop */}

      <div className="hidden lg:flex flex-row p-4 gap-2 justify-between items-end text-white bg-[#0B0D1726]">
        <div className="flex items-center justify-center">
          <img src={Line} alt="" className="w-[90%]" />
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex flex-row gap-4 cursor-pointer">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    `relative pb-1 capitalize ${isActive
                      ? "text-[var(--dark-grayish-blue)] after:content-[''] after:absolute after:left-0 after:top-4 after:w-full after:h-[3px] after:bg-[#fff]"
                      : "text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

          </ul>

        </div>

      </div>


      {/* nav mobile */}

      <div className={` ${toggle ? "flex" : "hidden"} flex flex-col p-4 justify-between items-center my-5 transition-[0.5s height ease-in-out] h-[100%] fixed w-[50%] -top-5 bg-[#0B0D1726] right-0 z-20 `}>

        <div className="">
          <div className="self-end absolute right-10 top-4 " onClick={toggleMenu}>
            <X 
            size={30} 
            strokeWidth={3} 
            className="cursor-pointer text-white"
            />
          </div>
          <ul className="flex flex-col p-4 m-4 my-10 gap-4 cursor-pointer font-semibold text-lg">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    `relative pb-1 capitalize ${isActive
                      ? "text-white after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-[3px] after:bg-[#fff] gap-5 pr-4"
                      : "text-gray-300"
                    }`
                  }
                 onClick={toggleMenu} // close menu when clicking
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>


    </header>
  )
}

export default Header
