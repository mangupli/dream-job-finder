import { ActivityType } from "../context/ActivitiesProvider"
import { ReducerActionType, ReducerAction } from "../context/CompletedListProvider";

type PropsType = {
    tag: string,
    getActivities: (tag?: string) => ActivityType[],
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType
}

const ActivitiesBlock = ({ tag, getActivities, dispatch, REDUCER_ACTIONS }:PropsType) => {

    const activities = getActivities(tag);

    const onClickOnActivity = (activity: ActivityType) => dispatch({ type: REDUCER_ACTIONS.ADD, payload: {...activity, qty: 1}})

    const listItems = activities.map((activity) => {
        return (
            <li
                key={activity.name}
                className='activities__list-item'
                onClick={() => onClickOnActivity(activity)}
            >
                <p className='activities__name'>{activity.name}</p>
                <p>{activity.weight}</p>
            </li>
        )
    })

    let contentPage = (
        <>
            <h3 className='activities__tag'>{tag.toLowerCase()}</h3>
            <ul className='activities__list' data-tag={tag}>
                {listItems}
            </ul>
        </>
    )
  return (
    contentPage
  )
}

export default ActivitiesBlock