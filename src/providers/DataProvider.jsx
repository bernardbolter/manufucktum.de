import React, { useState, useEffect, createContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const manuData = useStaticQuery(graphql`
    query ManuQuery {
        allManudataJson {
          edges {
            node {
              artist {
                bio
                birthcity
                birthyear
                name
                socialmedia {
                  instagram
                  website
                }
                workcity
              }
              artwork {
                description
                end_date
                materials
                start_date
                title
                video
              }
              id
              jsonId
              nft {
                id
              }
              slug
            }
          }
        }
      }
    `)
    console.log(manuData)

    const [data, setData] = useState({
        viewArchiveNav: false,
        manufucktum: []
    })

    useEffect(() => {
        const rawData = []
        if (manuData.allManudataJson.edges.length !== 0) {
            manuData.allManudataJson.edges.map(man => {
                rawData.push(man.node)
            })
        }
        setData(state => ({ ...state, manufucktum: rawData }))
    }, [manuData])

    return (
        <DataContext.Provider
            value={[data, setData]}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider