//import logo from './logo.svg';
import './App.css';
import TermsAndConditions from './components/TermsAndConditions';
import TermsOfUse from './components/TermsOfUse';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/consent/termsandconditions" component={TermsAndConditions}/>
        <Route path="/consent/termsofuse" component={TermsOfUse}/>
      </Switch>
    </Router>
   /* <div>
      <TermsAndConditions/>
    </div>*/
  );
}

export default App;
