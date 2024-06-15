import css from "./HeaderDashboard.module.css";
import svg from "../../img/icons.svg";
import { useState } from "react";
import { FilterModal } from "../FilterModal/FilterModal";

export const HeaderDashboard = ({ boardName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className={css.header}>
            <h2 className={css.dashboardName}>{boardName}</h2>
            <button className={css.filterBtn} onClick={openModal}>
                <svg className={css.icon} width="16" height="16">
                    <use href={svg + "#icon-filter"}></use>
                </svg>
                <p className={css.text}>Filters</p>
            </button>
            {isOpen &&
            <FilterModal isOpen={isOpen} isClose={closeModal} />}
        </div>
    );
};
