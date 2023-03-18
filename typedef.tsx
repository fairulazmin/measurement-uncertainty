export type Row = {
  sources: string
  value: number
  distribution: string
  divisor: number | '√2' | '√3' | '√6'
  ci: number
  ui: number
  vi: number | '∞'
  percent: number
  index: number
}

export type Reducer = Row & {
  id: number
  type: string
}
