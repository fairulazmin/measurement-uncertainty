'use client'

import { useReducer } from 'react'
import MuHead from './muHead'
import MuRow from './muRow'
import { Row, Reducer } from '@/typedef'

const reducer = (state: Row[], action: Reducer) => {
  switch (action.type) {
    case 'SOURCES': {
      const { id, payload } = action
      const newState = [...state]
      const newRow = { ...newState[id], sources: payload }
      newState.splice(id, 1, newRow)
      return newState
    }
    case 'VALUE': {
      const { id, payload } = action
      const newState = [...state]
      const newRow = { ...newState[action.id], value: payload }
      newState.splice(id, 1, newRow)
      return newState
    }
    case 'DISTRIBUTION': {
      const { id, payload } = action
      const newState = [...state]
      const divisor =
        payload === 'Rectangular'
          ? '√3'
          : payload === 'Triangular'
          ? '√6'
          : payload === 'U-shaped'
          ? '√2'
          : payload
      const newRow = {
        ...newState[id],
        distribution: payload,
        divisor,
      }
      newState.splice(action.id, 1, newRow)
      return newState
    }
    case 'DIVISOR': {
      const { id, payload } = action
      const newState = [...state]
      const distribution =
        payload === '√3'
          ? 'Rectangular'
          : payload === '√6'
          ? 'Triangular'
          : payload === '√2'
          ? 'U-shaped'
          : payload
      const newRow = {
        ...newState[id],
        distribution,
        divisor: payload,
      }
      newState.splice(action.id, 1, newRow)
      return newState
    }
    case 'DELETE': {
      const newState = [...state]
      newState.splice(action.id, 1)
      return newState
    }
    case 'ADD': {
      const newState = [
        ...state,
        {
          sources: '',
          value: '',
          distribution: '',
          divisor: '',
          ui: '',
          vi: '',
          percent: '',
          index: '',
        },
      ]
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
      divisor: 2,
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
    <>
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

      <button
        className='space-x-2 flex items-center bg-green-600 px-4 py-2 font-semibold text-white mt-4 rounded-lg hover:bg-green-400 active:bg-green-700'
        onClick={() => dispatch({ type: 'ADD' })}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
        <span>Source</span>
      </button>
    </>
  )
}

export default MuTable
