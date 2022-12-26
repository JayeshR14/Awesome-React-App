import React from 'react';
import ReactDOM  from 'react-dom';
import * as draw from './generatePair';

const Show = () => {
  const newdraw = () => {
    ReactDOM.render(<>
     <p className="blink">Drawing...</p>
    </>,document.querySelector('.drawTicket'))
    setTimeout(()=>{
      window.location.reload();
    },5000)
      
  }
  return (<>
  <div className="slotMachine">
   <p className="state">{draw.state}</p>
  <div className="drawTicket">
    <div>{draw.drawPair[0]}</div>
    <div>{draw.drawPair[1]}</div>
    <div>{draw.drawPair[2]}</div>
  </div>
  <div className="slotbtn">
  <button id="btn" onClick={newdraw}>Draw</button>
  </div>
  </div>
  </>);
}
export default Show;