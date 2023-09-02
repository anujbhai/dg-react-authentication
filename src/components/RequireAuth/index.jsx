import PropTypes from 'prop-types'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

const RequireAuth = props => {
  const {allowedRoles} = props

  const { auth } = useAuth()
  const location = useLocation()

  return (
    auth?.roles?.find(role => allowedRoles?.includes(role))
      ? <Outlet />
      : auth?.user
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
  )
}

RequireAuth.propTypes = {
  allowedRoles: PropTypes.array
}

export default RequireAuth

