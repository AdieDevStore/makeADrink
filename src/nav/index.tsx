import './index.css'; 

// Basic nav bar
function NavBar() {
  return (
    <div className='nav-container'>
      <nav className='nav-main'>
      <h3 className='title'>Heading</h3>
        <ul className='link-container'>
          <li> <a href="#"></a> Home</li>
          <li> <a href="#"></a> About</li>
          <li> <a href="#"></a> Dead Link</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
