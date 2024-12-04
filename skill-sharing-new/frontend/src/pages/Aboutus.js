import React, { useState } from "react";
import "./Aboutus.css";

const Aboutus = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);

    // Reset form data after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      notes: "",
    });

    setIsSubmitted(true);

    // Reset the feedback message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Mayur Patel",
      role: "Co-founder",
      organization: "Skillport",
      email: "patel.mayurki@northeastern.edu",
      imageUrl: "/images/founder1.jpg",
    },
    {
      id: 2,
      name: "Aditya Hasija",
      role: "Co-founder",
      organization: "Skillport",
      email: "hasija.a@northeastern.edu",
      imageUrl: "/images/founder2.jpg",
    },
    {
      id: 3,
      name: "Parva Maheta",
      role: "Co-founder",
      organization: "Skillport",
      email: "mehta.parv@northeastern.edu",
      imageUrl: "/images/founder3.jpg",
    },
    {
      id: 4,
      name: "Chirag Patil",
      role: "Co-founder",
      organization: "Skillport",
      email: "patil.chirag@northeastern.edu",
      imageUrl: "/images/founder4.jpg",
    },
    {
      id: 5,
      name: "Sujal Dusane",
      role: "Co-founder",
      organization: "Skillport",
      email: "dusane.s@northeastern.edu",
      imageUrl: "/images/founder5.jpg",
    },
  ];

  return (
    <div className="aboutus-container">
      {/* Meet Our Team Section */}
      <h1 className="page-title">Meet Our Team</h1>
      <div className="team-row">
        {teamMembers.map((person) => (
          <div key={person.id} className="team-card">
            <div className="team-image">
              <img src={person.imageUrl} alt={person.name} className="profile-image" />
            </div>
            <div className="team-details">
              <h3 className="team-name">{person.name}</h3>
              <p className="role">{person.role} at {person.organization}</p>
              <p className="description">{person.description}</p>
              <a href={`mailto:${person.email}`} className="email-button">Contact</a>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Us Form */}
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Message</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Your message"
              required
            />
          </div>

          <button type="submit" className="submit-button">Send</button>
        </form>

        {isSubmitted && <p className="submission-feedback">Thank you for contacting us!</p>}
      </div>
    </div>
  );
};

export default Aboutus;