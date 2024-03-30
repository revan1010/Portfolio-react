// App.js
import React, { useState } from "react";

import Sidebar2 from "./components/sidebar/Sidebar2";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <Sidebar2 isOpen={isOpen} toggle={toggleSidebar} />
      <div className="content">
        <button onClick={toggleSidebar}>Open Sidebar</button>
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Test;
