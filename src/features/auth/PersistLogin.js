import { Outlet } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useRefreshMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentToken, isLoggedInOn, isLoggedInOff } from './authSlice'
import PulseLoader from 'react-spinners/PulseLoader'

const PersistLogin = () => {
  const dispatch = useDispatch()
  const [persist] = usePersist()
  const token = useSelector(selectCurrentToken)
  const effectRan = useRef(false)

  const [trueSuccess, setTrueSuccess] = useState(false)

  const [refresh, { isUninitialized, isLoading, isSuccess, isError }] =
    useRefreshMutation()

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      const verifyRefreshToken = async () => {
        console.log('verifying refresh token')
        try {
          await refresh()
          setTrueSuccess(true)
          dispatch(isLoggedInOn())
        } catch (err) {
          console.error(err)
        }
      }

      if (!token && persist) verifyRefreshToken()
    }

    return () => (effectRan.current = true)
  }, [])

  let content
  if (!persist) {
    // persist: no
    console.log('no persist')
    content = <Outlet />
  } else if (isLoading) {
    //persist: yes, token: no
    console.log('loading')
    content = <PulseLoader color={'#FFF'} />
  } else if (isError) {
    //persist: yes, token: no
    console.log('error')
    dispatch(isLoggedInOff())
    content = <Outlet />
  } else if (isSuccess && trueSuccess) {
    //persist: yes, token: yes
    console.log('success')
    content = <Outlet />
  } else if (token && isUninitialized) {
    //persist: yes, token: yes
    console.log('token and uninit')
    console.log(isUninitialized)
    content = <Outlet />
  }

  return content
}
export default PersistLogin
