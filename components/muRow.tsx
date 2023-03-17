import { Row } from '@/typedef'

const MuRow = ({
  id,
  row,
  dispatch,
}: {
  id: number
  row: Row
  dispatch: any
}) => {
  const { sources, value, distribution, divisor, ci, ui, vi, percent, index } =
    row

  return (
    <tr className='text-gray-700 hover:bg-violet-50'>
      <td className='p-3'>
        <input
          className=' w-full focus:ring-violet-300 focus:ring-2 rounded-lg border-none'
          type='text'
          value={sources}
          onChange={(e) =>
            dispatch({ id, type: 'sources', sources: e.target.value })
          }
        />
      </td>
      <td className='p-3'>
        <input
          className='text-center w-full focus:ring-violet-300 focus:ring-2 rounded-lg border-none'
          type='number'
          value={value}
          onChange={(e) =>
            dispatch({ id, type: 'value', value: e.target.value })
          }
        />
      </td>
      <td className='text-center p-3'>
        <select
          value={distribution}
          className='text-center border-none rounded-lg'
          onChange={(e) =>
            dispatch({ id, type: 'distribution', distribution: e.target.value })
          }
        >
          <option value='Normal'>Normal</option>
          <option value='T-distribution'>T-distribution</option>
          <option value='Rectangular'>Rectangular</option>
          <option value='Triangular'>Triangular</option>
          <option value='U-shaped'>U-shaped</option>
        </select>
      </td>
      <td className='text-center p-3'>{divisor}</td>
      <td className='text-center p-3'>{ci}</td>
      <td className='text-center p-3'>{ui}</td>
      <td className='text-center p-3'>{vi}</td>
      <td className='text-center p-3'>{percent}</td>
      <td className='text-center p-3'>{index}</td>
    </tr>
  )
}

export default MuRow
