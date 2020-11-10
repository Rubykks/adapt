import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "../components/Header/Header";
import AmbiancePage from "../pages/AmbiancePage";
import Authentification from "../pages/Authentification";
import Calendar from "../pages/Calendar";
import CalendarDay from "../pages/CalendarDay";
import CalendarWeek from "../pages/CalendarWeek";
import Connexion from "../pages/Connexion";
import CurrentPlay from "../pages/CurrentPlay";
import Home from "../pages/Home/Home";
import Inscription from "../pages/Inscription";
import MenuPlayer from "../pages/MenuPlayer";
import ModifyProfile from "../pages/ModifyProfile";
import MyAccount from "../pages/MyAccount";
import MyLike from "../pages/MyLike";
import MyProfile from "../pages/MyProfile";
import Questionnaire from "../pages/Questionnaire";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="../pages/AmbiancePage">
          <AmbiancePage/>
        </Route>
        <Route path="../pages/Authentification">
         <Authentification/>
        </Route>
        <Route path="../pages/Calendar">
          <Calendar/>
        </Route>
        <Route path="../pages/CalendarDay">
          <CalendarDay/>
        </Route>
        <Route path="../pages/CalendarWeek">
          <CalendarWeek/>
        </Route>
        <Route path="../pages/Connexion">
          <Connexion/>
        </Route>
        <Route path="../pages/CurrentPlay">
          <CurrentPlay/>
        </Route>
        <Route path="../pages/Home/Home">
          <Home/>
        </Route>
        <Route path="../pages/Inscription">
          <Inscription/>
        </Route>
        <Route path="../pages/MenuPlayer">
          <MenuPlayer/>
        </Route>
        <Route path="../pages/ModifyProfile">
          <ModifyProfile/>
        </Route>
        <Route path="../pages/MyAccount">
          <MyAccount/>
        </Route>
        <Route path="../pages/MyLike">
          <MyLike/>
        </Route>
        <Route path="../pages/MyProfile">
          <MyProfile/>
        </Route>
        <Route path="../pages/Questionnaire">
          <Questionnaire/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
