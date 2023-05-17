import * as React from 'react';
import '../styles/ButtonF.css'

function ButtonF() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    }

    const handleList = () => {    
          setOpen ( false ); 
    }
    
    const [choice, setChoice] = React.useState("One-way");

    
    

    return (
      <div className="dropdownf">
        <button className="btnf" onClick = {handleOpen}>{choice}</button>
        {open ? (
            <div className="underf">
              <ul className="listf">
                <li>
                  <button  onClick ={() => {setChoice("One-way"); handleList()}} className="list-itemf" >One-way</button>
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