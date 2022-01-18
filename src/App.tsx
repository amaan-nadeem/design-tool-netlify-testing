import { ThemeProvider } from "styled-components";

// Components
import Layout from "./components/Layout";

// Screens
import Home from "./screens/Home";

//
import { primaryTheme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
