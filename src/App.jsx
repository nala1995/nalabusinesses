import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Firstproject from '../src/pages/Pone/Firstproject'
import Fiveproject from '../src/pages/Pone/Fiveproject'
import Fourproject from '../src/pages/Pone/Fourproject'
import Introduction from '../src/pages/Pone/Introduction'
import Secondproject from '../src/pages/Pone/Secondproject'
import Thirdproject from '../src/pages/Pone/Thirdproject'
import Finalmodule from '../src/pages/Pone/Finalmodule'
import Designskills from '../src/pages/Ptwo/Designskills'
import Firstdesign from '../src/pages/Ptwo/Firstdesign'
import Secondesign from '../src/pages/Ptwo/Secondesign'
import Thirdesign from '../src/pages/Ptwo/Thirdesign'
import Fourdesign from '../src/pages/Ptwo/Fourdesign'
import Fivedesign from '../src/pages/Ptwo/Fivedesign'
import Dynamicimport from '../src/pages/Pthree/Dynamicimport'
import Performancepatterns from '../src/pages/Pthree/Performancepatterns'
import Staticimport from '../src/pages/Pthree/Staticimport'
import Renderingclient from '../src/pages/Pfour/Renderingclient'
import Renderingintro from '../src/pages/Pfour/Renderingintro'
import Renderingstatic from '../src/pages/Pfour/Renderingstatic'
import Shoppingpage from '../src/pages/Pshop/Shopping.jsx'
import Success from '../src/pages/Pshop/Success.jsx'
import Fail from '../src/pages/Pshop/Fail.jsx'

const App = () => {
  return (
    <>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Introduction' element={<Introduction />} />
            <Route path='/Firstproject' element={<Firstproject />} />
            <Route path='/Secondproject' element={<Secondproject />} />
            <Route path='/Thirdproject' element={<Thirdproject />} />
            <Route path='/Fourproject' element={<Fourproject />} />
            <Route path='/Fiveproject' element={<Fiveproject />} />
            <Route path='/Finalmodule' element={<Finalmodule />} />
            <Route path='/Designskills' element={<Designskills />} />
            <Route path='/Firstdesign' element={<Firstdesign />} />
            <Route path='/Secondesign' element={<Secondesign />} />
            <Route path='/Thirdesign' element={<Thirdesign />} />
            <Route path='/Fourdesign' element={<Fourdesign />} />
            <Route path='/Fivedesign' element={<Fivedesign />} />
            <Route path='/Dynamicimport' element={<Dynamicimport />} />
            <Route path='/Performancepatterns' element={<Performancepatterns />} />
            <Route path='/Staticimport' element={<Staticimport />} />
            <Route path='/Renderingclient' element={<Renderingclient />} />
            <Route path='/Renderingintro' element={<Renderingintro />} />
            <Route path='/Renderingstatic' element={<Renderingstatic />} />
            <Route path='/Shopping' element={<Shoppingpage />} />
            <Route path='/Success' element={<Success />} />
            <Route path='/Fail' element={<Fail />} />
         </Routes>
    </>
  )
}

export default App