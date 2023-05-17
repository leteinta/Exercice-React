import {useForm} from 'react-hook-form'
import '../styles/Form.css'
import ButtonF from './ButtonF'
import ButtonS from './ButtonS'

function Form(){

    const {handleSubmit, register} = useForm()

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
                <div className='marg'>
                    <input type='text' autoComplete='none' placeholder='From : City, State' {... register('departure',{required : true})} />
                </div>
                <div className='marg'>
                    <input  type='text' autoComplete='none' placeholder='To: City, State' {... register('arrival',{required : true})} />
                </div>
                <div className='from-date marg'>
                    <input type='date' autoComplete='none'{... register('for')}/>
                </div>
                <div className='from-date marg'>
                    <input type='date' autoComplete='none' {... register('to')}/>
                </div>
                <button type='submit' className='form-btn marg'>Search</button>
            </form>
        </div>
    );
}

export default Form