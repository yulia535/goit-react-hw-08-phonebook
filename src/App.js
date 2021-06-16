import React, {Component, lazy, Suspense} from 'react';
import { Route, Switch } from 'react-router';
//import Phonebook from './components/Phonebook/Phonebook';
import AppBar from './components/UserMenu/AppBar';
//import HomeView from './views/HomeView';
//import RegisterView from './views/RegisterViews';
//import LoginView from './views/LoginViews';
import PrivateRoute from './components/UserMenu/PrivateRouter';
import PublikRouter from './components/UserMenu/PublikRouter';
//import ContactsView from './views/ContactsView';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';

//const AsyncComponent = lazy(() => import('./AsyncComponent'));
const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterViews'));
const LoginView = lazy(() => import('./views/LoginViews'))
const ContactsView = lazy(()=>import('./views/ContactsView'))
//<Suspense fallback={<div>Завантаження...</div>}>
class App extends Component{

  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback= {<div>Завантаження...</div>}>
    <Switch>
      <Route exact path="/" component={HomeView} />
    <PublikRouter path="/register" restricted component={RegisterView} redirectTo={"/contacts"}/>
    <PublikRouter path="/login" restricted component={LoginView} redirectTo={"/contacts"} />
      <PrivateRoute path="/contacts" component={ContactsView} redirectTo={"/login"} />
          </Switch>
       </Suspense>
    </>
    )
  }
}

// const App = () => (
//   <>
//     <AppBar />
//     <Switch>
//       <Route exact path="/" component={HomeView} />
//     <Route path="/register" component={RegisterView} />
//     <Route path="/login" component={LoginView} />
//       <Route path="/contacts" component={ContactsView} />
//       </Switch>
//     </>
  // <div>
  //   <Phonebook />
  // </div>
//);
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null,mapDispatchToProps)(App);
