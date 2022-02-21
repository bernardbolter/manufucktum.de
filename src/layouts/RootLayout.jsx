import React from 'react'
import DataProvider from '../providers/DataProvider'

const RootLayout = ({ element }) => (
    <DataProvider>
        {element}
    </DataProvider>
)

export default RootLayout