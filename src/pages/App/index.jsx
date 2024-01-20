import './App.css'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SingIn } from '../SingIn'

function App() {

  return (
    <>
      <div className='bg-red-100'>
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <NotFound />
        <SingIn />
      </div>
    </>
  )
}

export default App
