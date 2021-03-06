import React from "react";
// import fetchBook from "_lib/fetch";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";

import routes from "_container/router_lodable_data";
import Header from "_components/organisms/Header";
import Footer from "_components/organisms/Footer";
import Genre from "_components/Genre";
import Detail from "_components/Detail";
import BookshelfDetail from "_components/BookshelfDetail";
import BrowserViewer from "_components/BrowserViewer";

import "_scss/index.scss";

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  navs: Array<any> = [];
  elms: object = [];
  constructor(props) {
    super(props);
  }
  render() {
    this.elms = routes.map((route, idx) => {
      this.navs.push(
        <li key={idx}>
          <Link to={route.path} key={idx}>
            {route.name}
          </Link>
        </li>
      );
      return route.component ? (
        <Route
          key={route.name}
          name={route.name}
          exact={route.exact}
          path={route.path}
          render={(props) => <route.component />}
        />
      ) : null;
    });
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <div className="contents">
            <div className="contents-inner">
              <div>
                <ul>
                  {this.navs}
                  {/* <Link to="/genre/11">GENRE</Link> */}
                  <Link to="/detail/9000184683">DETAIL</Link>
                </ul>
              </div>
              <div>
                <Switch>
                  {this.elms}
                  <Route
                    name="genre"
                    exact
                    path="/genre/:id"
                    component={Genre}
                  />
                  <Redirect exact from="/" to="/" />
                  <Route
                    name="detail"
                    exact
                    path="/detail/:id_book"
                    component={Detail}
                  />
                  <Route
                    name="bookshelf-detail"
                    exact
                    path="/bookshelf-detail/:id_series"
                    component={BookshelfDetail}
                  />
                  <Route
                    name="br"
                    exact
                    path="/browser-viewer/:id_book"
                    component={BrowserViewer}
                  />
                  <Redirect exact from="/" to="/" />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
