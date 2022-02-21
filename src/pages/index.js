import React, { useContext } from "react"
import { DataContext } from "../providers/DataProvider";

import { useWindowSize } from "../hooks/useWindowSize";

import Video from '../components/Video';
import Info from "../components/Info";

import * as styles from '../styles/index.module.scss' 

// markup
const IndexPage = () => {
  const [data, setData] = useContext(DataContext)
  const size = useWindowSize()
  console.log(size)

  return (
    <main className={styles.container}>
      <section className={styles.videoContainer}>
        <Video />
      </section>
      <section className={styles.infoContainer}>
        <Info />
      </section>
      <p>MANUFUCKTUM</p>
    </main>
  )
}

export default IndexPage
