import { useEffect, useState } from 'react';
import User from './components/User';
import api from './services/api'

interface IUser {
  name: string,
  email: string,
}

function App() {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    api.get<IUser[]>('/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => setUsers(res.data))
  }, [])

  return (
    <div className="App">
      {users.map((user) => (
        <User user={user}/>
      ))}
    </div>
  );
}

export default App;
