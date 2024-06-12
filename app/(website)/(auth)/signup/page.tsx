'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  })
  const params = useSearchParams()
  const username = params.get('username')

  useEffect(() => {
    if (username) {
      setFormData({ ...formData, username })
    }
  }, [username])

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-stretch">
        <input
          type="text"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="username"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}
