import { Link, useLocation } from "react-router-dom"
import { useContext, useState, useRef, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import "../styles/topbar.css"

export default function TopBar() {
    const { pathname } = useLocation()
    const { user } = useContext(UserContext)
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    /* ================= CLOSE ON OUTSIDE CLICK ================= */
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="topbar">
            <div className="topbar-container">


                <div className="topbar-brand">
                    VeveTrack
                </div>

                {/* CENTER */}
                <div className="topbar-nav">
                    <Link to="/" className={pathname === "/" ? "active" : ""}>
                        <strong>Home</strong>
                    </Link>

                    <Link
                        to="/my-bookings"
                        className={pathname === "/my-bookings" ? "active" : ""}
                    >
                        <strong>My Bookings</strong>
                    </Link>

                    <Link
                        to="/profile"
                        className={pathname === "/profile" ? "active" : ""}
                    >
                        <strong>My Profile</strong>
                    </Link>

                    <Link
                        to="/notifications"
                        className={pathname === "/notifications" ? "active" : ""}
                    >
                        <strong>Notifications</strong>
                    </Link>
                </div>

                {/* RIGHT */}
                <div className="topbar-user" ref={dropdownRef}>
                    <img src={user.image} alt="user" />
                    <span>{user.name}</span>
                    <span className="caret">▼</span>

                    <div
                        className="topbar-user-click"
                        onClick={() => setOpen(!open)}
                    />

                    {/* DROPDOWN */}
                    {open && (
                        <div className="topbar-dropdown">
                            <button onClick={() => alert("Logout clicked (static)")}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
