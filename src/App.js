import profilePic from "./assets/image-jeremy.png";
import more from "./assets/icon-ellipsis.svg";
import "./App.css";

function App() {
  return (
    <main className="App">
      <header>
        <div>
          <img src={profilePic} alt="profile-pic" className="header-picture" />
          <h1 className="report">
            Report for <br /> <span>Jeremy Robson</span>
          </h1>
        </div>
        <ul className="interval">
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </header>
      <div className="content-container">
        <div className="content-body">
          <div className="content-heading">
            <h2>Work</h2>
            <img src={more} alt="more" className="more" />
          </div>
          <div className="content-details">
            <h3>32hrs</h3>
            <p>Last week- 36hrs</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
