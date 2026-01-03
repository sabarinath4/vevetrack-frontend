import "../styles/home.css"
import { useState } from "react"
import BookingModal from "../components/Booking/BookingModal"

export default function Home() {
    const [showBooking, setShowBooking] = useState(false)
    return (
        <div className="bg-[#f5f7fb]">

            {/* ================= UPPER SECTION ================= */}

            {/* HERO SECTION */}
            <section className="home-hero">
                <div className="home-container hero-grid">

                    {/* LEFT */}
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Book Your Ride Instantly with <br />
                            <span>VeveTrack</span>
                        </h1>

                        <p className="hero-subtitle">
                            Fast, safe and reliable cab booking at your fingertips.
                        </p>

                        <div className="hero-actions">
                            <button
                                className="btn-primary"
                                onClick={() => setShowBooking(true)}
                            >
                                Book Now
                            </button>

                            <button className="btn-outline">Learn More</button>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="hero-image">
                        <img src="/hero-car.png" alt="Ride illustration" />
                    </div>

                </div>
            </section>


            {/* QUICK BOOKING */}
            < section className="quick-booking-wrapper" >
                <div className="home-container">
                    <div className="quick-booking-card">

                        <div className="quick-booking-header">
                            <div className="quick-booking-title">Quick Booking</div>
                            <button className="quick-booking-btn">Estimate now</button>
                        </div>

                        <div className="booking-grid">
                            <div>
                                <div className="booking-label">Pickup Location</div>
                                <input className="booking-input" />
                            </div>

                            <div>
                                <div className="booking-label">Date & Time</div>
                                <input type="datetime-local" className="booking-input" />
                            </div>

                            <div>
                                <div className="booking-label">Drop Location</div>
                                <input className="booking-input" />
                            </div>

                            <div>
                                <div className="booking-label">Car Type</div>
                                <select className="booking-input">
                                    <option>Non-AC</option>
                                    <option>AC</option>
                                    <option>SUV</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            {/* ================= MIDDLE SECTION ================= */}

            < section className="middle-section" >
                <div className="middle-container">

                    <div className="feature-card card-orange">
                        <h4>Real-Time GPS Tracking</h4>
                        <p>
                            Stay connected with live location updates. Know exactly
                            where your driver is and get accurate arrival times.
                        </p>

                        <div className="card-stats">
                            <div>
                                <strong>99.8%</strong>
                                <span>Tracking Accuracy</span>
                            </div>
                            <div>
                                <strong>24/7</strong>
                                <span>Live Updates</span>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card card-green">
                        <h4>Verified Drivers</h4>
                        <p>
                            Every driver undergoes thorough background checks
                            and professional training.
                        </p>
                    </div>

                    <div className="feature-card card-blue">
                        <h4>Transparent Pricing</h4>
                        <p>
                            No surprises. Get upfront fare estimates with
                            zero hidden charges.
                        </p>

                        <span className="card-badge">Fixed prices</span>
                    </div>

                    <div className="feature-card card-purple">
                        <h4>Premium Experience Guaranteed</h4>
                        <p>
                            Join hundreds of satisfied customers who trust
                            VeveTrack for daily commutes and special occasions.
                        </p>

                        <div className="card-rating">
                            ⭐ <strong>4.2</strong>
                            <span>Average rating</span>
                        </div>
                    </div>

                </div>
            </section >

            {/* ================= LOWER SECTION ================= */}

            {/* SIMPLE PROCESS */}
            <section className="process-section">
                <div className="process-container">

                    <span className="process-badge">Simple Process</span>

                    <h2 className="process-title">
                        Book Your Ride in 3 Easy Steps
                        <div className="process-steps">
                            <div className="process-step active">1</div>
                            <div className="process-line"></div>
                            <div className="process-step">2</div>
                            <div className="process-line"></div>
                            <div className="process-step">3</div>
                        </div>

                    </h2>

                    <p className="process-subtitle">
                        From booking to destination, we've made the entire journey seamless and hassle-free
                    </p>

                    <div className="process-grid">
                        <div className="process-card">
                            <h4>Enter Trip Details</h4>
                            <p>
                                Tell us your pickup location, destination and preferred date.
                            </p>
                            <ul>
                                <li>Live location detection</li>
                                <li>Saved addresses</li>
                                <li>Schedule in advance</li>
                            </ul>
                        </div>

                        <div className="process-card">
                            <h4>Choose Your Vehicle</h4>
                            <p>
                                Select from our fleet of well-maintained vehicles.
                            </p>
                            <ul>
                                <li>Multiple car types</li>
                                <li>Real-time availability</li>
                                <li>Transparent pricing</li>
                            </ul>
                        </div>

                        <div className="process-card">
                            <h4>Confirm & Track</h4>
                            <p>
                                Get instant confirmation with driver details.
                            </p>
                            <ul>
                                <li>Driver info & rating</li>
                                <li>Live GPS tracking</li>
                                <li>In-app messaging</li>
                            </ul>
                        </div>
                    </div>

                    <button
                        className="process-cta"
                        onClick={() => setShowBooking(true)}
                    >
                        Start Booking Now
                    </button>


                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="testimonial-section">
                <h2>What Our Customers Say</h2>
                <p className="testimonial-rating">⭐ 4.8 / 5 from 2,500+ reviews</p>

                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <strong>Rajesh Kumar</strong>
                        <span>Regular Customer</span>
                        <p>
                            VeveTrack has been my go-to taxi service for months. Always on time,
                            clean cars, and professional drivers!
                        </p>
                        <div className="rating">★ 4.3</div>
                    </div>

                    <div className="testimonial-card">
                        <strong>Hari</strong>
                        <span>Business Traveler</span>
                        <p>
                            Excellent service! The app is easy to use and customer support is always helpful.
                        </p>
                        <div className="rating">★ 4.3</div>
                    </div>


                    <div className="testimonial-card">
                        <strong>Gopal</strong>
                        <span>Business Traveler</span>
                        <p>
                            The app is easy to use and customer support is always helpful.
                        </p>
                        <div className="rating">★ 4.3</div>
                    </div>

                    <div className="testimonial-card">
                        <strong>Vinoth</strong>
                        <span>Business Traveler</span>
                        <p>
                            Customer support is always helpful.
                        </p>
                        <div className="rating">★ 4.3</div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="home-footer">
                <div className="footer-grid">

                    <div>
                        <h4>VeveTrack</h4>
                        <p>
                            Your trusted taxi and car rental booking platform.
                            Reliable, fast and transparent service 24/7.
                        </p>
                    </div>

                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>Pricing</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Support</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contact Info</h4>
                        <ul>
                            <li>📍 Mumbai, Maharashtra</li>
                            <li>📞 1800-555-8736</li>
                            <li>✉ support@vevetrack.com</li>
                        </ul>
                    </div>

                </div>
            </footer>

            {
                showBooking && (
                    <BookingModal onClose={() => setShowBooking(false)} />
                )
            }


        </div >
    )
}
