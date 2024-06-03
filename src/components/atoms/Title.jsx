import Style from "./Title.module.css"
function Title(props) {
    return(<h4 id={Style.cal_title}>{props.title}</h4>)
}

export default Title;