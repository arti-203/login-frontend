import React, { useState } from "react";
import LoginForm from "./components/LoginForm"; // Import LoginForm
import UserProfile from "./components/UserProfile"; // Import UserProfile

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <UserProfile user={user} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </div>
  );
};

export default App;
