import Head from 'next/head'

export default function Layout({children, title}) {
    return (
        <div>
            <Head>
                <title>eCommerce {title? `| ${title}` : ''}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>{children}</div>
        </div>
    );
}