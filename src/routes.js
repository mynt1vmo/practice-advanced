import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Quote from "./component/Quote";
import Todolist from "./component/Todolist";
import Website from "./Layout/website";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route>
                    <Website>
                        <Switch>
                            <Route exact path='/todo' component={Todolist} />
                            <Route exact path="/quote" component={Quote} />
                        </Switch>
                    </Website>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes