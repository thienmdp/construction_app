import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import useRouteElements from '@/useRouteElements'

function App() {
  const dispatch = useDispatch()
  const routeElements = useRouteElements()

  return (
    <>
      {routeElements}
      <ToastContainer
        position='top-right'
        rtl={false}
        autoClose={4000}
        newestOnTop={false}
        closeButton={false}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default App
