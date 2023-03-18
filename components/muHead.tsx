import ToolTips from './tooltips'

const MuHead = () => {
  return (
    <thead className='h-14 bg-gray-50 border-b-2 border-gray-200'>
      <tr className='text-lg font-semibold text-center tracking-wide italic'>
        <th>Sources of uncertainty</th>
        <th className='w-28'>± Value</th>
        <th className='w-20'>Probability distribution</th>
        <th className='w-20'>Divisor</th>
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
  )
}

export default MuHead
