import {useRef} from "react"
import "./Navbar.css"

function Navbar() {

    const navRef = useRef()

    return (
        <header>
            <nav ref = {navRef}>
                <a href="/a" className = "active">STORE</a>
                <a href="/b">COMMUNITY</a>
                <a href="/c">LIBRARY</a>
                <a href="/d">PROFILE</a>
                <a href="/e">NOTIFICATIONS</a> 
            </nav>
        </header>
    )
}

export default Navbar