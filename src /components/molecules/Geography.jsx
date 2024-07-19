import Text from "../atoms/Paragraph"
import Data from "../../data/Data"
import Style from "./Geography.module.css"
function Geography() {
    return(
        Data.page.geography_information.map((item, key) => {
            return(
    <>
        <div key={key} id={Style.cal_text}>
            <Text text={item.text}></Text>
        </div>
        <div id={Style.cal_images}>
            <img id={Style.cal_image}src={item.image}></img>
        </div>
    </>)
        })
    
    )
}

export default Geography;