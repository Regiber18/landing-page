import Style from "./Activities_card.module.css"
function Activities_card(props) {

    return(
        <div id={Style.content}>{props.children}</div>
    )
}

export default Activities_card;
