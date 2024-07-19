import Header from "../components/organisms/Header"
import First from "../components/organisms/FirstTitleSection"
import History from "../components/organisms/HistoryInformationSection"
import Third from "../components/organisms/ThirdTitleSection"
import History_places from "../components/organisms/HistoryPlacesSection"
import Four from "../components/organisms/FourTitleSection"
import Activities from "../components/organisms/ActivitiesSection"
import Second from "../components/organisms/SecondTitleSection"
import Geography from "../components/organisms/GeographySection"
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