import React from 'react'
import { RawHTML } from 'react-dom'
import styles from './palette-blog.module.scss'

const PaletteEntry = ({ entry }) => {
    console.log(entry);

    return (
        <article className={styles.paletteBlog}>
          <figure style={{ gridTemplateColumns: "repeat(19, 1fr)" }}>
            {entry.frontmatter.colors.map(({color, width}) => (
                <div style={{ backgroundColor: color, flex: `${width} 0 auto`}}></div> 
            ))}
          </figure>
          <div className={styles.content}>
            <h2>{entry.frontmatter.title}</h2>
            <div className={styles.date}>{entry.frontmatter.date}</div>
            <div dangerouslySetInnerHTML={{ __html: entry.html }} />
          </div>
        </article>
    ) 
}

export default PaletteEntry
