import React, { useState, createContext } from 'react'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        viewArchiveNav: false
    })

    return (
        <DataContext.Provider
            value={[data, setData]}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider