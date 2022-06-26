import Note from "./Note";

function Notes() {
   return (
      <div className={"flex flex-wrap justify-center gap-10 pb-10"}>
         <Note bgColor={"#0369a1"} />
         <Note bgColor={"#4d7c0f"} />
         <Note bgColor={"#be123c"} />
         <Note bgColor={"#b45309"} />
         <Note bgColor={"#6d28d9"} />
         <Note bgColor={"#047857"} />
         <Note bgColor={"#a21caf"} />
      </div>
   )
}

export default Notes;