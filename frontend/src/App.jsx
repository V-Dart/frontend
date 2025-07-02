import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="min-h-screen">
      <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;
