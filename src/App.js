import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PublicLanding from "./pages/PublicLanding";
import AddLibs from "./add-libs/AddLibs";
import Shopping from "./shopping/Shopping";
import Recipes from "./recipes/Recipes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PublicLanding />} />
        <Route path="/addlibs" element={<AddLibs />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="recipes" element={<Recipes />} />
      </Routes>
    </>
  );
};

export default App;
