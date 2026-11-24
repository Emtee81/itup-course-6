import Link from 'next/link'

export default function ItemNotFound() {
  return (
    <main>
      <h1>Item not found</h1>
      <Link href="/error-demo">Back to /error-demo</Link>
      <Link href="/">Home</Link>
    </main>
  )
}
