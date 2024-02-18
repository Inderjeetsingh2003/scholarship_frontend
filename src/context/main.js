import React, { createContext, useState } from 'react';

const ScholarshipContext = createContext();

const ScholarshipProvider = ({ children }) => {
  const [scholarships, setScholarships] = useState(null);
  const [index, setIndex] = useState(0);

  const handleScholarships = (newScholarships) => {
    setScholarships(newScholarships);
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
    <ScholarshipContext.Provider value={{ scholarships, handleScholarships, index, nextPage, prePage }}>
      {children}
    </ScholarshipContext.Provider>
  );
};

export { ScholarshipContext, ScholarshipProvider };
