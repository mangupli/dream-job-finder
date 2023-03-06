import useCompletedList from "../hooks/useCompletedList"
import { CompletedActivityType } from "../context/CompletedListProvider";
import CompletedListLine from "./CompletedListLine";

const CompletedList = () => {

	const { completed, dispatch, REDUCER_ACTIONS, totalActivities, totalWeight } = useCompletedList();

/* 	const listItems= completed.map(act => {
		return(
			<CompletedListLine
				key={act.name}
				activity={act}
				dispatch={dispatch}
				REDUCER_ACTIONS={REDUCER_ACTIONS}
			/>			
		)
	}) */

	const renderedList = (
		<ul className="completed__list">
			{completed.map(act => {
				return(
					<CompletedListLine
						key={act.name}
						activity={act}
						dispatch={dispatch}
						REDUCER_ACTIONS={REDUCER_ACTIONS}
					/>			
				)
			})}
		</ul>
	)

	const totalInfo = (
		<div className="">
			<p>{`Total progress: ${totalWeight}`}</p>
			<p>{`Total activities: ${totalActivities}`}</p>
		</div>
	)

	const content = (
		<section className="completed">
			<h2 className='subtitle'>what have you done today?</h2>
{/* 			<p className='text bg-white'>add to the list what you have done today</p> */}
			{renderedList}
			{totalInfo}
		</section>
	)

	return content
}

export default CompletedList