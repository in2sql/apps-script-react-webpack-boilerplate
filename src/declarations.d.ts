declare module '*.svg'
declare module '*.jpg'
declare module '*.png'
declare module '*.pdf'

declare module '*.module.scss' {
  const content: Record<string, string>
  export default content
}
