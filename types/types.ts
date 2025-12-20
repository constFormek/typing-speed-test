export type charStatus = 
| "idle"
| "correct"
| "incorrect"
| "focused" // currently typed letter

export interface charInterface {
  content: string,
  status: charStatus,
  id: number,
  x: number,
  y: number
}
