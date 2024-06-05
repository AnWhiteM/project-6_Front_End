import Logo from "../Logo/Logo";
import BoardList from "../BoardList/BoardList";
import HelpBlock from "../HelpBlock/HelpBlock";
import Logout from "../Logout/Logout";

import css from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={css.container}>
      <Logo />
      <BoardList />
      <HelpBlock />
      <Logout />
    </div>
  );
}
