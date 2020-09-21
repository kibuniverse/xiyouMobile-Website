import Link from 'next/link'
export default function Home() {
  return (
    <div className="container">
      <a href="https://nextjs.org">Next.js!</a>
      <Link href='/posts/first'>
        <a href="">link to first</a>
      </Link>
      <style jsx>{`
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
