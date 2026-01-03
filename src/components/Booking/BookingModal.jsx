import { useState } from "react"
import { createPortal } from "react-dom"

export default function BookingModal({ onClose }) {
    const [step, setStep] = useState(1)
    const [carType, setCarType] = useState(null)

    return createPortal(
        <div className="booking-overlay">
            <div className="booking-modal">

                {/* CLOSE */}
                <button className="booking-close" onClick={onClose}>✕</button>

                {/* STEPS HEADER */}
                <div className="booking-steps booking-steps-wrapper">

                    {["Location & Time", "Car Type", "Details", "Fare"].map(
                        (label, index) => {
                            const stepIndex = index + 1
                            return (
                                <div key={index} className="step">
                                    <div className={`step-circle ${step >= stepIndex ? "active" : ""}`}>
                                        {stepIndex}
                                    </div>
                                    <span className={step >= stepIndex ? "active" : ""}>
                                        {label}
                                    </span>
                                </div>
                            )
                        }
                    )}

                    {/* PROGRESS LINE */}
                    <div className="step-progress">
                        <div
                            className="step-progress-fill"
                            style={{ width: `${(step - 1) * 25}%` }}
                        />
                    </div>
                </div>

                {/* ================= STEP 1 ================= */}
                {step === 1 && (
                    <>
                        <div className="booking-form">
                            <div>
                                <h3>Enter Pickup & Drop Location</h3>

                                <label>Pick up Location</label>
                                <input placeholder="Enter pickup location" />

                                <label>Drop Location</label>
                                <input placeholder="Enter drop location" />
                            </div>

                            <div>
                                <h3>Enter Date & Time</h3>

                                <label>Date</label>
                                <input type="date" />

                                <label>Time</label>
                                <input type="time" />
                            </div>
                        </div>

                        <div className="booking-footer">
                            <button className="booking-next" onClick={() => setStep(2)}>
                                Next
                            </button>
                        </div>
                    </>
                )}

                {/* ================= STEP 2 ================= */}
                {step === 2 && (
                    <>
                        <h3 className="car-title">Select Car Type</h3>

                        <div className="car-grid">
                            <div
                                className={`car-card ${carType === "AC" ? "selected" : ""}`}
                                onClick={() => setCarType("AC")}
                            >
                                <h4>AC</h4>
                                <p>Comfortable air-conditioned ride</p>
                                <strong>₹15/km + ₹50 base</strong>
                            </div>

                            <div
                                className={`car-card ${carType === "NON_AC" ? "selected" : ""}`}
                                onClick={() => setCarType("NON_AC")}
                            >
                                <h4>Non-AC</h4>
                                <p>Budget-friendly option</p>
                                <strong>₹10/km + ₹30 base</strong>
                            </div>
                        </div>

                        <div className="booking-footer between">
                            <button className="booking-back" onClick={() => setStep(1)}>
                                Back
                            </button>

                            <button
                                className="booking-next"
                                disabled={!carType}
                                onClick={() => setStep(3)}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
                {/* ================= STEP 3 ================= */}
                {step === 3 && (
                    <>
                        <h3 className="details-title">Enter Contact Details</h3>

                        <div className="details-form">
                            <div>
                                <label>Name</label>
                                <input placeholder="Enter your name" />
                            </div>

                            <div>
                                <label>Email address</label>
                                <input type="email" placeholder="Enter email address" />
                            </div>

                            <div>
                                <label>Phone number</label>
                                <input type="tel" placeholder="Enter phone number" />
                            </div>
                        </div>

                        <div className="booking-footer between">
                            <button className="booking-back" onClick={() => setStep(2)}>
                                Back
                            </button>

                            <button
                                className="booking-next"
                                onClick={() => setStep(4)}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}

                {/* ================= STEP 4 ================= */}
                {step === 4 && (
                    <>
                        <h3 className="fare-title">Fare Estimate</h3>

                        <div className="fare-box">
                            <div className="fare-row">
                                <span>Route</span>
                                <strong>Indiranagar, 100 Feet Road → Airport</strong>
                            </div>

                            <div className="fare-row">
                                <span>Distance</span>
                                <strong>24 km (approx.)</strong>
                            </div>

                            <div className="fare-row">
                                <span>Car Type</span>
                                <strong>{carType === "AC" ? "AC" : "Non-AC"}</strong>
                            </div>

                            <div className="fare-row">
                                <span>Date & Time</span>
                                <strong>22-09-2025 8:10 am</strong>
                            </div>

                            <div className="fare-row highlight">
                                <span>Estimated Fare</span>
                                <strong>₹450</strong>
                            </div>
                        </div>

                        <div className="booking-footer between">
                            <button className="booking-back" onClick={() => setStep(3)}>
                                Back
                            </button>

                            <button
                                className="booking-next"
                                onClick={() => setStep(5)}
                            >
                                Confirm
                            </button>
                        </div>

                        <p className="fare-note">
                            * Final fare may vary based on actual distance and waiting time
                        </p>
                    </>
                )}

                {/* ================= STEP 5 ================= */}
                {step === 5 && (
                    <>
                        <div className="confirm-box">
                            <h3>Booking Confirmed</h3>
                            <p className="confirm-sub">
                                Your ride is confirmed! Our driver will reach you soon.
                            </p>

                            <div className="confirm-grid">
                                <div className="confirm-left">
                                    <strong>Booking ID</strong>
                                    <p>BK-01119</p>
                                    <span>📩 SMS Sent</span>
                                    <small>Confirmation sent to your phone</small>
                                </div>

                                <div className="confirm-right">
                                    <div><span>Route</span><strong>Indiranagar → Airport</strong></div>
                                    <div><span>Distance</span><strong>24 km</strong></div>
                                    <div><span>Car Type</span><strong>{carType === "AC" ? "AC" : "Non-AC"}</strong></div>
                                    <div><span>Date & Time</span><strong>22-09-2025 8:10 am</strong></div>
                                    <div className="highlight"><span>Estimated Fare</span><strong>₹450</strong></div>
                                </div>
                            </div>

                            <div className="confirm-actions">
                                <button className="booking-back" onClick={onClose}>
                                    Book Another Ride
                                </button>

                                <button className="booking-next" onClick={onClose}>
                                    Go to My Bookings
                                </button>
                            </div>

                            <p className="confirm-help">
                                Need help? Contact our 24/7 support at 1800-XXX-XXXX
                            </p>
                        </div>
                    </>
                )}



            </div>
        </div>,
        document.body
    )
}
