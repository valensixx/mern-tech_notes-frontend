import React from "react"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation, useNavigate } from "react-router-dom"

const DashHeader = () => {
    const content = (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/dash">
                    <h1 className="dash-header__title">techNotes</h1>
                </Link>
                <nav className="dash-header__nav">
                    {/* will add nav buttons later */}
                </nav>
            </div>
        </header>
    )

    return content
}

export default DashHeader