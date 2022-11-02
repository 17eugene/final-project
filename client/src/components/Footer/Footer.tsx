import "../../styles/Footer/Footer.scss";

interface IFooterProps {
  theme: string | null;
}

const Footer = ({ theme }: IFooterProps) => {
  return (
    <div className={theme === "light" ? "footer" : "footer dark"}>Footer</div>
  );
};

export default Footer;
