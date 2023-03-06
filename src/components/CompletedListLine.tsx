import { useState } from "react";
import { CompletedActivityType, ReducerActionType, ReducerAction } from "../context/CompletedListProvider";

type PropsType = {
	activity: CompletedActivityType,
	dispatch: React.Dispatch<ReducerAction>,
	REDUCER_ACTIONS: ReducerActionType
}

const CompletedListLine = ({activity, dispatch, REDUCER_ACTIONS}: PropsType) => {

	const [strike, setStrike] = useState(false);

	const onPlusClick = (activity: CompletedActivityType) => dispatch({ type: REDUCER_ACTIONS.INC, payload: activity})
	const onMinusClick = (activity: CompletedActivityType) => dispatch({ type: REDUCER_ACTIONS.DEC, payload: activity})
	const onRemoveClick = (activity: CompletedActivityType) => dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: activity})

	const strikeClass = strike ? 'strike' : '';

	const content = (
		<li className="completed__list-item">
			<div className="completed__btns-wrapper">
				<button 
					className="completed__btn"
					onClick={() => onPlusClick(activity)}
					>+</button>
				<button 
					className="completed__btn"
					onClick={() => onMinusClick(activity)}
					>-</button>
			</div>
			<div className={`completed__activity`}>
				<p className={`completed__activity-name  ${strikeClass}`}>{activity.name}</p>
				<p className="completed__qty">{`x${activity.qty}`}</p>
			</div>
			<div className="completed__remove">
				<button 
						className='completed__btn'
						onClick={() => onRemoveClick(activity)}
						onMouseEnter={() => setStrike(true)}
        				onMouseLeave={() => setStrike(false)}
						>x</button>
			</div>						
		</li>
	)
	return content
}

export default CompletedListLine