import React from 'react'
import cn from 'classnames'

// interface IOption {
//   value: string | number
//   disabled?: boolean
// }
interface ISelectBoxProps {
  // options: IOption[]
  options: string[] | number[]
  fullWidth?: boolean
  className?: string
}

const SelectBox: React.FC<ISelectBoxProps> = ({
  options,
  className,
  fullWidth = 'true',
  ...props
}) => {
  return (
    <select
      className={cn(
        'px-4 py-2 relative bg-gray-100 border border-secondary-300 outline-none focus:ring-1 focus:ring-primary focus:shadow-select focus:shadow-primary focus:bg-white rounded-sm',
        fullWidth && 'w-full',
        className && className
      )}
      {...props}
    >
      {options.map((item, i) => (
        <option key={i}>{item}</option>
        // <option key={i} disabled={item.disabled || false}>
        //   {item.value}
        // </option>
      ))}
    </select>
  )
}

export default SelectBox

// TODO: Add icons for the select box
// TODO: Add pattern fot components
