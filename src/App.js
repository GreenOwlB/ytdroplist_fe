import "./App.css";
import BaseList from "./modules/BaseList";
// import ManualAddVideo from "./modules/ManualAddVideo";
import DropVideo from "./modules/DropVideo";
import { VideoProvider } from "./context/videos";
function App() {
  return (
    <div className="App">
      <VideoProvider>
        <BaseList />
        {/* <ManualAddVideo /> */}
        <DropVideo />
      </VideoProvider>
    </div>
  );
}

export default App;
