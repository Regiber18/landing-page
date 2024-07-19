import Style from "./FirstTitle.module.css"
import Title from "../atoms/Title"
import Data from "../../data/Data"
function First_title() {

    return(   
    Data.page.first_title.map((item, key) => {
        return(
        <div key={key} id={Style.cal_title}>
               <Title title={item.title}> </Title> 
        </div>)
    })
    )
}

export default First_title;