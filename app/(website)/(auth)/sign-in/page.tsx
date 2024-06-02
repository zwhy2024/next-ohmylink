import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input'

export default function SignIn() {
  return (
    <div className="w-full pt-[135px] pb-[100px] flex justify-center items-center">
      <div className="w-[90%] max-w-screen-2xl mx-auto relative">
        <div className="w-[90%] max-w-[500px] mx-auto flex flex-col justify-center items-center">
          <h1 className="mb-[35px] font-semibold text-[50px] leading-[1em] capitalize">Sign In</h1>
          <p className="max-w-[300px] text-center mb-[35px] text-[16px] leading-[25px] text-[#929292]">
            Enter your email and password below to access your
            <a href="/" className="px-1.5 text-[#3673fc] border-b">
              oml.lol
            </a>
            account.
          </p>
          <div className="w-full flex flex-col items-center">
            <form className="w-full flex flex-col items-stretch gap-5">
              <Input required type="email" placeholder="Email" />
              <Input required type="password" placeholder="Password" />
              <Button level="primary" type="submit">
                Sign In
              </Button>
              <Button level="secondary" type="button">
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
