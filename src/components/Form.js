import {useForm} from 'react-hook-form';
import { useEffect, useState} from "react";
import axios from 'axios';
import '../styles/Form.css';
import ButtonF from './ButtonF';
import ButtonS from './ButtonS';
function Form(){

    const {handleSubmit, register, formState : {errors}} = useForm();
    

    function onSubmit (data) {
        console.log(data)
    }

    // pour utilisation de l'API 1
    const [departure, setDeparture] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() =>{
        const loaddeparture = async ()=> {
            const response = await axios.get('https://api.comparatrip.eu/cities/autocomplete/?q=par');
            setDeparture(response.data)
        }
        loaddeparture()
    },[])
    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = departure.filter(departure => {
                const regex = new RegExp(`${text}`, "gi");
                return departure.local_name.match(regex)
            })
        }
        console.log('matches', matches)
        setSuggestions(matches)
        setText(text)
    }

    return(
        <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='buttons'>    
                    <div className='marg'>
                        <ButtonF />
                    </div>
                    <div className='marg'>
                        <ButtonS />
                    </div>
                </div>
                <div className='rowpc'>
                    <div className='rowsT'>
                        <div className='marg'>
                            <input className='input t' type='text' onChange={e=> onChangeHandler(e.target.value)} value={text} autoComplete='none' placeholder='From : City, State'  />
                            {suggestions && suggestions.map((suggestions, i) => 
                            <div key={i} ><div>{suggestions.local_name}</div></div>
                            )}
                            {errors.departure && (<div className='tooltip'><span className='tooltiptext'>please fill in departure</span></div>)}
                        </div>
                        <div className='marg'>
                            <input  className='input t' type='text' autoComplete='none' placeholder='To: City, State'  {... register('arrival')} />
                        </div>
                    </div>
                    <div className='rowD'>
                        <div className='form-date marg'>
                            <input className='input d l' type='date' autoComplete='none'   {... register('for')}/>
                        </div>
                        <div className='form-date marg'>
                            <input className='input d r' type='date' autoComplete='none'   {... register('to')}/>
                        </div>
                    </div>
                    <div className='btn'>
                    <button type='submit' className='form-btn marg'>Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form