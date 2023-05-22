import * as React from 'react';
import Select from 'react-select';
import down from '../assets/down-arrow.png';
import minus from '../assets/minus.png';
import plus from '../assets/plus.png';
import '../styles/ButtonS.css';

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

    const[addYouth, setAddYouth] = React.useState([""])
    
    const optionsY = [
      { value: 0, label: '0 years' },
      { value: 1, label: '1 years' },
      { value: 2, label: '2 years' },
      { value: 3, label: '3 years' },
      { value: 4, label: '4 years' },
      { value: 5, label: '5 years' },
      { value: 6, label: '6 years' },
      { value: 7, label: '7 years' },
      { value: 8, label: '8 years' },
      { value: 9, label: '9 years' },
      { value: 10, label: '10 years' },
      { value: 11, label: '11 years' },
      { value: 12, label: '12 years' },
      { value: 13, label: '13 years' },
      { value: 14, label: '14 years' },
      { value: 15, label: '15 years' },
      { value: 16, label: '16 years' },
      { value: 17, label: '17 years' },
      { value: 18, label: '18 years' },
      { value: 19, label: '19 years' },
      { value: 20, label: '20 years' },
      { value: 21, label: '21 years' },
      { value: 22, label: '22 years' },
      { value: 23, label: '23 years' },
      { value: 24, label: '24 years' },
      { value: 25, label: '25 years' },
    ]
    
    const[addSenior, setAddSenior] = React.useState([""])

    const optionsS = [
      { value: 58, label: '58 years' },
      { value: 59, label: '59 years' },
      { value: 60, label: '60 years' },
      { value: 61, label: '61 years' },
      { value: 62, label: '62 years' },
      { value: 63, label: '63 years' },
      { value: 64, label: '64 years' },
      { value: 65, label: '65 years' },
      { value: 66, label: '66 years' },
      { value: 67, label: '67 years' },
      { value: 68, label: '68 years' },
      { value: 69, label: '69 years' },
      { value: 70, label: '70 years' },
      { value: 71, label: '71 years' },
      { value: 72, label: '72 years' },
      { value: 73, label: '73 years' },
      { value: 74, label: '74 years' },
      { value: 75, label: '75 years' },
      { value: 77, label: '77 years' },
      { value: 78, label: '78 years' },
      { value: 79, label: '79 years' },
      { value: 80, label: '80 years' },
      { value: 81, label: '81 years' },
      { value: 82, label: '82 years' },
      { value: 83, label: '83 years' },
      { value: 84, label: '84 years' },
    ]

    const [isSearchable] = React.useState(false)

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
        setAddYouth(addYouth.concat(<li><div className='row'><div className='left'><div className='souscat'>Youth {countY + 1}</div></div><div className='add'><Select className='selectY' placeholder="Age"  options={optionsY}  isSearchable={isSearchable} /></div></div> </li>,));
        }
      }
    const handleMoinsY = () => {
      if ((countY-1) >= 0){
        setCountY(countY - 1);
        addYouth.pop();
        setAddYouth(addYouth);
      }
    }
    
    const [countS, setCountS] = React.useState(0);
    const handlePlusS = () => {
      if (countT<9){
        setCountS(countS + 1);
        setAddSenior(addSenior.concat(<li><div className='row'><div className='left'><div className='souscat'>Senior {countS + 1}</div></div><div className='add'><Select className='selectY' placeholder="Age"  options={optionsS}  isSearchable={isSearchable} /></div></div> </li>,));
      }
    }
    const handleMoinsS = () => {
      if ((countS-1) >= 0){
        setCountS(countS - 1);
        addSenior.pop();
        setAddSenior(addSenior);
      }
    }
    
    const countT = countA + countY + countS;
    
    
    return (
      <div className="dropdowns" >
        <button className="btns" onClick ={() => {handleOpen(); handleRotate()}}> {/*  onBlur={()=> { setTimeout(() => {handleOpen(false);handleRotate(false)}, 100)}} ferme à chaque click donc si je rajoute un passager, le boutton se ferme*/}
          <div className='text'>{countT} Passengers</div>
          <div className='imgs'>
            <img src={down} style={{ transform: rotate, transition: "all 0.2s linear" }} className='icon-up-down' alt='icon up or down'></img>
          </div>
        </button>
        {open ? (
            <div className="under">
              <ul className="list">
                <li>
                  <div className='row'>
                    <div className='left'>
                      <span className='cat'>Adult</span>
                      <span className='age'>26+ years </span>
                    </div>
                    <div className='add'>
                      <button id="moinsA" onClick= {handleMoinsA} className="btn-item">
                        <img src={minus} alt="icon moins" />
                      </button>
                      <div className='counter'>{countA}</div>
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
                      <button id="moinsY" onClick= {handleMoinsY} className="btn-item">
                        <img src={minus} alt="icon moins" />
                      </button>
                      <div className='counter'>{countY}</div>
                      <button id="plusY" onClick= {handlePlusY} className="btn-item">
                        <img src={plus} alt="icon plus"/>
                      </button>
                    </div>
                  </div>
                  <div >{addYouth}</div>
                </li>
                <li>
                  <div className='row S'>
                    <div className='left'>
                      <span className='cat'>Senior</span>
                      <span className='age'>58+ years </span>
                    </div>
                    <div className='add'>
                      <button id="moinsS" onClick= {handleMoinsS} className="btn-item">
                        <img src={minus} alt="icon moins" />
                      </button>
                      <div className='counter'>{countS}</div>
                      <button id="plusS" onClick= {handlePlusS} className="btn-item">
                        <img src={plus} alt="icon plus"/>
                      </button>
                    </div>
                  </div>
                  <div >{addSenior}</div>
                </li>
              </ul>
            </div>
        ) : null}
      </div>
    );
  };

export default ButtonS