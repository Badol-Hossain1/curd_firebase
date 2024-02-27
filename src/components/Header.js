import { useState } from "react";
import { Link } from "react-router-dom";

const Hearder = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="flex justify-around mt-10">
      <p>Contact app</p>
      <div className="flex  gap-3">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "bg-blue-500" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddContact" ? "bg-blue-500" : ""}`}
            onClick={() => setActiveTab("AddContact")}
          >
            Add contact
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activeTab === "About" ? "bg-blue-500" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Hearder;
