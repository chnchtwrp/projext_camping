import { Darkmode } from "./Darkmode";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Search from "./Search";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-primary-foreground w-full border-b">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-4 w-full">
        {/* Logo */}
        <div className="flex items-center max-w-md">
          <Logo />
        </div>

        {/* Search */}
        <div className="flex max-w-md">
          <Search />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Darkmode */}
          <Darkmode />
          {/* Profile */}
          <DropdownListMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
