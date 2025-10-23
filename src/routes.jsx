import {Router} from "@reach/router";
import {ConditionPage} from "./pages/ConditionPage.jsx";
import {LandingPage} from "./pages/LandingPage.jsx";
import {PersonsPage} from "./pages/PersonsPage.jsx";
import {useStores} from "./hooks/useStores.js";
import {NotFound} from "./pages/NotFound.jsx";

const Routes = props => {
  const {$user} = useStores();

  return (
    <Router>
      <LandingPage path="/"/>
      {
        $user.isManager &&
        <ConditionPage path="/conditioner"/>
      }
      <PersonsPage path="/persons"/>
      {

      }
      <NotFound default />
    </Router>
  )
}
export {Routes}