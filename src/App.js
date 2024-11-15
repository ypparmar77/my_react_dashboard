import './App.css';
import Navbar from './Elements/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Elements/Routes_work/Form';
import Task from './Elements/Task';
import Task_view from './Elements/Routes_work/Task_view';
import True_sidbar from './Elements/True_sidbar'; 
import Dashboard from './Elements/dashboard';
import Settings from './Elements/Settings';
import Projects from './Elements/Projects';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <True_sidbar />
      <Routes>
        <Route path="/Form" element={<Form />} />
        <Route path="/Task_view/:id" element={<Task_view />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path='/Task' element={<Task/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
