import './App.css';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import MusicList from "./components/MusicList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicList } from "./actions"


const App = () => {
  const [searchParams, setSearchParams] = useState({})
  const [isScrolling, setIsScrolling] = useState(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isScrolling) searchSong();
  }, [isScrolling])

  useEffect(() => {
    if (Object.keys(searchParams).length !== 0) searchSong();
  }, [searchParams])

  const searchSong = () => {
    dispatch(getMusicList({ searchParams, isScrolling }))
    setIsScrolling(false);
  }

  const onHandleScroll = (e) => {
    e.persist();
    if (!isScrolling && (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight)) {
      setIsScrolling(true)
      return;
    }
  }

  return (

    <div className='container main-app-container mt-3' onScroll={e => onHandleScroll(e)}  >
      <Header />
      <SearchForm searchSong={searchSong} setSearchParams={setSearchParams} />
      {state.isLoading && <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MusicList songs={state.songs} searchParams={Object.keys(searchParams).length} isLoading={state.isLoading} />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
