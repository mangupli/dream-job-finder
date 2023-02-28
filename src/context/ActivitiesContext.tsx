import { createContext, ReactElement, useState } from "react"

export type ActivityType = {
    name: string,
    weight: number
}

const initActivitiesState: ActivityType[] = [
    {
        name: 'Applied for a job online',
        weight: 10
    },
    {
        name: 'Wrote a post on LinkedIn',
        weight: 10
    },
    {
        name: 'Fixed my CV for a specific job',
        weight: 10
    },
    {
        name: 'Wrote a good cover letter',
        weight: 10
    },
    {
        name: 'Asked a proffesional to improve your CV/Cover letter/Portfolio',
        weight: 15
    },
    {
        name: 'Made an improvement of my CV/Cover letter/Portfolio after a proffesional advice',
        weight: 15
    },
]

export type UseActivitiesContextType = { activities: ActivityType[] }

const initActivitiesContextState: UseActivitiesContextType = { activities: initActivitiesState }

const ActivitiesContext = createContext<UseActivitiesContextType>(initActivitiesContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const ActivitiesProvider = ({ children }: ChildrenType): ReactElement => {

    const [ activities, setActivities ] = useState(initActivitiesState)

    return (
        <ActivitiesContext.Provider value={{ activities }}>
            {children}
        </ActivitiesContext.Provider>
    )
}

export default ActivitiesContext