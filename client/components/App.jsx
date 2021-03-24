import React, { Component } from 'react'
import Navbar from './Navbar.jsx'
import Information from './Information.jsx'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Information/>
            </div>
        )
    }
}
export default App