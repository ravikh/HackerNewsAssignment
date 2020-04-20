// pages/_app.js
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../app/theme';
import ModernNormalize from '../app/theme/globalStyle';
import '../app/theme/tokens/index.css';
import "flexboxgrid";

import { PAGE_TITLE, PAGE_DESCRIPTION } from '../app/constants';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <title>{PAGE_TITLE}</title>
                    <meta charSet="UTF-8" />
                    <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="description" content={PAGE_DESCRIPTION} />
                </Head>
                
                <React.Fragment>
                    <ModernNormalize />
                </React.Fragment>

                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        )
    }
}