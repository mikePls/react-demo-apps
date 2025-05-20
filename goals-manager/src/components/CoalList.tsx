import GoalCard from "./GoalCard";
import { useEffect, useState, useRef } from "react";
import type { Goal } from "./types";
import Infobox from "./InfoBox";
import { type ReactNode } from "react";

type GoalProps = {
  goalList: Array<Goal>;
  onDelete: (idToDelete: number) => void;
};

const GoalList = ({ goalList, onDelete }: GoalProps) => {
  if (goalList.length === 0) {
    return <Infobox mode="hint">Your goals list is empty.</Infobox>;
  }

  let warningBox: ReactNode;

  if (goalList.length >= 4) {
    warningBox = (
      <Infobox mode="warning" severity="high">
        Your goals list seems quite full. Make sure you don't stress yourself
        out!
      </Infobox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goalList.map((goal, index) => {
          return (
            <li key={goal.id}>
              <GoalCard
                title={goal.title}
                description={goal.description}
                onClick={() => onDelete(goal.id)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GoalList;
