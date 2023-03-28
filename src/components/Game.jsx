import React, { useEffect, useState } from 'react'
import { isSentenceMatched } from '../wordHelper';
import Letters from './Letters';
import Word from './Word'

export default function Game({ sentence, onOver }) {
    const [usedLetters, setUsedLetters] = useState([]);
    const [triesLeft, setTriesLeft] = useState(5);

    const won = isSentenceMatched(sentence, usedLetters);
    const isOver = triesLeft === 0 || won;

    useEffect(() => {
        setUsedLetters([]);
        setTriesLeft(5);
    }, [sentence])

    useEffect(() => {
        if (!isOver) {
            return;
        }
        onOver({
            sentence,
            usedLetters,
            won
        })
    }, [isOver])

    return (
        <div>
            {
                won && (
                    <div className='m-3 text-center'>
                        Congratulations, you won
                    </div>
                )
            }
            {
                triesLeft === 0 && (
                    <div className='m-3 text-center'>
                        You lost
                    </div>
                )
            }
            {
                !isOver && (
                    <div className='m-3 text-center'>
                        Tries left: {triesLeft}
                    </div>
                )
            }
            <div className='flexRow mt-5'>
                {
                    sentence.split(' ').map(word => {
                        return (
                            <Word word={word} usedLetters={usedLetters} />
                        )
                    })
                }
                <Letters
                    usedLetters={usedLetters}
                    isOver={isOver}
                    onLetterClick={letter => {
                        setUsedLetters(prev => [...prev, letter]);
                        if (sentence.split('').find(l => l.toLocaleLowerCase() === letter) === undefined) {
                            setTriesLeft(prev => prev - 1);
                        }
                    }}
                />
            </div>
        </div>
    )
}