import {useForm} from 'react-hook-form'
import Select from 'react-select'
import '../styles/Form.css'

function Form(){
    const {handleSubmit, register} = useForm()
    const options = [
    { value: 'one', label: 'One-way' },
    { value: 'long', label: 'Round trip' }
    ]

    function onSubmit (data) {
        console.log(data)
    }
    return(
        <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Select options={options} {... register('time')}/>
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