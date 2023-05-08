import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from '../../src/Chachaphong/pages/Pages';
import login from '../../src/Chachaphong/Phonlawat/login';

function ChatR() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Pages} />
        <Route exact path="/loginChat" component={login} />
      </Switch>
    </Router>
  );
}

export default ChatR;
