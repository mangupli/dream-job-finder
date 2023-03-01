import { createContext, ReactElement, useState, useReducer, useCallback, useMemo } from "react"

export type ActivityType = {
    name: string,
    weight: number
}

const initActivities: ActivityType[]  = [
    {
        name: 'Applied for a job online',
        weight: 10
    },
    {
        name: 'Wrote a post on LinkedIn',
        weight: 20
    },
    {
        name: 'Fixed my CV for a specific job',
        weight: 10
    },
    {
        name: 'Wrote a good cover letter',
        weight: 40
    },
    {
        name: 'Asked a proffesional to improve your CV/Cover letter/Portfolio',
        weight: 60
    },
    {
        name: 'Made an improvement of my CV/Cover letter/Portfolio after a proffesional advice',
        weight: 15
    },
]

type ActivitiesStateType = { activities: ActivityType[] }

const initActivitiesState = {
    activities: initActivities
}

const initTags = {
    hard: 'hard',
    medium: 'medium',
    easy: 'easy'
}

export type TagsType = typeof initTags;

const useActivitiesContext = (initState: ActivitiesStateType) => {

    const { activities: initActivities } = initState

    const tags = useMemo(() => {
        return initTags
    }, []);

    const [ activities, setActivities ] = useState(initActivities)

    const filterAndSortActivities = useCallback((tag: string = 'ALL')=>{

        const filterActs = (from: number, to: number): ActivityType[] => {
            return activities.filter(act => act.weight >= from && act.weight < to)
        }

        let filteredActs: ActivityType[] = activities

        switch (tag) {
            case(tags.hard): {               
                filteredActs = filterActs(60, 100)
                break
            }
            case(tags.medium): {
                filteredActs = filterActs(25, 60)
                break
            }
            case(tags.easy): {
                filteredActs = filterActs(0, 25)
                break
            }
            default: {}
        }
        return filteredActs.sort((a, b) => {
            return b.weight - a.weight
        })
    },[])
    
    //do I even need to return activities?
    return { activities, filterAndSortActivities, tags }
}

export type UseActivitiesContextType = ReturnType<typeof useActivitiesContext>

const initActivitiesContextState: UseActivitiesContextType = { 
    activities: initActivities,
    filterAndSortActivities: () => [],
    tags: initTags
}

const ActivitiesContext = createContext<UseActivitiesContextType>(initActivitiesContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const ActivitiesProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <ActivitiesContext.Provider value={useActivitiesContext(initActivitiesContextState)}>
            {children}
        </ActivitiesContext.Provider>
    )
}

export default ActivitiesContext