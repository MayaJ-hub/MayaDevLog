import './App.css'
import profileImg from './assets/MayaHJ.jpg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Wellness from './pages/Wellness'
import Business from './pages/Business'
import Tech from './pages/Tech'

function App() {
  return (
    <Router>
      <div className="hero"> Maya N. Huggins-Jordan | Sales Development Representative </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/wellness">Wellness</Link></li>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/tech">Tech</Link></li>
          <li><a href="https://www.linkedin.com/in/maya-jordan-0b4303176/" target="_blank" rel="noopener noreferrer"> LinkedIn</a></li>
          <li><Link to="#resume"> Resume</Link></li>
        </ul>
      </nav>
      <div className="container">
        <aside className="sidebar">
          <img className="profile-img" src={profileImg} alt="Mayaheadshot"/>
          <section>
            <h2>About Me</h2>
            <p>
              Sales Development Representative | 
              Business Analyst |
              Passionate about leveraging data to drive sales strategies and business growth.
              Connect with me on LinkedIn for more insights and opportunities| Let's drive success together!
            </p>
          </section>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/business" element={<Business />} />
            <Route path="/tech" element={<Tech />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
