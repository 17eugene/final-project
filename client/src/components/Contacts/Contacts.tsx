import SocialLinks from "../SocialLinks/SocialLinks";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import "../../styles/Contacts/Contacts.scss";

interface IContactsProps {
  theme: string | null
}

const Contacts = ({theme}: IContactsProps) => {
  return (
    <div className={theme === "light" ? "contacts-wrapper" : "contacts-wrapper dark"}>
      <PhoneNumber theme={theme}/>
      <SocialLinks />
    </div>
  );
};

export default Contacts;
