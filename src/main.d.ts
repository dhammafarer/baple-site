declare type Lang = 'es'| 'en' | 'zh'

declare interface Image {
  childImageSharp: {
    sizes: {
      src: string
    }
  }
}
