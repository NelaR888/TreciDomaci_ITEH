import React, { useState } from 'react'
import Game from '../components/Game';
import { TOPICS, useWord } from '../hooks/useWord';

export default function GamePage({ onOver }) {
    const [selectedTopic, setSelectedTopic] = useState('');
    const sentence = useWord(selectedTopic);
    return (
        <div className='container mt-3'>
            <div className='my-2'>
                <select className='form-control' value={selectedTopic} onChange={e => setSelectedTopic(e.currentTarget.value)}>
                    <option value="">Select topic</option>
                    <option value={TOPICS.CHUCK}>Chuck Norris</option>
                    <option value={TOPICS.USELESSFACTS}>Useless facts</option>
                    <option value={TOPICS.TECH}>Tech terms</option>
                </select>
            </div>
            {
                sentence && (
                    <Game sentence={sentence} onOver={onOver} />
                )
            }
        </div>
    )
}
