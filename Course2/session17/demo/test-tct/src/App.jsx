import { useEffect, useState } from "react";
import "./styles/main.css";

const App = () => {
  const [padding, settPadding] = useState(20);
  const [emri, setEmri] = useState("Klajdi");
  // let emri = "Klajdi";
  const mbiemri = "zmalaj";
  const [users, setUsers] = useState([]);
  console.log("emri", emri);

  const menuItems = ["Home", "About", "Contact", "Test"];

  useEffect(() => {
    fetch("http://localhost:3036/users", { method: "get" })
      .then((res) => res.json())
      .then((usersGot) => {
        console.log("usrat jane : ", usersGot);
        setUsers(usersGot.users);
      });
  }, []);

  return (
    <div>
      <nav>
        {console.log("hello")}
        <ul>
          {menuItems.map((currentItem) => {
            return <Item emerFaqe={currentItem}></Item>;
          })}
        </ul>
      </nav>

      <div
        // style='color:red;padding:20px'
        style={{
          color: "red",
          padding: `${padding}px`,
        }}
      >
        Une quhem {emri} {mbiemri}
      </div>

      <button
        // onclick="settPadding(padding + 3)"
        onClick={function () {
          settPadding(padding + 3);
        }}
      >
        RRit padding +3
      </button>
      <button
        onClick={() => {
          // emri = "Klajdiiii";
          setEmri("Klajdiiii");
          console.log("emri after click", emri);
        }}
      >
        Ndrysho klajdi
      </button>
      {(users || []).map((currentUser) => {
        return <div>{currentUser.emer}</div>;
      })}
    </div>
  );
};

// Item('Home')
// Item('About')
// Item('Contact')

const Item = ({ emerFaqe }) => {
  return <li> {emerFaqe} </li>;
};

export default App;
