import { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase.utils";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/signin-signup/signin-signup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/shop"} component={ShopPage} />
          <Route exact path={"/signin"} component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
