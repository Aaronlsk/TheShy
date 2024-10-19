import profilePic from './assets/GIGASHY.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">TheShy</h2>
            <p className="card-text">2018 World Champion in League, Best Top Worldwide</p>
        </div>
    );
}

export default Card