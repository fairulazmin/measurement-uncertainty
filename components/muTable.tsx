'use client'

import { useReducer } from 'react'
import MuHead from './muHead'
import MuRow from './muRow'
import { Row, Reducer } from '@/typedef'

const reducer = (state: Row[], action: Reducer) => {
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
      const { id, distribution } = action
      const divisor =
        distribution === 'Rectangular'
          ? '√3'
          : distribution === 'Triangular'
          ? '√6'
          : distribution === 'U-shaped'
          ? '√2'
          : action.divisor
      const newRow = {
        ...newState[id],
        distribution,
        divisor,
      }
      newState.splice(action.id, 1, newRow)
      return newState
    }
    case 'divisor': {
      const newState = [...state]
      const { id, divisor } = action
      const distribution =
        divisor === '√3'
          ? 'Rectangular'
          : divisor === '√6'
          ? 'Triangular'
          : divisor === '√2'
          ? 'U-shaped'
          : action.distribution
      const newRow = {
        ...newState[id],
        distribution,
        divisor,
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
    <div className='border overflow-auto rounded-xl shadow-lg select-none'>
      <table className='w-full table-auto'>
        <MuHead />
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
