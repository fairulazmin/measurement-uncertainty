'use client'

import { useReducer } from 'react'
import MuRow from './muRow'
import { Row } from '@/typedef'

const reducer = (state: Row[], action: any) => {
  switch (action.type) {
    case 'sources': {
      const newState = [...state]
      const newRow = { ...newState[action.id], sources: action.sources }
      newState.splice(action.id, 1, newRow)
      return newState
    }
    case 'value': {
      const newState = [...state]
      const newRow = { ...newState[action.id], value: action.value }
      newState.splice(action.id, 1, newRow)
      return newState
    }
    case 'distribution': {
      const newState = [...state]
      const newRow = {
        ...newState[action.id],
        distribution: action.distribution,
      }
      newState.splice(action.id, 1, newRow)
      return newState
    }
    default:
      return state
  }
}

const MuTable = () => {
  const initialArg = [
    {
      sources: 'Calibration of the standard gauge block',
      value: 30,
      distribution: 'Normal',
      divisor: '2',
      ci: 1,
      ui: 15,
      vi: '∞',
      percent: 80,
      index: 1,
    },
    {
      sources: 'Drift since last calibration',
      value: 15,
      distribution: 'Triangular',
      divisor: '√6',
      ci: 1,
      ui: 6.1,
      vi: '∞',
      percent: 20,
      index: 2,
    },
  ]

  const [state, dispatch] = useReducer(reducer, initialArg)

  return (
    <div className='border overflow-auto rounded-xl shadow-lg'>
      <table className='w-full table-auto'>
        <thead className='h-14 bg-gray-50 border-b-2 border-gray-200'>
          <tr className='text-lg font-semibold text-center tracking-wide italic'>
            <th>Sources of uncertainty</th>
            <th className='w-28'>± Value</th>
            <th className='w-20'>Probability distribution</th>
            <th>Divisor</th>
            <th className='w-20'>
              c<sub>i</sub>
            </th>
            <th className='w-20'>
              u<sub>i</sub>
            </th>
            <th className='w-20'>
              v<sub>i</sub> or v<sub>eff</sub>
            </th>
            <th className='w-20'>%</th>
            <th className='w-20'>Index</th>
          </tr>
        </thead>
        <tbody>
          {state.map((row: Row, id: number) => (
            <MuRow key={id} row={row} dispatch={dispatch} id={id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MuTable
