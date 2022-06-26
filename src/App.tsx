import Header from "./Components/Header"
import Notes from "./Components/Notes"
function App() {
  return (
    <div className={"bg-gradient-to-br from-gray-400 via-gray-200 to-gray-400 bg-fixed min-h-screen"} >
      <div className={"container mx-auto "}>
        <Header />
        <Notes />
      </div>
    </div>
  );
}

export default App;
