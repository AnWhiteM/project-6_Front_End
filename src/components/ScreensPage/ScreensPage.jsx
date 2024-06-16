import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectCurrentBoard,
  selectBoards,
} from "../../redux/boards/selectors";
import { HeaderDashboard } from "../HeaderDashboard/HeaderDashboard";
import { MainDashboard } from "../MainDashboard/MainDashboard";
import { DashboardMessage } from "../DashboardMessage/DashboardMessage";
import css from "./ScreensPage.module.css";
import { useEffect } from "react";
import { currentBoard, getBoards } from "../../redux/boards/operations";
import { useNavigate } from "react-router-dom";

export const ScreensPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentDesk = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  const boards = useSelector(selectBoards);

  useEffect(() => {
    if (boards.length > 0 && currentDesk === null) {
      const firstBoard = boards[0];
      dispatch(currentBoard(firstBoard._id));
      navigate(`/home/${firstBoard._id}`);
    }
  }, [boards, navigate, dispatch, currentDesk]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading boards</p>;

  return (
    <div className={css.container}>
      <HeaderDashboard boardName={currentDesk ? currentDesk.title : ""} />
      {currentDesk ? (
        <MainDashboard board={currentDesk} />
      ) : (
        <DashboardMessage />
      )}
    </div>
  );
};
