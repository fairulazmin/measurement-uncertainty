const MuRow = ({ row }) => {
  const { sources, value, distribution, divisor, ci, ui, vi, percent, index } =
    row

  return (
    <tr className='text-gray-700 hover:bg-violet-50'>
      <td className='p-3'>
        <input
          className=' w-full focus:ring-violet-300 focus:ring-2 rounded-lg border-none'
          type='text'
          value={sources}
        />
      </td>
      <td className='p-3'>
        <input
          className='text-center w-full focus:ring-violet-300 focus:ring-2 rounded-lg border-none'
          type='number'
          value={value}
        />
      </td>
      <td className='text-center p-3'>{distribution}</td>
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
