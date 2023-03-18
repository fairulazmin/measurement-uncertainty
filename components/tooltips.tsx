const ToolTips = ({
  dataTip,
  children,
}: {
  dataTip: string
  children: React.ReactNode
}) => {
  return (
    <div
      className='
      relative 
      before:content-[attr(data-tip)] 
      before:absolute
      before:px-3 before:py-2 
      before:left-1/2 before:-top-3 
      before:w-max before:max-w-xs 
      before:-translate-x-1/2 before:-translate-y-full 
      before:bg-violet-300 before:text-black
      before:rounded-md before:opacity-0 
      before:transition-all

      after:absolute 
      after:left-1/2 after:-top-3 
      after:h-0 after:w-0 
      after:-translate-x-1/2 after:border-8 
      after:border-t-violet-300 
      after:border-l-transparent 
      after:border-b-transparent 
      after:border-r-transparent 
      after:opacity-0 
      after:transition-all 

      hover:before:opacity-100 hover:after:opacity-100
      overflow-visible
      '
      data-tip={dataTip}
    >
      {children}
    </div>
  )
}
export default ToolTips
