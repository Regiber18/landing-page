import Text from "../atoms/Paragraph"
import Style from "./History.module.css"
import Data from "../../data/Data"



function Information() {
    return(
        Data.page.history_information.map((item, key) => {
            return(
          <>
            <div key={key} id={Style.cal_title}>
                    <Text text={item.text_2}></Text>
             </div>
                <div id={Style.cal_images}>
                    <img src={item.image}></img>
            </div> 
        </>)
        }
        )

        
    )
}

export default Information; 