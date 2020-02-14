import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataDisplay = () => {
    const [players, setPlayers] = useState([]);
    useEffect( () => {
        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
                setPlayers(response.data);
            })
            .catch( err => {
                console.error(err);
            })
    })

    return(
        <div className='player-container'>
            {
                players.map(player => (
                    <div className='player-card'>
                        <h2>{player.name}</h2>
                        <p>Country: {player.country}</p>
                        <p>Searches: {player.searches}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default DataDisplay;