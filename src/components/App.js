import React from "react";
import "./App.scss";
import SearchInput from "./SearchInput/SearchInput";
import FilmList from "./FilmList/FilmList";
import SelectedFilm from "./SelectedFilm/SelectedFilm";
import ErrorHandler from "./ErrorHandler/ErrorHandler";
import { useError } from "../hooks/useError";

import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const App = ({ onSetSearchedText, filmError, commentError }) => {
  const history = useHistory();

  const errorArray = [filmError, commentError];

  useError("/error", errorArray);

  const onSetInputText = (text) => {
    onSetSearchedText(text);
    console.log(window.location.pathname);
    if (window.location.pathname.startsWith("/selected-film")) {
      history.push("/");
    }
  };

  return (
    <div className="App">
      <header className="header-section">
        <SearchInput onSetInput={onSetInputText} />
      </header>
      <main className="main-section">
        <Switch>
          {filmError || commentError ? (
            <Route
              path="/error"
              render={() => <ErrorHandler errorArray={errorArray} />}
            />
          ) : null}
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

const mapStateToProps = (state) => {
  return {
    filmError: state.filmList.error,
    commentError: state.comments.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSearchedText: (text) => dispatch(actions.setSearchedText(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
