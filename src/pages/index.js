import React, { useMemo, useContext } from "react"
import { DataContext } from "../providers/DataProvider"

import { useWindowSize } from "../hooks/useWindowSize"

import Video from '../components/Video'

import Nav from '../components/Nav'
import ArchiveNav from '../components/ArchiveNav'

import Info from "../components/Info"
import Collection from '../components/Collection'
import Chat from '../components/Chat'
import About from '../components/About'

import * as styles from '../styles/index.module.scss' 

// markup
const IndexPage = () => {
  const [data, setData] = useContext(DataContext)
  const size = useWindowSize()
  console.log(size)

  const infoComponent = useMemo(() => {
    if (data.currentInfoComponent === 'info') {
      return <Info />
    } else if (data.currentInfoComponent === 'collection') {
      return <Collection />
    } else if (data.currentInfoComponent === 'chat') {
      return <Chat />
    } else if (data.currentInfoComponent === 'about') {
      return <About />
    } else {
      return <Info />
    }
  })

  return (
    <main className={styles.container}>
      <section className={styles.videoContainer}>
        <Video />
      </section>
      <section className={styles.infoContainer}>
        <ArchiveNav />
        <Nav />
        {infoComponent}
      </section>
    </main>
  )
}

export default IndexPage
