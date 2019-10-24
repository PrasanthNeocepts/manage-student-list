import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import StudentPage from "./StudentDetails/StudentPage";
import ManageStudentPage from "./StudentDetails/ManageStudentPage";
import Home from "./Home/Home";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route path="/students" component={StudentPage} />
        <Route path='/student/:studentName' component={ManageStudentPage} />
        <Route path='/student' component={ManageStudentPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
