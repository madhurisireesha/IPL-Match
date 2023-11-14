import{Component} from 'react'
import Loader from 'react-loader-spinner'
import Latestmatch from './Latestmatch'
import Recentmatch from './Recentmatch'
import '../styles/teamdetails.css'
class Teamdetails extends Component{
    state={
        teamdetails:[],
        isLoading:true
    }
    componentDidMount(){
        this.getTeamDetails()
    }
    getTeamDetails=async()=>{
       
       const{id}=this.props.match.params
        
    const response=await fetch(`https://apis.ccbp.in/ipl/${id}`)
       const fetcheddata=await response.json()
      
       
       
       
       const updateddata={
        teamBannerUrl: fetcheddata.team_banner_url,
        latestMatchDetails:{
            id: fetcheddata.latest_match_details.id,
            competingTeam: fetcheddata.latest_match_details.competing_team,
            competingTeamLogo: fetcheddata.latest_match_details.competing_team_logo,
            date: fetcheddata.latest_match_details.date,
            firstInnings: fetcheddata.latest_match_details.first_innings,
            manOfTheMatch: fetcheddata.latest_match_details.man_of_the_match,
            matchStatus: fetcheddata.latest_match_details.match_status,
            result: fetcheddata.latest_match_details.result,
            secondInnings: fetcheddata.latest_match_details.second_innings,
            umpires: fetcheddata.latest_match_details.umpires,
            venue: fetcheddata.latest_match_details.venue,
        },
        recentMatches: fetcheddata.recent_matches.map(recentMatch => ({
            umpires: recentMatch.umpires,
            result: recentMatch.result,
            manOfTheMatch: recentMatch.man_of_the_match,
            id: recentMatch.id,
            date: recentMatch.date,
            venue: recentMatch.venue,
            competingTeam: recentMatch.competing_team,
            competingTeamLogo: recentMatch.competing_team_logo,
            firstInnings: recentMatch.first_innings,
            secondInnings: recentMatch.second_innings,
            matchStatus: recentMatch.match_status,
          })),
        }
      this.setState({teamdetails:updateddata,isLoading:false })
      
    }

    renderLatestMatches=()=>{
        const{teamdetails}=this.state
        const{teamBannerUrl,latestMatchDetails}=teamdetails
        return(
            <div className='matchcontainer'>
                <img src={teamBannerUrl} className='bannerimg' alt="banner"/>
               <Latestmatch details={latestMatchDetails}/> 
               {this.renderRecentMatches()}
              
            </div>
        )
    }

    renderRecentMatches=()=>{
        const{teamdetails}=this.state
        const{recentMatches}=teamdetails
        return(
           <div className='recent'>
           {recentMatches.map(eachMatch => (
          <Recentmatch details={eachMatch} key={eachMatch.id} />
        ))}
           </div>
        )
    }
    render(){
        const{teamdetails,isLoading}=this.state
        const{latestMatchDetails}=teamdetails
        
        return(
            <div className='teamdetailscontainer'>
                {isLoading?<Loader type="Rings" color="#0B0fff" height={50} width={50}/>
                :this.renderLatestMatches()
            }
            </div>
        )
    }
}
export default Teamdetails