import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <h2>Page not found</h2>
      <h3>What can you do?</h3>
      <ul>
        <li>Check the URL</li>
        <li>Go back</li>
        <li>
          Visit the <Link href="/">homepage</Link>
        </li>
      </ul>
    </main>
  )
}
