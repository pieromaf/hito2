import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<homepage />} /> /* hay que revisar esto porque en la ayudantia tiraba al home */
      <Route path="/login" element={<Login />} /> /* hay que revisar esto porque en la ayudantia a lista de productos*/

      </Routes>
    </>
  )
}

export default App
