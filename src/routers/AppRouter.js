import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>} />
        <Route exact path="/blog" />
        <Route path="*" element={<HomeScreen to="/" replace />}/>
      </Routes>
   </BrowserRouter>
  );
};
