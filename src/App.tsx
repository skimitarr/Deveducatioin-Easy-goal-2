import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage"
import NotFound from "./pages/NotFound";

import { useState, useEffect } from 'react';
import { ITask } from './components/Interfaces';
import fakeData from "./components/fakeData";

function App() {
  const [stateTodos, setStateTodos] = useState<ITask[]>([]);

  useEffect(() => {
    setStateTodos(fakeData)
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home stateTodos={stateTodos}/>} />
        <Route path="/articles/:title" element={<DetailPage stateTodos={stateTodos}/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
export default App;
