import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import Teamdetails from './components/Teamdetails'

const App=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
               
                <Route  path='/teams/:id' component={Teamdetails}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App