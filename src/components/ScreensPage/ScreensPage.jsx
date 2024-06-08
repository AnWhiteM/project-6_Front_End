import { HeaderDashboard } from "../HeaderDashboard/HeaderDashboard"
import { MainDashboard } from "../MainDashboard/MainDashboard"
import css from "./ScreensPage.module.css"

export const ScreensPage = () => {
    return (
        <div className={css.container}>
            <HeaderDashboard/>
            <MainDashboard/>
        </div>
    )
}