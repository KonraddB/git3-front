import React from "react";
import { GitContainer } from "containers/GitContainer";
import Test from "components/AppHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "layouts/Header";
import { Container, ThemeProvider } from "@mui/material";
import { defaultTheme } from "layouts/theme";
import { AppContainer } from "layouts/AppContainer";

const App: React.FC = () => {
  return (
    <GitContainer.Provider>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <AppContainer>
          <Router>
            <Routes>
              <Route path="/" element={<Test />} />
            </Routes>
          </Router>
        </AppContainer>
      </ThemeProvider>
    </GitContainer.Provider>
  );
};

export default App;
