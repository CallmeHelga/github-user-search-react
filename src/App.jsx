import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import NoResults from './components/NoResults';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)

  async function fetchUserData(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (response.ok) {
        const data = await response.json();
        setUserData(data)
        setError(null)
      } else {
        setUserData(null);
        setError("User not found");
      }
    } catch (error) {
      setUserData(null);
      setError("Network error")
    }
  }
  console.log("userData:", userData);



  return (
    <div className="app-container">
      <div className="content">
        <header>
          <h1>devfinder</h1>

          <ThemeSwitch />
        </header>
        <main>
          <SearchBar onSearch={fetchUserData} error={error} />
          {error && <NoResults />}
          {userData && <UserCard userData={userData} />}
        </main>

      </div>
    </div>
  )
}

export default App
