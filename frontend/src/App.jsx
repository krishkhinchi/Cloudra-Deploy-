import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Component/Home.jsx'
import SignUp from './Component/Signup.jsx'
import Signin from './Component/Signin.jsx'


function App() {
  return (
    <Router>
          
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/SignIn" element={<Signin/>} />
      </Routes>
    </Router>
  )
}

export default App