import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import * as footerStyles from './styles/footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`query{site{siteMetadata{author}}}`)

    return (
        <footer className={footerStyles.footer}>
            <p>
                Created by {data.site.siteMetadata.author} | 4/20/2021 &copy;
            </p>
        </footer>
    )
}

export default Footer