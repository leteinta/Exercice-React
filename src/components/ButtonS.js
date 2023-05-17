import * as React from 'react';
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
import '../styles/ButtonS.css'

function ButtonS() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    }

    //const [choice, setChoice] = React.useState("One-way");
    

    return (
      <div className="dropdowns">
        <button className="btns" onClick = {handleOpen}>choice entre crochet</button>
        {open ? (
            <div className="under">
              <ul className="list">
                <li>
                  <div className='row'>
                    <span className='left'>Adults</span>
                    <div className='add'>
                      {/*<button onClick ={() => setChoice("One-way")} className=" center"  >moins</button>*/}
                      <button className="btn-item center"><img src={minus} alt="icon moins" /></button>
                      <button className="btn-item right"><img src={plus} alt="icon plus" /></button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='row'>
                    <span className='left'>Youth</span>
                    <div className='add'>
                      {/*<button onClick ={() => setChoice("One-way")} className=" center"  >moins</button>*/}
                      <button className="btn-item center"><img src={minus} alt="moins" /></button>
                      <button className="btn-item right"><img src={plus} alt="icon plus"/></button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='row'>
                    <span className='left'>Seniors</span>
                    <div className='add'>
                      {/*<button onClick ={() => setChoice("One-way")} className=" center"  >moins</button>*/}
                      <button className="btn-item center"><img src={minus} alt="moins" /></button>
                      <button className="btn-item right"><img src={plus} alt="icon plus"/></button>
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