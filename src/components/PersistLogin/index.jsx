import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

import useRefreshToken from '../../hooks/useRefreshTokens'
import useAuth from "../../hooks/useAuth"
import useLocalStorage from "../../hooks/useLocalStorage"

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken()
  const { auth } = useAuth()
  const [persist] = useLocalStorage('persist', false)

  useEffect(() => {
    let isMounted = true

    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (err) {
        console.error(err)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)

    // clear up on unmount
    return () => isMounted = false

    // empty dependency array since lifecycle effect runs only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(`is loading: ${isLoading}`)
    console.log(`authToken: ${JSON.stringify(auth?.accessToken)}`)

    // lifecycle effect runs only on mount and isLoading state update
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <>
      {
        !persist
          ? <Outlet />
          : isLoading
            ? <p>Loading...</p>
            : <Outlet />
      }
    </>
  )
}

export default PersistLogin

