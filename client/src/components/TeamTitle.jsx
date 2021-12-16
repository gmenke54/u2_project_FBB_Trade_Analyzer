import React, { useEffect, useState } from "react";
import axios from "axios";

const TeamTitle = (props) => {
  // const deletePlayer = () => {
  //   axios.delete(`http://localhost:3001/api/players/details/${props._id}`);
  //   // DO THIS WITHOUT RELOADING THE WHOLE PAGE:
  //   window.location.reload()
  // }


  const [updatedTeam, setUpdatedTeam] = useState({
    team_Name:``,
    manager_Name: props.manager_Name
  })
  const submit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/api/teams/details/${props.team_Id}`, {
      team_Name: updatedTeam.team_Name,
      manager_Name: updatedTeam.manager_Name
    })
    let anotherTeam = {
      team_Name:``,
      manager_Name: props.manager_Name
    }
    setUpdatedTeam(anotherTeam)
    // DO THIS WITHOUT RELOADING THE WHOLE PAGE:
    window.location.reload()
  }
  const handleChange = (e) => {
    const newestTeam = { ...updatedTeam }
    newestTeam[e.target.id] = e.target.value
    setUpdatedTeam(newestTeam)
    console.log(newestTeam)
  }

  return (
    <section className="teamBoxTitle">
        <h1>{props.team_Name}</h1>
        <h3>{props.manager_Name}</h3>
        <h5>{props.team_Id}</h5>
        <form className="updateTeamForm" onSubmit={(e) => submit(e)}>
        <input 
          type='text' 
          name='team_Name' 
          value={updatedTeam.team_Name} 
          onChange={(e) => handleChange(e)}
          id='team_Name'
          placeholder="update team name"
        />
        <button className="btn">Update</button>
      </form>
      </section>
  )
}

export default TeamTitle