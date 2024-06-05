import Logo from "../Logo/Logo";
import CreateTask from "../CreateTask/CreateTask";
import ProjectOffice from "../ProjectOffice/ProjectOffice";
import NeonLightProject from "../NeonLightProject/NeonLightProject";
import HelpBlock from "../HelpBlock/HelpBlock";
import Logout from "../Logout/Logout";

import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div className={css.container}>
      <Logo />
      <CreateTask />
      <ProjectOffice />
      <NeonLightProject />
      <HelpBlock />
      <Logout />
    </div>
  );
}
