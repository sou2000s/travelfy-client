import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - travelfy`
    } , [title])
}


export default useTitle;