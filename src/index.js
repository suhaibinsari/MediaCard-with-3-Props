import React from 'react';
import ReactDOM from 'react-dom';
import MediaCard from './components/Mediacard'
import './index.css'




ReactDOM.render(
  <React.StrictMode>

    <MediaCard title="Suhaib Ansari" body={"My Picture"} imageURL={""} altText="Oops img not found" />
  </React.StrictMode>,
  document.getElementById('root')
);


