'use client'

import { useReducer, useRef } from 'react'

const Reducer = () => {
  const initialState = [{ todo: 'Buang sampah' }, { todo: 'Cari supplier' }]

  const inputRef = useRef('')

  const reducer = (
    state: { todo: string }[],
    action: { type: 'ADD'; payload: 'string' } | { type: 'DELETE'; id: number }
  ) => {
    // const { type, payload, id } = action /*causing error*/

    switch (action.type) {
      case 'ADD': {
        const newState = [...state, { todo: action.payload }]
        return newState
      }
      case 'DELETE': {
        const newState = [...state]
        newState.splice(action.id, 1)
        return newState
      }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='mt-10 text-center max-w-md mx-auto p-4 rounded-lg bg-slate-100 shadow-lg'>
      <div className='space-x-2'>
        <input
          className='border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400'
          type='text'
          ref={inputRef}
        />
        <button
          className='px-4 py-2 bg-indigo-600 rounded-lg text-slate-200 hover:bg-indigo-700 font-semibold'
          onClick={() => {
            dispatch({ type: 'ADD', payload: inputRef.current.value })
            inputRef.current.value = ''
          }}
        >
          Add
        </button>
      </div>
      <div className='mt-5 text-left'>
        {state.map((todo, id) => (
          <div className='flex justify-between'>
            <h4 className='text-2xl' key={id}>{`${todo.todo}`}</h4>
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reducer
