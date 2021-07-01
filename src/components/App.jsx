import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import WasteProduction from "./WasteProduction";
import TableWasteProduction from "./TableWasteProduction";
import AccountSetting from "./AccountSetting";

function App() {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/wasteProduction" component={WasteProduction} />
                <Route exact path="/tableWasteProduction" component={TableWasteProduction} />
                <Route exact path="/accountSetting" component={AccountSetting} />
            </Router>
            {/* <WasteProduction /> */}
            {/* <Register />
            <Login /> */}
        </div>
    )
}

export default App;