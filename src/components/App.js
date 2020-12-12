import React from "react";
import "./App.scss";
import SearchInput from "./SearchInput/SearchInput";
import FilmList from "./FilmList/FilmList";
import SelectedFilm from "./SelectedFilm/SelectedFilm";

import { useParams, useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const App = ({ onSetSearchedText }) => {
  const params = useParams();
  const history = useHistory();

  const onSetInputText = (text) => {
    onSetSearchedText(text);
    console.log(window.location.pathname);
    if (window.location.pathname.startsWith('/selected-film')) {
      history.push("/");
    }
  };

  return (
    <div className="App">
      <header className="header__section">
        <SearchInput onSetInput={onSetInputText} />
      </header>
      <main className="main__section">
        <Switch>
          <Route
            path="/selected-film/:videoId"
            render={() => <SelectedFilm />}
          />
          <Route path="/" render={() => <FilmList />} />
        </Switch>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSearchedText: (text) => dispatch(actions.setSearchedText(text)),
  };
};

export default connect(null, mapDispatchToProps)(App);
