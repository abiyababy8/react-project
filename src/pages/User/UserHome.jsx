import React from "react";
import { Link } from "react-router-dom";

function UserHome() {
  const user = JSON.parse(localStorage.getItem("user")); // assuming you store user info in localStorage

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-3">Welcome back, {user?.name || "Pet Lover"}! 🐾</h2>
      <p className="lead">
        We're glad to see you again! Here's what you can do today:
      </p>

      <div className="row justify-content-center mt-4">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Your Dashboard</h5>
              <p className="card-text">Manage your profile, adoption requests, and reports.</p>
              <Link to="/profile" className="btn btn-primary">Go to Dashboard</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
            <h5 className="card-title">Available Pets for Adoption</h5>
              <p className="card-text">Browse pets that are looking for a loving home.</p>
              <Link to="/adopt-pets" className="btn btn-success">View Pets</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Lost & Found</h5>
              <p className="card-text">View reports of lost pets or report a found one.</p>
              <Link to="/lost-pets" className="btn btn-warning">See Lost Pets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
