import './CourseGoalItem.scss';

export default function CourseGoalItem(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className='goal-item' onClick={deleteHandler}>
      {props.children}
    </li>
  );
}
