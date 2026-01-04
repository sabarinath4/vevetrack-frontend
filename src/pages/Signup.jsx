import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import "../styles/login.css"

export default function Signup() {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignup(e) {
        e.preventDefault()

        setUser({
            name,
            email,
            image: "https://i.pravatar.cc/150?img=45",
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

            {/* RIGHT – EXISTING UI */}
            <div className="auth-right">
                <div className="auth-page">
                    <p className="auth-title">Create your account</p>

                    <div className="auth-card">
                        <form onSubmit={handleSignup}>
                            <label><h3>Full Name</h3></label>
                            <input
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

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

                            <button type="submit" className="primary-btn">
                                Create Account
                            </button>
                        </form>

                        <div className="divider">Or continue with</div>

                        <button className="google-btn">Continue with Google</button>
                    </div>

                    <p className="bottom-text">
                        <h3>
                            Already have an account?{" "}
                            <span onClick={() => navigate("/login")}>Sign in</span>
                        </h3>
                    </p>
                </div>
            </div>

        </div>
    )

}
