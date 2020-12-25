import './App.css';
import SearchBar from './components/layout/SearchBar'
import Posts from './components/Posts/Posts'
const App = () => {

  return (
      <div className="container py-3 mt-4 mb-1 bg-secondary">
        <SearchBar />
        <Posts />
      </div>
  );
}

export default App;