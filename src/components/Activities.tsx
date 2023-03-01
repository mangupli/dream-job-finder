import { ReactElement } from 'react';
import useActivities from '../hooks/useActivities'
import ActivitiesBlock from './ActivitiesBlock';
import useCompletedList from '../hooks/useCompletedList';

const Activities = () => {

	const { filterAndSortActivities, tags } = useActivities()
	const { dispatch, REDUCER_ACTIONS, completed } = useCompletedList()

	const activities = filterAndSortActivities()

	let contentPage: ReactElement | ReactElement[] = <p>Loading...</p>

	if (activities?.length) {

		contentPage = Object.keys(tags).map(tag => {
			return <ActivitiesBlock
						key={tag}
						tag={tag}
						getActivities={filterAndSortActivities}
						dispatch={dispatch}
						REDUCER_ACTIONS={REDUCER_ACTIONS}
					/>
		})

	}

	const content = (
		<section className="activities">
			<h2 className='subtitle'>activities</h2>
{/* 			<p className='text bg-white'>add to the list what you have done today</p> */}
			{contentPage}
		</section>
	)

	return content
}

export default Activities