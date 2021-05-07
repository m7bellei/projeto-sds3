import Dashboard from 'pages/Dashboard/Dashboard';
import Home from 'pages/Home/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact>
                    <Home></Home>
                </Route>

                <Route path="/dashboard">
                    <Dashboard></Dashboard>
                </Route>



            </Switch> 
        </BrowserRouter>
    );
}

export default Routes;
