import { useState } from "react";
import Card from "./components/Card";
import data from "./assets/data.json";
import profilePic from "./assets/image-jeremy.png";
import more from "./assets/icon-ellipsis.svg";
import "./App.css";

function App() {
  const [timeFrame, setTimeFrame] = useState('weekly');
  const timeFrames = ['daily', 'weekly', 'monthly']
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
          {
            timeFrames.map(time =>
              <li
                key={time}
                id={time}
                onClick={({ target: { id } }) => setTimeFrame(id)}
                style={{ color: (timeFrame === time) ? 'white' : null }}>{time[0].toUpperCase() + time.slice(1)}</li>
            )
          }
        </ul>
      </header>
      {data.map(({ title, timeframes }) => (
        <Card moreLogo={more}
          key={title}
          title={title}
          timeframes={timeframes[timeFrame]}
          timeframe={timeFrame} />
      ))}
    </main>
  );
}

export default App;
