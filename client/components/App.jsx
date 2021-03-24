import React, { Component } from 'react'
import Navbar from './Navbar.jsx'
import Gallery from './Gallery.jsx'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Gallery/>
            </div>
        )
    }
}
export default App