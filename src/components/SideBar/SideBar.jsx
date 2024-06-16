import Logo from "../Logo/Logo";
import BoardList from "../BoardList/BoardList";
import HelpBlock from "../HelpBlock/HelpBlock";
import Logout from "../Logout/Logout";

import { getBoards } from "../../redux/boards/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import css from "./SideBar.module.css";

export default function SideBar({ closeSideBar }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div>
        <Logo />
        <BoardList closeSideBar={closeSideBar} />
      </div>
      <div className={css.bottomSection}>
        <HelpBlock />
        <Logout />
      </div>
    </div>
  );
}
