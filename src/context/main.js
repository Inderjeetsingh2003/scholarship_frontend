import React, { createContext, useState } from 'react';

const ScholarshipContext = createContext();

const ScholarshipProvider = ({ children }) => {
  const [scholarships, setScholarships] = useState(null);
  const [index, setIndex] = useState(0);
  const [sName, setSName] = useState(null);
  const handleScholarships = (newScholarships) => {
    setScholarships(newScholarships);
    console.log("print",newScholarships[0]['fields']['slug'])
    setSName(newScholarships[0]['fields']['slug'])
  };

  const nextPage = () => {
    setIndex((prevIndex) => prevIndex + 10);
    console.log(index);
  };
  const prePage = () => {
    setIndex((prevIndex) => prevIndex - 10);
    console.log(index);
  };

  return (
    <ScholarshipContext.Provider value={{ scholarships, handleScholarships, index, nextPage, prePage, sName, setSName }}>
      {children}
    </ScholarshipContext.Provider>
  );
};

export { ScholarshipContext, ScholarshipProvider };
