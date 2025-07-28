export interface ProjectProps {
    title: string
    logo?: StaticImageData
    texts: string[]
    link: string
    code: string
    cover: StaticImageData
    techs: { name: string, kind: 'frontend' | 'backend' | 'other' }[]
}