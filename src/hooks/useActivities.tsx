import { useContext } from "react"
import ActivitiesContext from "../context/ActivitiesContext"
import { UseActivitiesContextType } from "../context/ActivitiesContext"

const useActivities = ():UseActivitiesContextType => {
    return useContext(ActivitiesContext)
}

export default useActivities