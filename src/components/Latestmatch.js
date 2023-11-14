
import { Component } from "react";
import '../styles/latestmatch.css'
const Latestmatch=(props)=>{
    const{details}=props
    const {
        competingTeam,
        competingTeamLogo,
        date,
        firstInnings,
        manOfTheMatch,
        secondInnings,
        umpires,
        venue,
        result,
      } = details
    return(
        <div className="latestmatch">
            <h1>Latestmatch</h1>
            <div className="latestmatch1">
                <div className="one">
                    <h1 style={{color:"white"}}>{competingTeam}</h1>
                    <h3 style={{color:"white"}}>{date}</h3>
                    <h3 style={{color:"white"}}>{venue}</h3>
                    <h3 style={{color:"white"}}>{result}</h3>
                </div>
                <div className="two">
                    <img src={competingTeamLogo} className="clogo" alt="clogo"/>
                </div>
                <div className="three">
                    <h3>FirstInnings</h3>
                    <h5>{firstInnings}</h5>
                    <h3>SecondInnings</h3>
                    <h5>{secondInnings}</h5>
                    <h3>ManOfTheMatch</h3>
                    <h5>{manOfTheMatch}</h5>
                    <h3>Umpires</h3>
                    <h5>{umpires}</h5>
                    
                </div>
            </div>
        </div>
    )
}
export default Latestmatch