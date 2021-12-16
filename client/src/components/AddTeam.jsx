import React, { useState, useEffect } from "react";
import axios from "axios";

const AddTeam = (props) => {
  const [newTeam, setNewTeam] = useState({
    team_Name:``,
    manager_Name:``
  })
  const submit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/api/teams`, {
      team_Name: newTeam.team_Name,
      manager_Name: newTeam.manager_Name
    })
    let anotherTeam = {
      team_Name:``,
      manager_Name:``
    }
    setNewTeam(anotherTeam)
    // DO THIS WITHOUT RELOADING THE WHOLE PAGE:
    window.location.reload()
  }
  const handleChange = (e) => {
    const newestTeam = { ...newTeam }
    newestTeam[e.target.id] = e.target.value
    setNewTeam(newestTeam)
    console.log(newestTeam)
  }

  return (
    <div className="addTeam">
      <form className="addTeamForm" onSubmit={(e) => submit(e)}>
        <input 
          type='text' 
          name='team_Name' 
          value={newTeam.team_Name} 
          onChange={(e) => handleChange(e)}
          id='team_Name'
          placeholder="enter team name"
        />
        <input 
          type='text' 
          name='manager_Name' 
          value={newTeam.manager_Name} 
          onChange={(e) => handleChange(e)}
          id='manager_Name'
          placeholder="enter manager name"
        />
        <button className="btn">Create</button>
      </form>
    </div>
  )
}

export default AddTeam