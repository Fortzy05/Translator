import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [language, setLanguage] = useState('English');
  return (
    <div className="ui container">
      <div>
        Select a language
        <i onClick={handleLanguageChange} className="flag us" />
        <i onClick={handleLanguageChange} className="flag nl" />
      </div>
    </div>
  );
};
export default App;
