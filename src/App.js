import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Layout from './Components/Layouts/Layout';
import LearnHooks from './Components/Modules/LearnHooks';
import SignIn from './Components/Pages/SignIn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index  element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Learnhooks' element={<LearnHooks />}></Route>
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/Home' element={<Home/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;