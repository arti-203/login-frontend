import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <h2>Welcome, {user.name}!</h2>
      {/* Display the user's image */}
      <img
        src={user.image} // Replace with your image URL
        alt={user.name}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />
      {/* Display education as a checkbox */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={true} // Education is always checked
            readOnly // Make the checkbox read-only
            style={{ marginRight: "10px" }}
          />
          Education: {user.education}
        </label>
      </div>
      {/* Display gender */}
      <p>Gender: {user.gender}</p>
    </div>
  );
};

export default UserProfile;