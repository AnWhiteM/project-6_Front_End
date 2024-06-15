import { useDispatch, useSelector } from "react-redux";
import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn";
import { TaskColumn } from "../TaskColumn/TaskColumn";
import css from "./MainDashboard.module.css";
import { getColumns } from "../../redux/columns/operations";
import { useEffect } from "react";
import {selectColumns} from "../../redux/columns/selectors"

import { selectLoading, selectError, selectCurrentBoard } from "../../redux/boards/selectors";

export const MainDashboard = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const currentBoard = useSelector(selectCurrentBoard);

    const columns = useSelector(selectColumns)
    useEffect(() => {
        dispatch(getColumns(currentBoard._id));
    }, [currentBoard, dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading boards</p>;

    return (
        <div className={css.container}>
                <TaskColumn columns={columns}/>
            <AddColumnBtn board={currentBoard} />
        </div>
    );
};

