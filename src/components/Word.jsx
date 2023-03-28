import React from 'react'
import { alphabet } from '../wordHelper'

export default function Word({ word, usedLetters }) {
    return (
        <div style={{
            paddingRight: '15px'
        }}>
            {
                word.split('').map(letter => {
                    return (
                        <span style={{
                            letterSpacing: "3px"
                        }}>{(usedLetters.includes(letter.toLocaleLowerCase()) ||
                            !alphabet.includes(letter.toLocaleLowerCase())) ? letter : '_'}</span>
                    )
                })
            }
        </div>
    )
}
