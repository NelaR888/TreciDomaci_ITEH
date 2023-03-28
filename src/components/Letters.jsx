import React from 'react'
import { alphabet } from '../wordHelper'
import LetterButton from './LetterButton'

export default function Letters({ usedLetters, onLetterClick, isOver }) {
    return (
        <div className='pt-5'>
            {
                alphabet.map(letter => {
                    return (
                        <LetterButton
                            letter={letter}
                            onClick={() => onLetterClick(letter)}
                            disabled={isOver || usedLetters.includes(letter)}
                        />
                    )
                })
            }
        </div>
    )
}
