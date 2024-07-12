export interface Detail {
  STT?: string | undefined
  item: string
  Diem: number | null
  sectionKey?: string | undefined
}

export interface Section {
  STT: string
  NoiDung: string
  ChiTiet: Detail[]
  key: string
}
