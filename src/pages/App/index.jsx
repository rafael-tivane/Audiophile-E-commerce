import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from '@loadable/component';
import Header from "../../components/Header";
//import Categories from "../Categories";
import Home from '../Home';

const App = () => {
    const loadableCategoriesComponent = loadable(() => import('../Categories'));

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:category" component={loadableCategoriesComponent} />
                    <Route exact path="/:category/:id" component={Home} />
                </Switch>
            </Router>
        </>
    );
};

export default App;