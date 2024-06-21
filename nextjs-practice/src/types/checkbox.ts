export interface Checkbox {
  id?: string
  sx?: React.CSSProperties
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end'
  isChecked: boolean
  label?: string
}
