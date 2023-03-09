import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://www.apk20.com/_next/image?url=https%3A%2F%2Fplay-lh.googleusercontent.com%2F-YcCfbi7cpBomwiPgogLWTq7j52Bo3tfKGQsd3tWY-bRAys2TUmeQ-BbFqGqt6viCg%3Dh250-rw%3Fcompress&w=640&q=100"/></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header