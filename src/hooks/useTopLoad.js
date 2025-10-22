import { useEffect } from "react"

const useTopLoad = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
}

export default useTopLoad