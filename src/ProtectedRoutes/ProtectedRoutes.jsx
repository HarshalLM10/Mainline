import { Navigate } from "react-router"

 const ProtectedRoute = ({ children }) => {

    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
 }
 export default ProtectedRoute;