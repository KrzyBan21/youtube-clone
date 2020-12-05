import React from "react";
import "./App.scss";
import SearchInput from "./SearchInput/SearchInput";

const App = () => {
  return (
    <div className="App">
      <section className="header__section">
        <SearchInput />
      </section>
    </div>
  );
};

export default App;
