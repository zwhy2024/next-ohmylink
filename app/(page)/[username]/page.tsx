'use client'
import { redirect, useParams, usePathname } from 'next/navigation'

export default () => {
  const path = usePathname()
  const params = useParams<{username: string}>()

  if (!path.startsWith('/@')) {
    const newPath = '/@' + path.replace(/^\//, '')
    return redirect(newPath)
  }

  const profile = String(params.username)
  const username = decodeURIComponent(profile).substring(1)

  return (
    <div className='w-full min-h-screen'>
      <h1 className='text-4xl font-bold mb-4'>
        Hi, {username}
      </h1>
    </div>
  )
}
