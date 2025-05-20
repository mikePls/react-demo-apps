import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg"
import { useState, useRef, type FormEvent } from "react";
import GoalList from "./components/CoalList";
import  type {Goal} from "./components/types";
import NewGoalForm from "./components/NewGoalForm";


export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const maxId = useRef(0)

  const handleAddGoal = (goalTitle:string, goalSummary: string) => {
    setGoals(prevGoals => {
      const newGoal: Goal = {id: maxId.current, title: goalTitle, description: goalSummary}
      maxId.current+=1
      return [...prevGoals, newGoal]
    })
  }

  const handleDeleteGoal = (idToDelete: number) => {
    const updatedGoals = goals.filter(goal => goal.id !== idToDelete)
    setGoals(updatedGoals)
  }

  return (
  <main>
    <Header imgPath={goalsImg} alt="Goals image">
      <h1> My Goals </h1>
    </Header>
    <NewGoalForm onSubmit={handleAddGoal}/>
    <GoalList onDelete={handleDeleteGoal} goalList={goals}/>
    
  </main>
  )}
