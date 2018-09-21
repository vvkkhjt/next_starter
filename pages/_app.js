import App, {Container} from 'next/app'
import React from 'react'

import '../assets/styles.less'
import Layout from '../layout/default'
import redirect from '../lib/redirect'

export default class extends App {
    static async getInitialProps (context) {
        const { Component, router, ctx } = context;

        if(router.route === "/"){
            redirect(ctx,"/home")
        }
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render () {
        const {Component, pageProps} = this.props
        return (
            <Container>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}
