import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Player from "./Player.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import Button from "./Button.jsx"

function App() {

    return(
      <>
          <Card/>
          <UserGreeting isLoggedIn={true} username="TheShy"/>
          <Button/>
      </>
    );
}

export default App
