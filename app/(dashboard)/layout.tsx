export default ({children}: {children: React.ReactNode}) => {
  return (
    <div className="grid grid-flow-col">
      <aside className="w-[230px] h-svh bg-pink-400"></aside>
      {children}
    </div>
  )
}