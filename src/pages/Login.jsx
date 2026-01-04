import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import "../styles/login.css"

export default function Login() {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e) {
        e.preventDefault()

        setUser({
            name: "David James",
            email,
            phone: "+91 987654456",
            address: "Indiranagar, 100 Feet Road",
            image: "https://i.pravatar.cc/150?img=12",
            isLoggedIn: true,
        })

        navigate("/")
    }

    function handleGoogleLogin() {
        setUser({
            name: "Google User",
            email: "googleuser@gmail.com",
            image: "https://i.pravatar.cc/150?img=32",
            isLoggedIn: true,
        })

        navigate("/")
    }

    return (
        <div className="auth-layout">

            {/* LEFT BLUE STATIC BAR */}
            <div className="auth-left">
                <div className="left-brand">VeveTrack</div>
                <h2>
                    Book rides faster <br />
                    travel smarter every day
                </h2>

            </div>

            {/* RIGHT – YOUR EXISTING UI */}
            <div className="auth-right">
                <div className="auth-page">
                    <h1 className="auth-title">Welcome back</h1>

                    <div className="auth-card">
                        <form onSubmit={handleLogin}>
                            <label><h3>Email</h3></label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <label><h3>Password</h3></label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <span className="forgot"><h3>Forgot password?</h3></span>

                            <button type="submit" className="primary-btn">
                                Sign In
                            </button>
                        </form>

                        <div className="divider"><h3>Or continue with</h3></div>

                        <button className="google-btn" onClick={handleGoogleLogin}>
                            Continue with Google
                        </button>
                    </div>

                    <p className="bottom-text">
                        <h3>
                            Don’t have an account?{" "}
                            <span onClick={() => navigate("/signup")}>Sign up</span>
                        </h3>
                    </p>
                </div>
            </div>

        </div>
    )
}