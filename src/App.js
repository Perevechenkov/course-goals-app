import { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.scss';

export default function App() {
  console.log('render');
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      return prevGoals.filter(goal => goal.id !== goalId);
    });
  };

  const Content = () => {
    if (courseGoals.length > 0) {
      return (
        <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
      );
    }
    return <p style={{ textAlign: 'center' }}>No goals found</p>;
  };

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>
        <Content />
      </section>
    </div>
  );
}
