function Food(){

    const food1 = "Ramyeon"
    const food2 = "Mandu"

    return(
        <ul>
            <li>Kimchi</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food