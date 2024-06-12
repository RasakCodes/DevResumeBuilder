import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,

  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectModal({children, trigger}) {
  return (
    <Select>
        
    <SelectTrigger asChild >
        {trigger}
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
         {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
