import Link from 'next/link'

export default function FirstPost() {
    return <h1 className="title">
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
            
  }
  