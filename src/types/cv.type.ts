export interface CV {
  basics: Basics
  work: Array<Work>
  volunteer: Array<Volunteer>
  education: Array<Education>
  awards: Array<Awards>
  certificates: Array<Certificates>
  publications: Array<Publications>
  skills: Array<Skills>
  languages: Array<Languages>
  interests: Array<Interests>
  references: Array<References>
  projects: Array<Projects>
}

export interface Basics {
  name: string
  label: string
  image: string
  email: string
  shareImage: string
  phone: string
  url: string
  summary: string
  workingStatus: boolean
  job?: string
  location: Location
  profiles: Array<Profiles>
}

export interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

export interface Profiles {
  network: string
  username: string
  url: string
}

export interface Work {
  name: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr | null
  summary: string
  highlights: Highlight
}

type DateStr = `${string}-${string}-${string}`

export interface Volunteer {
  organization: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr
  summary: string
  highlights: Highlight
}

export interface Skills {
  name: string
  icon: string
  bgColor: string
  type: string
  level: string
  keywords: Array<string>
}

export interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

export interface Certificates {
  name: string,
  date: DateStr,
  issuer: string,
  url: string
}

export interface Publications {
  name: string
  publisher: string
  releaseDate: DateStr
  url: string
  summary: string
}

export interface Education {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: DateStr
  endDate: DateStr
  score: string
  courses: Array<string>
}

export interface Languages {
  language: Language
  fluency: string
}

export type Language =
  "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string

export interface Projects {
  name: string
  isActive: boolean
  description: string
  highlights: Highlight
  public: boolean
  image: string
  url: string
  github?: string
  tecnologies: Array<string>
}

export interface Interests {
  name: string
  keywords: Array<string>
}

export interface References {
  name: string
  reference: string
}

export type Highlight = Array<String>