import Header from "../components/organisms/Header_section"
import First from "../components/organisms/FirstTitle_section"
import History from "../components/organisms/HistoryInformation_section"
import Third from "../components/organisms/ThirdTitle_section"
import History_places from "../components/organisms/HistoryPlaces_section"
import Four from "../components/organisms/FourTitle_section"
import Activities from "../components/organisms/Activities_section"
import Second from "../components/organisms/SecondTitle_section"
import Geography from "../components/organisms/Geography_section"
import "./Pages.module.css"
function Page() {

    return(
  <>
    <Header></Header>
    <First></First>
    <History></History>
    <Second></Second>
    <Geography></Geography>
    <Third></Third>
    <History_places></History_places>
    <Four></Four>
    <Activities></Activities>
  </>
    )
}

export default Page;  