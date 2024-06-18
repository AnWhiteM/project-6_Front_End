import css from "./Task.module.css";
import svg from "../../img/icons.svg";
import { EditCard } from "../EditCardModal/EditCardModal";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateOwner } from "../../redux/tasks/operations";
import { useParams } from "react-router-dom";
import { selectColumns } from "../../redux/columns/selectors";
import dayjs from "dayjs";


export const Task = ({ task }) => {
  const [editCardModal, setEditCardModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const dispatch = useDispatch();
  const { deskId } = useParams();
  const columns = useSelector(selectColumns);

  const openModal = () => {
    setEditCardModal(true);
  };

  const closeModal = () => {
    setEditCardModal(false);
  };

  function assignColor(priority) {
    let result;

    switch (priority) {
      case "Low":
        result = "#8FA1D0";
        break;
      case "Medium":
        result = "#E09CB5";
        break;
      case "High":
        result = "#BEDBB0";
        break;
      default:
        result = "#5B5B5B";
        break;
    }
    return result;
  }

  const labelColor = assignColor(task.priority);

  const taskDeleteNotify = () => {
    toast.error(`You deleted the task ${task.title}`);
  };

  const handleDelete = async () => {
    dispatch(
      deleteTask({
        deskId,
        columnId: task.owner,
        taskId: task._id,
      })
    );
    taskDeleteNotify();
  };

  const handleMoveTask = (targetColumnId, taskOwner) => {
    dispatch(updateOwner({ deskId, columnId: taskOwner, taskId: task._id, newColumnId: targetColumnId }));
    setShowTooltip(false);
  };

  return (
    <div className={css.card}>
      <div className={css.border} style={{ background: labelColor }}></div>
      <h4 className={css.title}>{task.title}</h4>
      <p className={css.desc}>{task.description}</p>
      <hr className={css.decor}></hr>

      <div className={css.details}>
        <div className={css.wrapper}>
          <div className={css.column}>
            <p className={css.p}>Priority</p>
            <div className={css.container}>
              <div className={css.kolo} style={{ backgroundColor: labelColor }}></div>
              <p className={css.info}>{task.priority}</p>
            </div>
          </div>

          <div className={css.column}>
            <p className={css.p}>Deadline</p>
            <p className={css.info}>{dayjs(task.deadline).format('DD/MM/YYYY')}</p>
          </div>
        </div>
        
        <div className={css.icons}>
        {dayjs().format('DD/MM/YYYY') === dayjs(task.deadline).format('DD/MM/YYYY') ? 
        <button className={css.wrapIcon}>
          <svg className={css.bell} width="16" height="16">
            <use href={svg + "#icon-bell"}></use>
            </svg>
          </button>
         : null }

          <div className={css.btns}>
            <button className={css.wrapIcon} onClick={() => setShowTooltip(!showTooltip)}>
              <svg className={css.icon} width="16" height="16">
                <use href={svg + "#icon-arrow-circle"}></use>
              </svg>
            </button>
            <button className={css.wrapIcon} onClick={() => openModal()}>
              <svg className={css.icon} width="16" height="16">
                <use href={svg + "#icon-pencil"}></use>
              </svg>
            </button>
            <button className={css.wrapIcon} onClick={handleDelete}>
              <svg className={css.icon} width="16" height="16">
                <use href={svg + "#icon-trash"}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showTooltip && (
        <div className={css.tooltip}>
          {columns.filter(column => column._id !== task.owner).map(column => (
              <div key={column._id} onClick={() => handleMoveTask(column._id, task.owner)} className={css.tooltipItem}>
              {column.title}
              <svg className={css.iconTool} width="16" height="16">
                <use href={svg + "#icon-arrow-circle"}></use>
              </svg>
            </div>
          ))}
        </div>
      )}
      {editCardModal && (
        <EditCard isOpen={editCardModal} isClose={closeModal} task={task} />
      )}
    </div>
  );
}