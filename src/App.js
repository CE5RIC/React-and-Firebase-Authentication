import './App.css';
import Form from './components/common/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
    <div className="App">
        <>
            <Routes>
                <Route path='/login' element={<Form />} />
                <Route path='/register' element={<Form />} />
            </Routes>
        </>
    </div>
      </Router>
  );
}

export default App;
