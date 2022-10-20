import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { COLUMN } from '../constants'

export default function TableHeadCell({
  id,
  index,
  children,
  onDrop,
  ...props
}) {
  const ref = React.useRef(null)
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: COLUMN,
      item: () => {
        return { id, index }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [index]
  )

  const [{}, drop] = useDrop(
    () => ({
      accept: COLUMN,
      drop: (item, monitor) =>
        onDrop({
          dragIndex: item.index,
          hoverIndex: index,
          item: item,
          dropResult: monitor.getDropResult(),
        }),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [index]
  )

  return (
    <th
      ref={drag(drop(ref))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      {...props}
    >
      {children}
    </th>
  )
}
