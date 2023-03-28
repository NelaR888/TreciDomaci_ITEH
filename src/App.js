import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GamePage from './pages/GamePage';
import HistoryPage from './pages/HistoryPage';
import StatsPage from './pages/StatsPage';
import { useState } from 'react';

function App() {
  const [gameHistory, setGameHistory] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<GamePage onOver={game => {
          setGameHistory(prev => [...prev, game])
        }} />} />
        <Route path='/history' element={<HistoryPage games={gameHistory} />} />
        <Route path='/statistics' element={<StatsPage games={gameHistory} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
