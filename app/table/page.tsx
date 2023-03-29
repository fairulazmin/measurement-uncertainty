'use client'

import { useReducer } from 'react'
import MuHead from '@/components/muHead'
// import MuRow from './muRow'
// import { Row, Reducer } from '@/typedef'

type Uncertainty = {
  sources: string
  value: string
  distribution:
    | string
    | 'Normal'
    | 'T-distribution'
    | 'Rectangular'
    | 'Triangular'
    | 'U-shaped'
  divisor: string
  ci: string
  ui: string
  vi: string
  percent: string
  index: string
}

type ActionInput = {
  type: 'SOURCES' | 'VALUE'
  payload: string
  id: number
}

type ActionDelete = {
  type: 'DELETE'
  id: number
}

type ActionAdd = {
  type: 'ADD'
}

type Action = ActionInput | ActionDelete | ActionAdd

const reducer = (state: Uncertainty[], action: Action) => {
  switch (action.type) {
    case 'SOURCES': {
      const { id, payload } = action
      const newState = [...state]
      const newRow = { ...newState[id], sources: payload }
      newState.splice(id, 1, newRow)
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
          ci: '',
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
      value: '50',
      distribution: 'Normal',
      divisor: '2',
      ci: '1',
      ui: '15',
      vi: '9',
      percent: '80',
      index: '1',
    },
    {
      sources: 'Drift since last calibration',
      value: '15',
      distribution: 'Triangular',
      divisor: '78',
      ci: '1',
      ui: '6.1',
      vi: '9',
      percent: '20',
      index: '2',
    },
  ]

  const [state, dispatch] = useReducer(reducer, initialArg)

  return (
    <div className='max-w-6xl mx-auto mt-10'>
      <div className='border overflow-auto rounded-xl shadow-lg select-none'>
        <table className='w-full table-auto'>
          <MuHead />
          <tbody>
            {state.map((row, id: number) => (
              <tr key={id} className='text-gray-700 hover:bg-violet-50'>
                <td className='p-2'>
                  <input
                    className='w-full focus:ring-violet-300 focus:ring-2 rounded-lg border-none'
                    type='text'
                    value={row.sources}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      dispatch({ id, type: 'SOURCES', payload: e.target.value })
                    }
                  />
                </td>
                <td className='p-2'>
                  <input
                    className='text-center w-full focus:ring-violet-300 focus:ring-2 rounded-lg border-none'
                    type='number'
                    value={row.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      dispatch({ id, type: 'VALUE', payload: e.target.value })
                    }
                  />
                </td>
                <td className='text-center p-2'>{row.distribution}</td>
                <td className='text-center p-2'>{row.divisor}</td>
                <td className='text-center p-2'>{row.ci}</td>
                <td className='text-center p-2'>{row.ui}</td>
                <td className='text-center p-2'>{row.vi}</td>
                <td className='text-center p-2'>{row.percent}</td>
                <td className='text-center p-2'>{row.index}</td>
                <td>
                  <button
                    className='p-2 rounded hover:bg-red-500 hover:text-white text-red-500'
                    onClick={() => dispatch({ id, type: 'DELETE' })}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                      />
                    </svg>
                  </button>
                </td>
              </tr>
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
    </div>
  )
}

export default MuTable
