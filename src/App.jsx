import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Layout from "./layout/Layout";
import HomePage from "./pages/homePage/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
