import React, { useState } from "react";
import "./App.scss";
import SearchInput from "./SearchInput/SearchInput";
import FilmList from "./FilmList/FilmList";
import SelectedFilm from "./SelectedFilm/SelectedFilm";

import { Route, Switch } from "react-router-dom";

const App = () => {
  const [inputText, setInputText] = useState("");

  const onSetInputText = (text) => {
    setInputText(text);
  };

  return (
    <div className="App">
      <header className="header__section">
        <SearchInput onSetInput={onSetInputText} />
      </header>
      <main className="main__section">
        <Switch>
          <Route path="/selected-film/:id" render={() => <SelectedFilm />} />
          <Route path="/" render={() => <FilmList searchText={inputText} />} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
