
function List(){
    
    const players = ["Bin", "XUN", "knight", "Elk", "ON"];

    const listItems = players.map(player => <li>{player}</li>)

    return(<ul>{listItems}</ul>);
}
export default List