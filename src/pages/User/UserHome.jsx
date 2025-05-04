import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./userhome.css"; // Import CSS for popup animation

function UserHome() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [showMissingPopup, setShowMissingPopup] = useState(false);
  const [showAdoptPopup, setShowAdoptPopup] = useState(false);

  const userPets = [
    {
      id: 1,
      name: "Bella",
      type: "Cat",
      age: "2 years",
      health: "Healthy",
    },
    {
      id: 2,
      name: "Max",
      type: "Dog",
      age: "4 years",
      health: "Under medication for arthritis",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMissingPopup(true);
      setShowAdoptPopup(true);

      const hideTimeout = setTimeout(() => {
        setShowMissingPopup(false);
        setShowAdoptPopup(false);
      }, 10000); // show for 4 seconds

      return () => clearTimeout(hideTimeout);
    }, 20000); // repeat every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-5 text-center position-relative">
      <h2 className="mb-3">Welcome back, {user?.name || "Pet Lover"}! 🐾</h2>
      <p className="lead">We're glad to see you again! Here's what you can do today:</p>

      {/* User Pets Section */}
      <div className="my-5">
        <h4 className="mb-4">🐕‍🦺 Your Pets</h4>
        <div className="row justify-content-center">
          {userPets.map((pet) => (
            <div className="col-md-4 mb-3" key={pet.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="card-text">
                    <strong>Type:</strong> {pet.type}<br />
                    <strong>Age:</strong> {pet.age}<br />
                    <strong>Health:</strong> {pet.health}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {/* 🔔 Missing Pet Popup */}
      <div
        className={`popup ${showMissingPopup ? "show" : ""}`}
        style={{
          position: "fixed",
          bottom: "100px",
          left: "20px",
          zIndex: 999,
          border: "2px solid red",
          borderRadius: "10px",
          background: "#fff",
          padding: "10px",
          width: "200px",
        }}
      >
        <h6>🚨 MISSING!</h6>
        <img
          src="http://localhost:5173/src/assets/tabby-cat.jpg"
          alt="Missing Pet"
          onClick={() => navigate("/lost-pets")}
          style={{ cursor: "pointer", width: "100%", borderRadius: "8px" }}
        />
      </div>

      {/* 🐶 Adoptable Pet Popup */}
      <div
        className={`popup ${showAdoptPopup ? "show" : ""}`}
        style={{
          position: "fixed",
          bottom: "100px",
          right: "20px",
          zIndex: 999,
          border: "2px solid green",
          borderRadius: "10px",
          background: "#fff",
          padding: "10px",
          width: "200px",
        }}
      >
        <h6>🐶 ADOPT!</h6>
        <img
          src="http://localhost:5173/src/assets/golden-retriever.jpg"
          alt="Adoptable Pet"
          onClick={() => navigate("/adopt-pets")}
          style={{ cursor: "pointer", width: "100%", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}

export default UserHome;
