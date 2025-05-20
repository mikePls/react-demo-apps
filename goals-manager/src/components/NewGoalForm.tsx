import type { FormEvent } from "react";
import { useRef } from "react";
import GoalList from "./CoalList";

type Props = {
    onSubmit: (goalTitle: string, goalSummary:string) => void
}

const NewGoalForm = ({onSubmit}: Props) => {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        onSubmit(enteredGoal, enteredSummary)
        event.currentTarget.reset()

    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="goal"> New goal </label>
            <input id="goal" type="text" ref={goal}/>
            <label  htmlFor="summary"> Short description... </label>
            <input id="summary" type="text" ref={summary}/>
            <button> Add new goal...</button>

        </form>
    )
}


export default NewGoalForm