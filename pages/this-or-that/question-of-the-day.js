import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function QuestionOfTheDay() {
    return <Layout>
              <div className="container">
                <h1 className="title">
                  <Head>
                    <title>THIS or THAT</title>
                  </Head>
                  <Link href="/this-or-that/question-of-the-day"><a>TEA</a></Link> or{' '}
                  <Link href="/this-or-that/question-of-the-day"><a>COFFEE</a></Link>
                  <style jsx>{`
                  .title a {
                    color: #0070f3;
                    text-decoration: none;
                  }
                  .title a:hover,
                  .title a:focus,
                  .title a:active {
                    text-decoration: underline;
                  }`}</style>
                </h1>
              </div>
            </Layout>
            
  }
  