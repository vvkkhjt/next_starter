import React from 'react'

import css from '../styles/index.less'

export default class Home extends React.Component {
    static async getInitialProps({ req }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent }
    }

    render() {
        return (
            <div className={css.example}>
                <p>{this.props.userAgent}</p>
                <img src="static/1.jpg" style={{width: "20%"}}/>
            </div>
        )
    }
}
