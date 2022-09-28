import './App.css';
import Form from './components/common/Form'
import { Routes, Route, useNavigate } from 'react-router-dom'
import {useState} from "react";
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import Home from "./components/Home";

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleAction = (id) => {
const authentication = getAuth();
if (id === 2) {
    createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
            navigate('/home')
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
}
}


  return (

    <div className="App">
        <>
            <Routes>
                <Route path='/login' element={<Form title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)} />} />
                <Route path='/register' element={<Form title="Register" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />} />
                <Route
                    path='/home'
                    element={
                        <Home />}
                />
            </Routes>
        </>
    </div>
  );
}

export default App;
