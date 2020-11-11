export interface WikiDataListItem {
    author: Author
    explore: number
    img: string
    pubTime: string
    summary: string
    title: string
    id: number
    type: WikiType
}

export interface Author {
    id: number
    portrait: string
    realName: string
    team: string
    userName: string
    
}

export interface WikiType {
    id: number
    typeName: string
}