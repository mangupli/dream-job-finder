import useCompletedList from "../hooks/useCompletedList"
import { CompletedActivityType } from "../context/CompletedListProvider";

const CompletedList = () => {

	const { completed, dispatch, REDUCER_ACTIONS, totalActivities, totalWeight } = useCompletedList();

	const onPlusClick = (activity: CompletedActivityType) => dispatch({ type: REDUCER_ACTIONS.INC, payload: activity})
	const onMinusClick = (activity: CompletedActivityType) => dispatch({ type: REDUCER_ACTIONS.DEC, payload: activity})

	const listItems= completed.map(act => {
		return(
			<li
				key={act.name}
				className="completed__list-item"
			>
				<button onClick={() => onPlusClick(act)}>+</button>
				<button onClick={() => onMinusClick(act)}>-</button>
				<p>{act.name}</p>
				<p>{`x${act.qty}`}</p>		
			</li>
		)
	})

	const renderedList = (
		<ul className="completed__list">
			{listItems}
		</ul>
	)

	const content = (
		<section className="completed">
			<h2 className='subtitle'>completed today</h2>
{/* 			<p className='text bg-white'>add to the list what you have done today</p> */}
			{renderedList}
		</section>
	)

	return content
}

export default CompletedList