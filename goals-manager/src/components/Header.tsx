import type { ReactNode } from "react"

type HeaderProps = {
    imgPath: string
    alt?: string
    children?: ReactNode
}


const Header = ({imgPath, alt, children}: HeaderProps) => {
    return (
        <header style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={imgPath} alt={alt}/>
        <>{children}</>
        </header>
    )
}

export default Header