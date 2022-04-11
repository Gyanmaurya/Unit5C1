import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

   const [counter,setScore]=useState(76);
   const [wicket,setWicket]=useState(2);
   const [ball,setBall]=useState(50);
   function addscore(value){
     if(counter>=100){ return}
    return setScore(counter+value)
   }
function addwicket(value){
  if(counter>=100){ return}
  if(wicket>=12){ return}
  return setWicket(wicket+value)
}
function addball(value){
  if(counter>=100){ return}
  return setBall(ball+value)
}


  return (
    <div className="App">
      <h3>{`${counter}`>=100 ? "India Won The Match":"Match Running"}</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
            {
               counter
              
            }
          </h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
            {wicket
              
            }
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
            {
              `${ball}`>0 ? `${(ball/6).toFixed(1)}`:"Not"
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score :
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>addscore(1)} className="addScore1">Add 1</button>
        <button onClick={()=>addscore(4)} className="addScore4">Add 4</button>
        <button onClick={()=>addscore(6)} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket :
        {/* Increase the count of wicket */}
        <button onClick={()=>addwicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball :
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>addball(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
