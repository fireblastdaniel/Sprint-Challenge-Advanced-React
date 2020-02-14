import React from 'react'
import axios from 'axios'

class DataDisplay extends React.Component{
    constructor(){
        super();
        this.state={
            players: []
        }
    }

    componentDidMount(){
        axios
        .get('http://localhost:5000/api/players')
        .then(response => {
            this.setState({ players: response.data })
        })
        .catch(error => console.log(error))
    }

    render() {
        return(
            <div className='player-container'>
                {
                    this.state.players.map(player => (
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
}

export default DataDisplay;