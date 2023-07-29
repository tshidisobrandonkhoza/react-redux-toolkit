
import './App.css'
import CakeView from './features/cakeSlice/cakeView'
import UserView from './features/usersSlice/UserView'
import IceView from './features/iceSlice/iceView'


function App() {

  return (
    <>
      <h1>Welcome</h1>
      <CakeView />
      <IceView />
      <UserView />
    </>
  )
}

export default App
