import {Component} from 'react'
import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'
import Teamlist from './Teamlist'
import '../styles/home.css'
class Home extends Component{
    state={
        teamlist:[],
        isLoading:true
    }
    componentDidMount(){
        this.getDetails()
    }
    getDetails=async()=>{
        const response=await fetch("https://apis.ccbp.in/ipl")
        
        const data=await response.json()
        const{teams}=data
        const updatedlist = teams.map(each => ({
            id: each.id,
            name: each.name,
            teamImageUrl: each.team_image_url,
          }))
       
        this.setState({
            teamlist:updatedlist,
            isLoading:false
        })
    }
    render(){
        const{teamlist,isLoading}=this.state
        const{id}=teamlist
        console.log(id)
        return(
           <div className='homecontainer'>
            <Link to="/" style={{textDecoration: 'none',color:"white"}}>
            {isLoading?<Loader type="Oval" color="#0Bcfff" height={50} width={50}/>:
                (<div className='incon'>
                    <div className='incon1'>
                        <h1 className="heading" style={{color:"white"}}>IPL Dashboard</h1>
                        <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="logo" className='logo'/>
                    </div>
                    <div className='incon2'>
                        {teamlist.map((item)=>(
                            <Teamlist details={item} key={item.id}/>
                         ))}
                    </div>
                    </div>)
                    
                   
         
            }
            </Link>
           
                
           </div>

       
        )
    }

}
export default Home