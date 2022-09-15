import Card from "./components/Card";
import data from "./assets/data.json";
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
      {data.map((each) => (
        <Card moreLogo={more} key={each.title} each={each} />
      ))}
    </main>
  );
}

export default App;
