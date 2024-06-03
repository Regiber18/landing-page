import Title from "../atoms/Title"
import Data from "../../data/Data"
import Style from "./FourTitle.module.css"
function Four_title() {
    return(
        Data.page.four_title.map(item => {
            return(
          <div id={Style.cal_title}>
             <Title title={item.title}></Title>
          </div>
            )
        })
    )
}

export default Four_title;