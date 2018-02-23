import React from 'react'
import styles from './palette-blog-entry.module.scss'
import {Color, Palette} from './palette'

const PaletteBlogEntry = ({ entry }) => {
    return (
        <article className={styles.paletteBlog}>
            <Palette width={500} height={500}>
                {entry.frontmatter.colors.map(({color, width}) => (
                    <Color hex={color} size={width} />
                ))}
            </Palette>
            <div className={styles.content}>
                <h2>{entry.frontmatter.title}</h2>
                <div className={styles.date}>{entry.frontmatter.date}</div>
                <div dangerouslySetInnerHTML={{ __html: entry.html }} />
            </div>
        </article>
    ) 
}

export default PaletteBlogEntry
