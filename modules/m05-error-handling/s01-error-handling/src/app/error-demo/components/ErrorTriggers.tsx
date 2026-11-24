'use client'

import { useState, useTransition } from 'react'
import styles from '../error-demo.module.css'

export default function ErrorTriggers() {
  const [error, setError] = useState<Error | null>(null)
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition()

  if (error) throw error
  if (count >= 5) throw new Error('Counter reached 5')

  function handleAsyncError() {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      throw new Error('Network: the request timed out')
    })
  }

  function handleEventHandlerError() {
    throw new Error('Thrown in an event handler')
  }

  return (
    <div className={styles.buttons}>
      <button
        className={`${styles.button} ${styles.runtime}`}
        onClick={() => setError(new Error('Something broke while rendering'))}
      >
        Runtime error
      </button>
      <button className={`${styles.button} ${styles.async}`} onClick={handleAsyncError} disabled={isPending}>
        {isPending ? 'Loading...' : 'Async error (network)'}
      </button>
      <button
        className={`${styles.button} ${styles.network}`}
        onClick={() => setError(new Error('Network: failed to reach the API'))}
      >
        Network error
      </button>
      <button
        className={`${styles.button} ${styles.auth}`}
        onClick={() => setError(new Error('Auth: session expired'))}
      >
        Auth error
      </button>
      <button className={styles.button} onClick={() => setCount((c) => c + 1)}>
        Counter: {count} (throws at 5)
      </button>
      <button className={styles.button} onClick={handleEventHandlerError}>
        Error in event handler (not caught)
      </button>
    </div>
  )
}
