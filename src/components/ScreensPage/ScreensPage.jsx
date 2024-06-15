import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../redux/boards/operations";
import { selectBoards, selectLoading, selectError } from "../../redux/boards/selectors";
import { HeaderDashboard } from "../HeaderDashboard/HeaderDashboard";
import { MainDashboard } from "../MainDashboard/MainDashboard";
import { DashboardMessage } from "../DashboardMessage/DashboardMessage";
import css from "./ScreensPage.module.css";

export const ScreensPage = () => {
    const dispatch = useDispatch();
    const boards = useSelector(selectBoards);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getBoards());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading boards</p>;

    return (
        <div className={css.container}>
            <HeaderDashboard boardName={boards.length ? boards[0].title : ""} />
            {boards.length ? <MainDashboard board={boards[0]} /> : <DashboardMessage />}
        </div>
    );
};
