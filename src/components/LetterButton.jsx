
import React from 'react'

export default function LetterButton({ letter, onClick, disabled }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className='btn btn-secondary'
        >{letter}</button>
    )
}
