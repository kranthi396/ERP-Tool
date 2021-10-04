import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ListEmployeeComponent from "./components/modules/employees/ListEmployeeComponent";

import CreateEmployeeComponent from "./components/modules/employees/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/modules/employees/ViewEmployeeComponent";
import ListStudents from "./components/modules/students/ListStudents";

import CreateStudent from "./components/modules/students/CreateStudent";
import ViewStudent from "./components/modules/students/ViewStudent";
import ListFaculty from "./components/modules/faculty/ListFaculty";
import CreateFaculty from "./components/modules/faculty/CreateFaculty";
import ViewFaculty from "./components/modules/faculty/ViewFaculty";

import HomePage from "./components/layout/Landing/HomePage";
import StudentLogin from "./components/LoginForms/StudentLogin";
import FacultyLogin from "./components/LoginForms/FacultyLogin";
import Navbar from "./components/layout/Navbar/Navbar";

import Myprofile from "./components/Views/Myprofile";
import dashboard from "./components/Views/dashboard";
import ListAchievement from "./components/modules/achievement/ListAchievement";
import createAchievement from "./components/modules/achievement/createAchievement";
import ListGrievanace from "./components/modules/grievance/ListGrievanace";
import CreateGrievance from "./components/modules/grievance/CreateGrievance";
import ListEnotes from "./components/modules/eNotes/ListEnotes";
import CreateNotes from "./components/modules/eNotes/CreateNotes";
import ListEbank from "./components/modules/eBank/ListEbank";
import CreateBank from "./components/modules/eBank/CreateBank";
import Logout from "./components/Views/Logout";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("type") ? true : false
  );
  return (
    <div>
      <Router>
        <div>
          {loggedIn && <Navbar />}
          <Switch>
            <Route
              path="/student-login"
              component={() => <StudentLogin setLoggedIn={setLoggedIn} />}
            ></Route>
            <Route
              path="/faculty-login"
              component={() => <FacultyLogin setLoggedIn={setLoggedIn} />}
            ></Route>
            <Route
              path="/"
              exact
              component={() => <HomePage setLoggedIn={setLoggedIn} />}
            ></Route>
            <Route path="/my-profile" component={Myprofile}></Route>
            <Route path="/dashboard" component={dashboard}></Route>
            //E-Notes
            <Route path="/e-notes" component={ListEnotes}></Route>
            <Route path="/add-notes" component={CreateNotes}></Route>
            //E-Bank
            <Route path="/e-bank" component={ListEbank}></Route>
            <Route path="/add-bank" component={CreateBank}></Route>
            //Grievance
            <Route path="/grievance" component={ListGrievanace}></Route>
            <Route path="/add-grievance" component={CreateGrievance}></Route>
            //Achievements
            <Route path="/achievement" component={ListAchievement}></Route>
            <Route
              path="/add-achievement"
              component={createAchievement}
            ></Route>
            //student
            <Route path="/student" component={ListStudents}></Route>
            <Route path="/add-student/:id" component={CreateStudent}></Route>
            <Route path="/view-student/:id" component={ViewStudent}></Route>
            //Faculty
            <Route path="/faculty" exact component={ListFaculty}></Route>
            <Route path="/add-faculty/:id" component={CreateFaculty}></Route>
            <Route path="/view-faculty/:id" component={ViewFaculty}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee/:id"
              component={CreateEmployeeComponent}
            ></Route>
            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            ></Route>
            <Route path="/logout" component={Logout}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
