import Style from "./Paragraph.module.css"
function Text(props) {

    return(<p id={Style.csl_text}>{props.text}</p>)
}

export default Text;