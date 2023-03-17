import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router"

const Success = () => {
    const location = useLocation()
    const history = useNavigate()

    function goToHomePage() {
      history('/');
    }

    const data = location.state
    const cart = location.state;
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
      const createOrder = async () => {
        try{
          const res = await axios.post('http://localhost:5000/api/orders', {
            userId: currentUser._id,
            products: cart.products.map((item) => ({
              productId: item._id,
              quantity: item._quantity
            })),
            amount: cart.total,
            address: data.billing_details.address,
          });
          setOrderId(res.data._id);
          
        }
        catch{}
      }
      data && createOrder();
    }, [cart, data, currentUser])
    console.log(data)
  return (
    <div
      style={{
        height: '100vh',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >{
      orderId ? `Beställning är Godkänd. Beställning nummer är ${orderId}`
      : `Godkänd. Din beställning behandlas...`
    } <button style={{padding: 10, marginTop: 20}} onClick={goToHomePage}>Gå till Startsida!</button>

    </div>
  )
}

export default Success;