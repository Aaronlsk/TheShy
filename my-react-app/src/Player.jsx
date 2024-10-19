import PropTypes from "prop-types"

function Player(props){
    return(
        <div className="player">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Player: {props.isPlayer ? "Yes" : "No"}</p>
        </div>
    );
}
Player.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    player: PropTypes.bool,
}
export default Player