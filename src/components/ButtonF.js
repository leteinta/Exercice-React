import * as React from 'react';
import down from '../assets/down-arrow.png';
import '../styles/ButtonF.css';

function ButtonF() {
    const [open, setOpen] = React.useState(false);

    const[rotateIcon, setRotateIcon]  = React.useState(false);

    const handleRotate = () => {
      setRotateIcon(!rotateIcon);
    }

    const rotate = rotateIcon ? "rotate(180deg)" : "rotate(0)"

    const handleOpen = () => {
      setOpen(!open);
    }

    const handleList = () => {    
          setOpen ( false ); 
    }
    
    const [choice, setChoice] = React.useState("One-way");

    
    

    return (
      <div className="dropdownf">
        <button className="btnf" onClick ={() => {handleOpen(); handleRotate()}}>
          <div className='text'>
            {choice}
          </div>
          <div className='imgf'>
            <img src={down} style={{ transform: rotate, transition: "all 0.2s linear" }} className='icon-up-down' ></img>
          </div>
        </button>
        {open ? (
            <div className="underf">
              <ul className="listf">
                <li>
                  <div >
                    <span></span>
                    <button  onClick ={() => {setChoice("One-way"); handleList()}} className='list-itemf' >One-way</button>
                  </div>
                </li>
                <li>
                  <button onClick ={() =>  {setChoice("Road trip"); handleList()}} className="list-itemf" >Road trip</button>
                </li>
              </ul>
            </div>
        ) : null}
      </div>
    );
  };
export default ButtonF