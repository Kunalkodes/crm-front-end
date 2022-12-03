import React from "react";
// import Entry from "./components/pages/Entry.page";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { DefaultLayout } from "./layout/Default.layout";
// import { DashboardPage } from "./components/pages/dashboard/Dashboard.page";
// import { AddTicket } from "./components/pages/new-ticket/Add-newticket";
// import { Ticketlistpage } from "./components/pages/ticket-list/Ticketlist.page";
// import { Ticket } from "./components/pages/ticket/Ticket.page";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register } from "./components/pages/registration/Registration";

export default function App() {
  return (
    <div className="App">
      <Register />
      {/* <Router>
        <Switch> */}

      {/* <Route exact path="/">
            <Entry/>
          </Route> */}

      {/* <Route path="/register">
            <Register />
          </Route> */}

      {/* <DefaultLayout>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>

            <Route path="/addticket">
              <AddTicket />
            </Route>

            <Route path="/ticketlistpage">
              <Ticketlistpage />
            </Route>

            <Route path="/ticket">
              <Ticket />
            </Route>
          </DefaultLayout>
        </Switch>
      </Router> */}
    </div>
  );
}
