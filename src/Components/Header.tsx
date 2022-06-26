function Header() {
   return (
      <div className={"flex flex-col gap-8 items-center p-8"}>
         <h1 className={"text-4xl capitalize font-bold text-gray-500"}>my notes</h1>
         <button className={"py-4 px-4 rounded-full bg-green-500 text-green-50"}>add new note</button>
      </div>
   )
}

export default Header;