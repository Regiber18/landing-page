import Data from "../../data/Data"
import Text from "../atoms/Paragraph"
import Title from "../atoms/Title_card"
import Img from "../atoms/Img"
import Style from "./Activities.module.css"
function Activities() {
    return(
        Data.page.places_information.map((item,key) => {
            return(
            <div key={key} className={Style.content}>
                <div id={Style.cal_image}>
                    <Img src={item.image}></Img>
                </div>
                <div id={Style.cal_text}>
                    <div id={Style.cal_title}>
                        <Title title_card={item.title} ></Title>
                    </div>
                    <div id={Style.cal_information}>
                       <Text text={item.text}></Text> 
                    </div>
                </div>
            </div>
          )
        })
        
    )
}

export default Activities;
