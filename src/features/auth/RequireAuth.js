import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const RequireAuth = () => {
    const location = useLocation()
    const {roles} = useAuth()

    const content = (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            : <Navigate to = "/login" state={{ form: location }} replace />
    )

  return content
}

export default RequireAuth