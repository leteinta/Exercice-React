import {useForm} from 'react-hook-form'
import {useState} from 'react'
import '../styles/Form.css'
import ButtonF from './ButtonF'
import ButtonS from './ButtonS'

function Form(){

    const {handleSubmit, register, formState : {errors}} = useForm()
    const [isSearchable] = useState(false)

    function onSubmit (data) {
        console.log(data)
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
                            <input className='input t' type='text' autoComplete='none' placeholder='From : City, State' {... register('departure',{required : true})} />
                            {errors.departure && (<div className='tooltip'><span className='tooltiptext'>please fill in departure</span></div>)}
                        </div>
                        <div className='marg'>
                            <input  className='input t' type='text' autoComplete='none' placeholder='To: City, State' {... register('arrival',{required : true})} />
                        </div>
                    </div>
                    <div className='rowD'>
                        <div className='form-date marg'>
                            <input className='input d l' type='date' autoComplete='none'  isSearchable={isSearchable} {... register('for')}/>
                        </div>
                        <div className='form-date marg'>
                            <input className='input d r' type='date' autoComplete='none'  isSearchable={isSearchable} {... register('to')}/>
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