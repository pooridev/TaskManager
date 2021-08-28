import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Layout/Home';
import MainLayout from './Layout/MainLayout/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
