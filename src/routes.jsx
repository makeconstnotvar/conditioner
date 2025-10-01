import {Router} from "@reach/router";
import {ConditionPage} from "./pages/ConditionPage.jsx";
import {LandingPage} from "./pages/LandingPage.jsx";
import {PersonsPage} from "./pages/PersonsPage.jsx";

const Routes = props => {
  return (
    <Router>
      <LandingPage path="/"/>
      <ConditionPage path="/conditioner"/>
      <PersonsPage path="/persons"/>
    </Router>
  )
}
export {Routes}