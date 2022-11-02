import { useState } from "react";
import NavbarList from "../NavbarList/NavbarList";
import "../../styles/Navbar/Navbar.scss";

interface INavbarProps {
  theme: string | null
}

const Navbar = ({theme}: INavbarProps) => {
  const [contactsIsOpened, setContactsIsOpened] = useState(false);

  const toggleContactsSection = () => {
    setContactsIsOpened(!contactsIsOpened);
  };
  return (
    <nav className="navigation">
      <NavbarList
        toggleContactsSection={toggleContactsSection}
        contactsIsOpened={contactsIsOpened}
        theme={theme}
      />
    </nav>
  );
};

export default Navbar;
