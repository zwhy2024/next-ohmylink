'use client'

import { MaxWidthWrapper } from '@/components/MaxWidthWrapper'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (username) {
      router.push(`/signup?username=${username}`)
    }
  }
  return (
    <MaxWidthWrapper>
      <div className="w-[65%] max-md:w-full flex items-start flex-col mr-auto mb-[150px] max-md:mb-[100px] pt-[135px] max-md:pt-[60px]">
        <section
          aria-label="homepage-intro"
          className="mb-[55px] max-md:mb-[40px] text-left"
        >
          <h1 className="text-[80px] mb-[25px] leading-[1em] font-semibold max-md:text-[45px]">
            One bio link
            <br />
            for everything
          </h1>
          <h2 className="max-w-[650px] text-[28px] max-md:text-[22px] font-light leading-[1.5em] text-[#929292]">
            Share and cross promote your links, music, videos, social media, and
            more on one page.
          </h2>
        </section>
        <section
          aria-label="homepage-signup"
          className="w-full flex flex-col items-start"
        >
          <form
            onSubmit={handleSubmit}
            className="md:min-w-[450px] max-md:min-w-0 w-full"
          >
            <div className="flex w-full relative max-md:flex-col">
              <label
                htmlFor="username"
                className="absolute h-[60px] ml-1 px-3 text-[16px] font-[500] flex justify-center items-center"
              >
                oml.lol/
              </label>
              <input
                type="text"
                required
                spellCheck="false"
                maxLength={20}
                placeholder="username"
                id="username"
                autoCapitalize="none"
                autoCorrect="off"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-none shadow-[0_25px_40px_rgba(0,0,0,0.08)] text-[#1a1a1a] text-[16px] placeholder:text-[#929292] outline-none min-h-[60px] mb-0 pl-[70px] transition-all duration-300 focus:border-l-4 focus:border-[#3673fc] border-l-4 border-transparent"
              />
              <input
                type="submit"
                value="Join for Free"
                className="rounded-none shadow-[0_25px_40px_rgba(0,0,0,0.08)] max-md:w-full font-medium h-[60px] bg-[#3673fc] px-[15px] text-white text-[16px] flex justify-center items-center cursor-pointer"
              />
            </div>
          </form>
        </section>
      </div>
    </MaxWidthWrapper>
  )
}
