import React, {Component} from 'react'
import Navbar1 from './Navbar/Navbar1'

import Home from './Routing/Home'
import About from './Routing/About'
import Contact from './Routing/Contact'
import Service from './Routing/Service'
import Counter from './Hooks/Counter'
import Message from './Hooks/Message'
import Product from './Hooks/Product'
import Digital from './Hooks/Digital'
import Login from './Hooks/Login'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
class App  extends Component {
render(){
    return (
    <div>
      <Router>
        <Navbar1/>
        <Routes>
<Route path="/home" element={<Home />} />
<Route path="/About" element={<About/>} />
<Route path="/Service" element={<Service/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Counter" element={<Counter/>}/>
<Route path="/Message" element={<Message/>}/>
<Route path="/Product" element={<Product/>}/>
<Route path="/Digital" element={<Digital/>}/>
<Route path="/Login" element={<Login/>}/>





</Routes>
      </Router>
    </div>
    )
        
}     

}

export default App