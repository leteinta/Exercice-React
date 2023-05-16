import * as React from 'react';
import '../styles/ButtonF.css'

function ButtonF() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    }

    const [choice, setChoice] = React.useState("One-way");

    const handleList = () => {    
      setOpen ( false ); 
    }
    

    return (
      <div className="dropdown">
        <button className="btn" onClick = {handleOpen}>{choice}</button>
        {open ? (
            <div className="under">
              <ul className="list">
                <li>
                  <button  onClick ={() => {setChoice("One-way"); handleList()}} className="list-item" >One-way</button>
                </li>
                <li>
                  <button onClick ={() =>  {setChoice("Road trip"); handleList()}} className="list-item" >Road trip</button>
                </li>
              </ul>
            </div>
        ) : null}
      </div>
    );
  };
export default ButtonF