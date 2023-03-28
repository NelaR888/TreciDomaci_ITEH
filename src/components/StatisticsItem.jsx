import React from 'react'

export default function StatisticsItem({ name, value }) {
    return (
        <div className='d-flex justify-content-between align-items-center m-2 border rounded p-4'>
            <div className='font-weight-bold'>
                {name}
            </div>
            <div>
                {value}
            </div>
        </div>
    )
}
