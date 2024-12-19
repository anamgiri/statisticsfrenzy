'use client'

import React from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import 'react-day-picker/dist/style.css'

export default function DatePicker() {
  const [selected, setSelected] = React.useState<Date>()

  let footer = <p>Please pick a day.</p>
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>
  }

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  )
}

