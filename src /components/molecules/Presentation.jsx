import Text from "../atoms/Paragraph"
import Style from "./Presentation.module.css"
import Data from "../../data/Data"
function Presentation() {
   return  (
    Data.page.page_title.map((item,key)=> {
        return (
            <>
            <div key={key} id={Style.cal_text}>
             <div id={Style.cal_first}>
                <Text key={item} text={item.text}></Text>
             </div>
            </div>
            <div id={Style.cal_image_content}>
               <img id={Style.cal_image} src={item.image}></img> 
            </div>
           </>
        )
    })
   )
}

export default Presentation;