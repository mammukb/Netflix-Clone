import React from 'react';
import Navbar from './components/Navbar/Navbar';
import "./App.css"
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals_url,actions_url,comedy_url,horror_url} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost   title='Netflix Originals'  url={originals_url}   />
      <RowPost  title='Action'  isSmall    url={actions_url}  />
      <RowPost  title='Comedy'  isSmall    url={comedy_url}  />
      <RowPost  title='Horror'  isSmall    url={horror_url}  />


    </div>
  );
}

export default App;
