import { useState } from 'react';

const InputRadio = (props) => {
    const [inputRadio, setInputRadio] = useState(props.value);

    return (
        <div className='input-radio'>
            <input 
                type='radio'
                value={inputRadio}
                name={props.name}
                id={props.label}
                className='input-radio__input'
                checked={props.checked}
                onChange={(event) => {
                    setInputRadio(event.target.value);
                    props.changeRadioInput(event.target.value);
                }}
            />
            <label 
                className='input-radio__label'
                htmlFor={props.label}
            >
                {props.label}
            </label>
        </div>
    )
}

export default InputRadio;