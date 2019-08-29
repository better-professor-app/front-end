import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./utilities/privateRoute";
import Registration from "./components/Registration";
import ProtectedContent from "./components/ProtectedContent";
import StudentList from "./components/StudentList";
import ShowReminders from "./components/ShowReminders";

function App() {
  return (
    <Router>
      <Link to="reminders">Temporary Reminder</Link>
      <div className="App">
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route path="/registration" component={Registration} />
        <PrivateRoute path="/protected" component={ProtectedContent} />
        <Route path="/reminders" component={ShowReminders} />
        <PrivateRoute path="/protected" component={StudentList} />
      </div>
    </Router>
  );
}

export default App;
