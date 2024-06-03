import Title from "../atoms/Title"
import Style from "./SecondTitle.module.css"
import Data from "../../data/Data"
function Second_title() {

    return(
        Data.page.second_title.map(item => {
            return(
         <div id={Style.cal_title}>
            <Title title={item.title}></Title>
        </div>)
        })
    )
}

export default Second_title;