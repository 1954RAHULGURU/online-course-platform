import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./home.css";

const Home = () => {
  const [showHome, setShowHome] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  const courselist = ["Html", "css", "Javascript", "Reactjs", "SQL"];

  const ChooseCourse = (val) => {
    let existing = selectedList.find((item) => item === val);
    if (existing) {
      alert("u couldnt choose the same");
    } else setSelectedList([...selectedList, val]);
  };
  return (
    <div class="container-fluid">
        <div className="headerdiv">
            <h1>ONLINE COURSE PLATFORM <i class="bi bi-book"></i></h1>
            <button class="btn btn-outline-secondary btn1" onClick={() => setShowHome(false)}>
          Home
        </button>
        <button class="btn btn-outline-secondary btn2" onClick={() => setShowHome(true)}>
          Profiles
        </button>
        <div className="logout">
            <button class="btn btn-outline-secondary"><Link to="/">Logout</Link></button>
      </div>
        </div>


      <div className="listCard">
        {showHome ? (
          <div>
            {selectedList.map((data) => (
              <div className="courseList">
                <button className="list-btn">{data}</button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {courselist.map((data) => (
              <div className="courseList">
                <button className="list-btn" onClick={() => ChooseCourse(data)}>
                  {data}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <div className="logout">
        <Link to="/">Logout</Link>
      </div> */}
    </div>
  );
};

export default Home;
