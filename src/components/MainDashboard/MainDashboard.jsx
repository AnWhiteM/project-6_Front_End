import { AddAnotherCardBtn } from "../AddAnotherCardBtn/AddAnotherCardBtn"
import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn"
import { DashboardMessage } from "../DashboardMessage/DashboardMessage"

export const MainDashboard = () => {
    return (
        <div>
            <DashboardMessage/>
            {/* <AddColumnBtn/> */}
            <AddAnotherCardBtn />
        </div>
    )
}