
import './App.css'
import Target from './assets/target.svg'
import SearchIcon from "./assets/search-icon.svg"

function App() {


  return (
   
      <div className="home">
        <div className="navbar">
          <div className='logo'>
            <img src="../public/image.png" alt="logo" className='navbar-logo'/>
            <text className='navbar-text'>Peace</text>

        
        </div>
        <div className='navbar-button'>
          <div className="button-container">
            <button><img src="../public/user-icon.png" alt="usericon" className='user-icon' /></button>
            <button><img src="../public/ham-burger.png" alt="usericon" className='user-icon' /></button>
          </div>
        </div>
        </div>

        <div className="main-body">
           <text className="big-text">Find your best stay</text>
           <text className="small-text">Explore our extensive selection of comfortable and convenient accommodations tailored to meet your new beginnings</text>
           <div className="searc-bar">
            <input type='text' placeholder="Search Locality"/>
            <div style={{display:'flex'}}>
            <img src={Target} className='target'/>
            <button className='search-button'>
            <img src={SearchIcon}/>
            Search
            </button>
            </div>
            </div>
        </div>

        {/* <img src='..public/home-wallpaper.jpeg'/> */}
      </div>
  
  )
}

export default App
