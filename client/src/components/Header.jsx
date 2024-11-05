import React from "react";
import { useLocation } from "react-router-dom";
import { Button, ModalHeader, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className=" border-b-2">
      <Link
        to={"/"}
        className=" self-center whitespace-nowrap text-lg md:text-2xl font-semibold dark:text-white"
      >
        <span className=" px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          Alfred's
        </span>{" "}
        Blog
      </Link>
      <form className=" hidden md:inline">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className=" hidden md:inline"
        />
      </form>
      <Button className="w-14 h-12 md:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-14 h-12 flex justify-center items-center "
          color="gray"
          pill
        >
          <FaMoon />
        </Button>
        <Link to={"/sign-in"}>
          <Button className="h-12  " gradientDuoTone={"purpleToBlue"} outline>
            Sign in
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"} className="md:text-lg">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"} className="md:text-lg">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to={"/projects"} className="md:text-lg">
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
