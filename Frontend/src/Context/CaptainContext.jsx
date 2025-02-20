import { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();



// Create the context provider component
const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to update captain status
    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };


    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;

