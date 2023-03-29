import { Row, Reducer } from '@/typedef'

const MuRow = ({
  id,
  row,
  dispatch,
}: {
  id: number
  row: Row
  dispatch: Reducer
}) => {
  const { sources, value, distribution, divisor, ci, ui, vi, percent, index } =
    row

  return (
    <tr className='text-gray-700 hover:bg-violet-50'>
      <td className='p-2'>
        <input
          className='w-full focus:ring-violet-300 focus:ring-2 rounded-lg border-none'
          type='text'
          value={sources}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ id, type: 'SOURCES', payload: e.target.value })
          }
        />
      </td>
      <td className='p-2'>
        <input
          className='text-center w-full focus:ring-violet-300 focus:ring-2 rounded-lg border-none'
          type='number'
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ id, type: 'VALUE', payload: e.target.value })
          }
        />
      </td>
      <td className='text-center p-2'>
        <select
          value={distribution}
          className='text-center border-none rounded-lg'
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch({ id, type: 'DISTRIBUTION', payload: e.target.value })
          }
        >
          <option value='Normal'>Normal</option>
          <option value='T-distribution'>T-distribution</option>
          <option value='Rectangular'>Rectangular</option>
          <option value='Triangular'>Triangular</option>
          <option value='U-shaped'>U-shaped</option>
        </select>
      </td>
      <td className='text-center p-2'>
        <div className='flex rounded-lg overflow-hidden focus-within:ring-violet-300 focus-within:ring-2'>
          <input
            className='text-center border-none focus:border-none w-16'
            type='text'
            value={divisor}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ id, type: 'DIVISOR', payload: e.target.value })
            }
          />
          <select
            value=''
            className='border-none w-5'
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch({ id, type: 'DIVISOR', payload: e.target.value })
            }
          >
            <option></option>
            <option value='√2'>√2</option>
            <option value='√3'>√3</option>
            <option value='√6'>√6</option>
          </select>
        </div>
      </td>
      <td className='text-center p-2'>{ci}</td>
      <td className='text-center p-2'>{ui}</td>
      <td className='text-center p-2'>{vi}</td>
      <td className='text-center p-2'>{percent}</td>
      <td className='text-center p-2'>{index}</td>
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
  )
}

export default MuRow
