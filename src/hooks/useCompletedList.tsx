import { useContext } from "react"
import CompletedListContext from "../context/CompletedListProvider"
import { UseCompletedListContextType } from "../context/CompletedListProvider"

const useCompletedList = ():UseCompletedListContextType => {
    return useContext(CompletedListContext)
}

export default useCompletedList