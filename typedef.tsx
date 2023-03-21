export type Row = {
  sources: string
  value: string
  distribution: string
  divisor: string | '√2' | '√3' | '√6'
  ci: number
  ui: number
  vi: number | '∞'
  percent: number
  index: number
}

type ActionInput = {
  id: number
  type: 'SOURCES' | 'VALUE' | 'DISTRIBUTION' | 'DIVISOR'
  payload: string
}

type ActionDelete = {
  id: number
  type: 'DELETE'
}
type ActionAdd = {
  type: 'ADD'
}

export type Reducer = ActionInput | ActionDelete | ActionAdd
