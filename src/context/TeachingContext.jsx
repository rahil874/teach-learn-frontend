import { createContext, useState } from 'react';

export const TeachingContext = createContext();

export const TeachingProvider = ({ children }) => {
  const [teachingData, setTeachingData] = useState({
    topic: '',
    timings: ''
  });

  return (
    <TeachingContext.Provider value={{ teachingData, setTeachingData }}>
      {children}
    </TeachingContext.Provider>
  );
};
