import { useLocation } from "react-router"

const Success = () => {
    const location = useLocation()

    console.log(location)
  return (
    <div>Godkänd</div>
  )
}

export default Success