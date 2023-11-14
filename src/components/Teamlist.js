import  '../styles/teamlist.css'
import { Link } from "react-router-dom";
const Teamlist=(props)=>{
    const{details}=props
    const{name,teamImageUrl,id}=details
    
    return(
        <div className='list1'>
            <Link to={`/teams/${id}`} style={{textDecoration:"none",color:"#ffffff"}}>
                <div className='list2'>

                      <img src={teamImageUrl} className="teamlogo" alt="teamlogo"/>
                     <h3>{name}</h3>
                </div>
            </Link>
        </div>
        
    )
}
export default Teamlist