// las interfaces se suelen guardar en un archivo .d y se importan y usan
// d -> definition
// no hay que tener codigo normal, solo definiciones, declaraciones, interfaces, type

export interface IAvenger { // la I indica es Interface
  name: string
  powerScore: number
  wonBattles: number
  age: number
  battle: (enemy:IAvenger, win:boolean) => void
}