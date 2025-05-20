import type { ReactNode } from "react"


type Props = {
    title: string;
    description: string;
    children?: ReactNode;
    onClick?: () => void;
}

const GoalCard = ({title, description, onClick, children}: Props) => {
    return (<article>
        <div>
            <h2> {title} </h2>
            <p> {description} </p>
            <p> {children} </p>

        </div>
        <button onClick={onClick}>Delete</button>
        </article>
    )
}

export default GoalCard