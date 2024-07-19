
import Text from "../atoms/Paragraph"
import Title from "../atoms/Title_card"
import Card from "../atoms/History_card"
import Data from "../../data/Data"
import Style from "./HistoryPlaces_card.module.css"
function Heroe_card() {


    return(
        Data.page.cards_data.map(item => {
            return(
            <Card>
            <div id={Style.cal_images}>
                <img className={Style.cal_image} src={item.image}></img>
            </div>
            <div id={Style.cal_text}>
                <div id={Style.cal_title}>
                    <Title title_card={item.title}></Title>
                </div>
                <div id={Style.cal_paragraph}>
                   <Text text={item.text}></Text> 
                </div>
            </div>  
            </Card>
              )
           }
        )
    )
}

export default Heroe_card; 