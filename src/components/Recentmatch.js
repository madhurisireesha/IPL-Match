import '../styles/recentmatch.css'
const Recentmatch=(props)=>{
    const {details} = props
    const {result, competingTeam, competingTeamLogo, matchStatus} = details
    return(
       <div className='one'>
       <div className='recentmatch'>
            
               <img src={competingTeamLogo} className='teamlogo' alt="teamlogo"/>
               <h3 style={{color:"white"}}>{competingTeam}</h3>
               <h5 style={{color:"white"}} >{matchStatus}</h5>
               <p style={{color:"white"}}>{result}</p>
               
        </div>
        </div>
    )
}
export default Recentmatch