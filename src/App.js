import React from 'react'; 
import {Routes, Route} from 'react-router-dom';
import theme from './components/Theme';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import SeasonSale from './components/Season-Sale';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/season-sale' element={<SeasonSale/>}/>
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
