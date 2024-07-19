import Data from "../../data/Data"
import Card from "../atoms/Activities_card"
import Text from "../atoms/Paragraph"
import Title from "../atoms/Title_card"
import Style from "./Activities.module.css"
function Activities() {
    return(
        Data.page.places_information.map(item => {
            return(
            <Card>
                <div id={Style.cal_image}>
                    <img src={item.image}></img>
                </div>
                <div id={Style.cal_text}>
                    <div id={Style.cal_title}>
                        <Title title_card={item.title} ></Title>
                    </div>
                    <div id={Style.cal_information}>
                       <Text text={item.text}></Text> 
                    </div>
                </div>
            </Card>
          )
        })
        
    )
}

export default Activities;
