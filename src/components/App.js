import React, { useEffect } from "react";
import "./App.scss";
import SearchInput from "./SearchInput/SearchInput";
import FilmList from "./FilmList/FilmList";

import { getFilms } from "../store/actions";
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    props.getFilms();
  });

  return (
    <div className="App">
      <header className="header__section">
        <SearchInput />
      </header>
      <main>
        <FilmList className="main__section" />
      </main>
    </div>
  );
};

export default connect(null, { getFilms })(App);
