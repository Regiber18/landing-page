import Style from "./History_card.module.css"
function  Card(props) {
    return(
        <div id={Style.cal_card}>{props.children}</div>
    )
}

export default Card; 