import Title from "../atoms/Title"
import Style from "./ThirdTitle.module.css"
import Data from "../../data/Data"
function Third_title() {
    return(
        Data.page.third_title.map(item => {
            return(
                <div id={Style.cal_title}>
                    <Title title={item.title}></Title>
                </div>
            )
        })
    )
}

export default Third_title;