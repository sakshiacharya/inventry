import './App.css';
import { DetailPage } from './component/DetailPage';
import { List } from './component/List';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>}> 
       
        </Route>
        <Route path="/:id" element={<DetailPage/>}/> 
      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
