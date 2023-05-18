import * as React from 'react';
import down from '../assets/down-arrow.png'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
import '../styles/ButtonS.css'

function ButtonS() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(!open);
    }

    const[rotateIcon, setRotateIcon]  = React.useState(false);
    const handleRotate = () => {
      setRotateIcon(!rotateIcon);
    }
    const rotate = rotateIcon ? "rotate(180deg)" : "rotate(0)"

    const [countA, setCountA] = React.useState(0);
    const handlePlusA = () => {
      if (countT<9){
        setCountA(countA + 1);
      }
    }
    const handleMoinsA = () => {
      if ((countA-1)>=0){
        setCountA(countA - 1);
      }
    }

    const [countY, setCountY] = React.useState(0);
    const handlePlusY = () => {
      if (countT<9){
        setCountY(countY + 1);
      }
    }
    const handleMoinsY = () => {
      if ((countY-1) >= 0){
        setCountY(countY - 1);
      }
      
    }

    const [countS, setCountS] = React.useState(0);
    const handlePlusS = () => {
      if (countT<9){
        setCountS(countS + 1);
      }
    }
    const handleMoinsS = () => {
      if ((countS-1) >= 0){
        setCountS(countS - 1);
      }
    }

    const countT = countA + countY + countS;


    return (
      <div className="dropdowns">
        <button className="btns" onClick ={() => {handleOpen(); handleRotate()}}>
          <div className='text'>{countT} Passengers</div>
          <div className='imgs'>
            <img src={down} style={{ transform: rotate, transition: "all 0.2s linear" }} className='icon-up-down' ></img>
          </div>
        </button>
        {open ? (
            <div className="under">
              <ul className="list">
                <li>
                  <div className='row'>
                    <div className='left'>
                      <span className='cat'>Adults</span>
                      <span className='age'>26+ years </span>
                    </div>
                    <div className='add'>
                      {/*<button onClick ={() => setChoice("One-way")} className=" center"  >moins</button>*/}
                      <button id="moinsA" onClick= {handleMoinsA} className="btn-item">
                        <img src={minus} alt="icon moins" />
                      </button>
                      <div className='conter'>{countA}</div>
                      <button id="plusA" onClick= {handlePlusA} className="btn-item">
                        <img src={plus} alt="icon plus" />
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='row'>
                    <div className='left'>
                      <span className='cat'>Youth</span>
                      <span className='age'>0-25 years </span>
                    </div>
                    <div className='add'>
                      {/*<button onClick ={() => setChoice("One-way")} className=" center"  >moins</button>*/}
                      <button id="moinsY" onClick= {handleMoinsY} className="btn-item">
                        <img src={minus} alt="icon moins" />
                      </button>
                      <div className='conter'>{countY}</div>
                      <button id="plusY" onClick= {handlePlusY} className="btn-item">
                        <img src={plus} alt="icon plus"/>
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='row'>
                    <div className='left'>
                      <span className='cat'>Senior</span>
                      <span className='age'>58+ years </span>
                    </div>
                    <div className='add'>
                      {/*<button onClick ={() => setChoice("One-way")} className=" center"  >moins</button>*/}
                      <button id="moinsS" onClick= {handleMoinsS} className="btn-item">
                        <img src={minus} alt="icon moins" />
                      </button>
                      <div className='conter'>{countS}</div>
                      <button id="plusS" onClick= {handlePlusS} className="btn-item">
                        <img src={plus} alt="icon plus"/>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        ) : null}
      </div>
    );
  };

export default ButtonS