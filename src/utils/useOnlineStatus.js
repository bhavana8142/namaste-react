import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [onlinestaus, setOnlineStatus] = useState('online')


    useEffect(() => {


        window.addEventListener('online', () => {
            setOnlineStatus(true)

        })
        window.addEventListener('offline', () => {
            setOnlineStatus(false)
        })


    }, [])

    return onlinestaus




}
export default useOnlineStatus