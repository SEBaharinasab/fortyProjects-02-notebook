interface IProps {
   bgColor: string
}
function Note(props: IProps) {
   return (
      <div className={"w-64 min-w-min lg:h-72 h-96 flex flex-col items-stretch rounded-2xl shadow-md overflow-hidden"} style={{ backgroundColor: props.bgColor }}>
         <div className="text flex-1"><textarea className={"w-full h-full p-4 outline-none resize-none overflow-visible bg-transparent"} /></div>
         <div className="management flex items-center justify-between gap-3 bg-gray-300 border-t border-gray-500 px-4">
            <div className="colors flex gap-[6px]">
               {["fuchsia", "violet", "sky", "emerald", "amber", "rose"].map(color => (
                  <button className={"border-2 lg:w-4 w-6 lg:h-4 h-6 rounded-full " +
                     ("bg-" + color + "-800 ") + ("border-" + color + "-800 ")} />
               ))}
            </div>
            <button className="delete p-2">delete</button>
         </div>
      </div>
   )
}

export default Note