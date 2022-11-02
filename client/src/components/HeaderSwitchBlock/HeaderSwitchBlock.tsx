import { Dispatch, SetStateAction } from "react";

import ThemeSelector from "../ThemeSelector/ThemeSelector";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import "../../styles/HeaderSwitchBlock/HeaderSwitchBlock.scss";

interface IHeaderSwitchBlockProps {
  theme: string | null;
  setTheme: Dispatch<SetStateAction<string | null>>;
}

const HeaderSwitchBlock = ({ theme, setTheme }: IHeaderSwitchBlockProps) => {
  return (
    <div className="switch-block">
      <ThemeSelector theme={theme} setTheme={setTheme} />
      <LanguageSwitcher theme={theme} />
    </div>
  );
};

export default HeaderSwitchBlock;
