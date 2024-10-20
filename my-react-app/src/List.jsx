import PropTypes from 'prop-types';

function List(props){

    //players.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
    //players.sort((a, b) => b.name.localeCompare(a.name)); //Reverse
    //players.sort((a, b) => a.position.localeCompare(b.position));
    
    //const inters = players.filter(player => player.kda < 4);
    //const carries = players.filter(player => player.kda >= 4);

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.position}</b>, &nbsp;
                                                <b>{item.kda}</b></li>);

    return( <>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>);
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,      
                                              position: PropTypes.string,
                                              kda: PropTypes.number}))
}
List.defaultProps = {
    category: "Team",
    items: [],
}
export default List