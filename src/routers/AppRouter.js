import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { Layout } from "../components/layout/layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<HomeScreen/>} />
          <Route exact path="/blog" />
          <Route path="*" element={<HomeScreen to="/" replace />}/>
        </Route>
        
      </Routes>
   </BrowserRouter>
  );
};
