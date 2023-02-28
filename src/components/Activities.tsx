import { ReactElement } from 'react';
import useActivities from '../hooks/useActivities'

const Activities = () => {

	const { activities } = useActivities();

	let contentPage: ReactElement | ReactElement[] = <p>Loading...</p>

	if (activities?.length) {

		const listItems = activities.map((activity, index) => {
			return (
				<li key={index}>
					<h3>{activity.name}</h3>
					<p>{activity.weight}</p>
				</li>
			)
		})

		contentPage = (
			<ul className='activities__list'>
				{listItems}
			</ul>
		)
	}

	const content = (
		<section className="activities">
			{contentPage}
		</section>
	)

	return content
}

export default Activities