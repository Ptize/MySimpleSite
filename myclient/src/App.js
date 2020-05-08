import React from "react";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import { Container } from "@material-ui/core";
import MyName from "./components/MyName.js";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <MyName />
      </Container>
    </Provider>
  );
}

export default App;
