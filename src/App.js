import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat/Chat";
import Login from "./Login/Login";
import { useStateValue } from "./ServiceProvider";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Route exact path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route exact path="/">
              <Chat />
            </Route>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
