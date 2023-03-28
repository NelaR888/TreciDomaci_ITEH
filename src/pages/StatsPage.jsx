import React from 'react'
import StatisticsItem from '../components/StatisticsItem'

export default function StatsPage({ games }) {
    return (
        <div className='container mt-3'>
            <h3 className='m-2 text-center'>Game statistics</h3>
            <StatisticsItem name='Games played' value={games.length} />
            <StatisticsItem name='Games won' value={games.filter(g => g.won).length} />
            <StatisticsItem name='Games won(%)' value={games.length === 0 ? 0 : (100 * games.filter(g => g.won).length / games.length).toFixed(2)} />
            <StatisticsItem name='Games lost' value={games.filter(g => !g.won).length} />
            <StatisticsItem name='Games lost(%)' value={games.length === 0 ? 0 : (100 * games.filter(g => !g.won).length / games.length).toFixed(2)} />
            <StatisticsItem
                name='Average letters used'
                value={
                    games.length === 0 ? 0 : (games.flatMap(g => g.usedLetters).length / games.length).toFixed(2)
                } />
            <StatisticsItem
                name='Average sentence size'
                value={
                    games.length === 0 ? 0 : (games.reduce((acc, game) => {
                        return acc + game.sentence.length
                    }, 0) / games.length).toFixed(2)
                } />
        </div>
    )
}
