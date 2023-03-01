import { useContext } from "react"
import ActivitiesContext from "../context/ActivitiesProvider"
import { UseActivitiesContextType } from "../context/ActivitiesProvider"

const useActivities = ():UseActivitiesContextType => {
    return useContext(ActivitiesContext)
}

export default useActivities