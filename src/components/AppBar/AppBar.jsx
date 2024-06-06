import Logo from "../Logo/Logo";
import CreateBoardBtn from "../CreateBoardBtn/CreateBoardBtn";
import ProjectOffice from "../ProjectOffice/ProjectOffice";
import NeonLightProject from "../NeonLightProject/NeonLightProject";
import HelpBlock from "../HelpBlock/HelpBlock";
import Logout from "../Logout/Logout";

import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div className={css.container}>
      <Logo />
      <CreateBoardBtn />
      <ProjectOffice />
      <NeonLightProject />
      <HelpBlock />
      <Logout />
    </div>
  );
}
