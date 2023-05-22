import {useForm} from 'react-hook-form';
import { useEffect, useState} from "react";
import axios from 'axios';
import '../styles/Form.css';
import ButtonF from './ButtonF';
import ButtonS from './ButtonS';
import position from '../assets/map.png';
import depart from '../assets/cercle.png';

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
        const loadDeparture = async ()=> {
            const response = await axios.get('https://api.comparatrip.eu/cities/autocomplete/?q=par');
            //console.log(response.data);
            setDeparture(response.data);
        }
        loadDeparture()
    },[])
    const onSuggestHandler = (text) => {
        setText(text);
        setSuggestions([]);
    }

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = departure.filter(departure => {
                const regex = new RegExp(`${text}`, "gi");
                return departure.local_name.match(regex)
            })
        }
        //console.log(matches);
        setSuggestions(matches);
        setText(text);
    }

    // pour API 2 et 3
    const [arrival,setArrival]= useState([]);
    const [textArrival, setTextArrival] = useState('');
    const [suggestionsArrival, setSuggestionsArrival] = useState([])
    useEffect(() =>{
        const loadArrival = async ()=> {
            const rep = await axios.get('https://api.comparatrip.eu/cities/popular/5');
            //console.log(rep.data);
            setArrival(rep.data);
        }
        loadArrival()
    },[])

    const [arrivalParis,setArrivalParis]= useState([]);
    useEffect(() =>{
        const loadArrivalParis = async ()=> {
            const rep1 = await axios.get('https://api.comparatrip.eu/cities/popular/from/paris/5');
            //console.log(rep1.data);
            setArrivalParis(rep1.data);
        }
        loadArrivalParis()
    },[])

    const onSuggestArrivalHandler = (textArrival) => {
        console.log(textArrival);
        setTextArrival(textArrival);
        setSuggestionsArrival([])
    }
    const onClickArrivalHandler = () => {
        let matches1 = []
        if (textArrival.length === 0 && text !== 'paris') {
            matches1 = arrival.filter(arrival => {
                return arrival.local_name
            })
        }
        if (text === 'paris') {
                matches1 = arrivalParis.filter(arrivalParis => {
                const regex1 = new RegExp(`${textArrival}`, "gi");
                return arrivalParis.local_name.match(regex1)
            })
        }
        else if (text === 'Paris') {
            matches1 = arrivalParis.filter(arrivalParis => {
            const regex1 = new RegExp(`${textArrival}`, "gi");
            return arrivalParis.local_name.match(regex1)
        })
        }
        //console.log('matches1', matches1)
        setSuggestionsArrival(matches1);
        setTextArrival(textArrival);
    }

    const onChangeArrivalHandler = (textArrival) => {
        let matches1 = []
        if (textArrival.length > 0) {
            matches1 = arrival.filter(arrival => {
                const regex = new RegExp(`${textArrival}`, "gi");
                return arrival.local_name.match(regex)
            })
        }
        //console.log(matches);
        setSuggestionsArrival(matches1);
        setTextArrival(textArrival);
    }

    return(
        <div className='form'>
            <div className='buttons'>    
                <div className='marg'>
                    <ButtonF />
                </div>
                <div className='marg'>
                    <ButtonS />
                </div>
            </div>
            <form >
                <div className='rowpc'>
                    <div className='rowT'>
                        <div className='marg'>
                            <div className='col'>
                            <div className='rowposition'><div className='cercle'><img src={depart} alt="icon depart" /></div>
                                <input className='input t' type='text' onChange={e=> onChangeHandler(e.target.value)} value={text} onBlur={()=> { setTimeout(() => {setSuggestions([])}, 100);}} placeholder='From : City, State' required/>
                                <div className='inside'>
                                    {suggestions && suggestions.map((suggestions, i) => 
                                    <div key={i} onClick={()=> onSuggestHandler(suggestions.local_name)}><div className='ligne'>{suggestions.local_name}</div></div>
                                    )}
                                </div>
                                {errors.departure && (<div className='tooltip'><span className='tooltiptext'>please fill in departure</span></div>)}
                            </div>
                            </div>
                        </div>
                        <div className='marg'>
                            <div className='col'>
                                <div className='rowposition'><img src={position} alt="icon position" />
                                <input  className='input to' type='text' placeholder='To: City, State'  onClick={e=> onClickArrivalHandler(e.target.value)} value={textArrival} onChange={e=> onChangeArrivalHandler(e.target.value)} onBlur={()=> { setTimeout(() => {setSuggestionsArrival([])}, 100);}}/>
                                </div>
                                <div className='inside arrival'>
                                    {suggestionsArrival && suggestionsArrival.map((suggestionsArrival, i) => 
                                    <div key={i} onClick={()=> onSuggestArrivalHandler(suggestionsArrival.local_name)}><div className='ligne'>{suggestionsArrival.local_name}</div></div>
                                    )}
                                </div>
                            </div>
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
                    <button type='submit' className='form-btn marg' onSubmit={handleSubmit(onSubmit)}>Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form