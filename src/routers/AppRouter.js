import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { HomeScreen } from '../pages/HomeScreen';
import { Layout } from '../components/layout/layout';
import { AboutMe } from '../components/about-me/aboutMe';
import { Certifications } from '../components/certifications/certifications';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path='/' element={<HomeScreen/>} />
          <Route exact path='/about-me' element={<AboutMe/>} />
          <Route exact path='/experience' element={<AboutMe/>} />
          <Route exact path='/certifications' element={<Certifications />} />
          
          <Route path='*' element={<HomeScreen to='/' replace />}/>
        </Route>
        
      </Routes>
   </BrowserRouter>
  );
};