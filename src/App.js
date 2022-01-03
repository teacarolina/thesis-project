import './App.css';
import AppRoute from './components/AppRoute';
//import db from './FirebaseConfig';
//import React, {useEffect, useState} from 'react';
//import { collection, getDocs } from 'firebase/firestore/lite';


function App() {

  //const [users, setUsers] = useState([]);
  //const usersCollectionRef = collection(db, 'testing');
    
  /*useEffect( ()=> {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, [])*/

  return (
    <div className="App">
      {/*users.map((user) => {
        return <div><h1 className="text-3xl font-bold underline">{user.name}</h1></div>;
      })*/}
      <AppRoute/>
    </div>
  );
}

export default App;
