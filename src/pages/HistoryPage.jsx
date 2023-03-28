import React from 'react'
export default function HistoryPage({ games }) {
    return (
        <div className='container mt-3'>
            <h3 className='m-2 text-center'>
                Game history
            </h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sentence</th>
                        <th>Letters used</th>
                        <th>Outcome</th>
                    </tr>
                </thead>
                <tbody>
                    {games.slice().reverse().map(game => {
                        return (
                            <tr key={game.sentence}>
                                <td>{game.sentence}</td>
                                <td>{game.usedLetters.length}</td>
                                <td>{game.won ? 'Won' : 'Lost'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
