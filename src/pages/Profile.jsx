import { useState, useContext } from "react"
import "../styles/profile.css"
import { UserContext } from "../context/UserContext"

export default function Profile() {
    const { user, setUser } = useContext(UserContext)

    const [editing, setEditing] = useState(false)

    const [locations, setLocations] = useState([
        { label: "Home", address: "123 Indiranagar, 100 Feet Road, Chennai - 600020" },
        { label: "Office", address: "456 Business Park, Andheri East, Velachery" },
        { label: "Airport", address: "Madras International Meenambakkam Airport" },
    ])

    /* ================= LOCATION FORM STATE ================= */
    const [showForm, setShowForm] = useState(false)
    const [editIndex, setEditIndex] = useState(null)
    const [formData, setFormData] = useState({ label: "", address: "" })

    /* ================= PROFILE IMAGE ================= */
    function handleImageChange(e) {
        const file = e.target.files[0]
        if (file) {
            setUser({ ...user, image: URL.createObjectURL(file) })
        }
    }

    /* ================= PROFILE DETAILS ================= */
    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    /* ================= LOCATIONS ================= */
    function openAddForm() {
        setFormData({ label: "", address: "" })
        setEditIndex(null)
        setShowForm(true)
    }

    function openEditForm(index) {
        setFormData(locations[index])
        setEditIndex(index)
        setShowForm(true)
    }

    function saveLocation() {
        if (!formData.label || !formData.address) return

        if (editIndex !== null) {
            const copy = [...locations]
            copy[editIndex] = formData
            setLocations(copy)
        } else {
            setLocations([...locations, formData])
        }

        setShowForm(false)
        setEditIndex(null)
    }

    function removeLocation(index) {
        setLocations(locations.filter((_, i) => i !== index))
    }

    return (
        <div className="profile-page">

            {/* ================= TOP SECTION ================= */}
            <div className="profile-top">

                {/* PROFILE CARD */}
                <div className="profile-card">
                    <div className="profile-header">
                        <div className="profile-img-wrapper">
                            <img src={user.image} alt="profile" />
                            <label className="camera-btn">
                                📷
                                <input type="file" hidden onChange={handleImageChange} />
                            </label>
                        </div>

                        <div>
                            <h2>{user.name}</h2>
                            <p className="member">Member since January 2024</p>

                            <div className="stats">
                                <div><strong>3</strong><span>Total Trips</span></div>
                                <div><strong>₹580</strong><span>Total Spent</span></div>
                                <div><strong>4.3</strong><span>Average Rating</span></div>
                            </div>
                        </div>
                    </div>

                    {/* DETAILS */}
                    <div className="profile-details">
                        {["name", "email", "phone", "address"].map((field) => (
                            <div key={field}>
                                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                {editing ? (
                                    <input name={field} value={user[field]} onChange={handleChange} />
                                ) : (
                                    <p>{user[field]}</p>
                                )}
                            </div>
                        ))}

                        <button className="edit-btn" onClick={() => setEditing(!editing)}>
                            {editing ? "Save" : "Edit"}
                        </button>
                    </div>
                </div>

                {/* ================= SAVED LOCATIONS ================= */}
                <div className="location-card">
                    <div className="location-header">
                        <h3>Saved Locations</h3>
                        <button onClick={openAddForm}>Add Location</button>
                    </div>

                    {showForm && (
                        <div className="location-form">
                            <input
                                placeholder="Label (Home / Office)"
                                value={formData.label}
                                onChange={(e) =>
                                    setFormData({ ...formData, label: e.target.value })
                                }
                            />
                            <input
                                placeholder="Address"
                                value={formData.address}
                                onChange={(e) =>
                                    setFormData({ ...formData, address: e.target.value })
                                }
                            />
                            <div className="form-actions">
                                <button onClick={saveLocation}>
                                    {editIndex !== null ? "Update" : "Add"}
                                </button>
                                <button className="secondary" onClick={() => setShowForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}

                    {locations.map((loc, i) => (
                        <div className="location-item" key={i}>
                            <span className="tag">{loc.label}</span>
                            <p>{loc.address}</p>

                            <div className="location-actions">
                                <button onClick={() => openEditForm(i)}>Edit</button>
                                <button className="danger" onClick={() => removeLocation(i)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= REVIEWS ================= */}
            <div className="reviews">
                <h3>My reviews</h3>

                <div className="review-card">
                    <strong>BK-0109</strong>
                    <p>“Excellent service! Very professional and punctual driver.”</p>
                    <small>Driver: Ravi Kumar</small>
                </div>

                <div className="review-card">
                    <strong>BK-003</strong>
                    <p>“Good experience, car was clean and comfortable.”</p>
                    <small>Driver: Amit</small>
                </div>
            </div>

        </div>
    )
}
