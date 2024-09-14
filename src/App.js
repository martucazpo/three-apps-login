import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PublicLanding from "./pages/PublicLanding";
import PrivateLanding from "./pages/PrivateLanding";
import Landing from "./pages/Landing";
import AddLibs from "./add-libs/AddLibs";
import Shopping from "./shopping/Shopping";
import Recipes from "./recipes/Recipes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PublicLanding />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path="/apps" element={<PrivateLanding />}>
          <Route index element={<Landing />} />
          <Route path="addlibs" element={<AddLibs />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
