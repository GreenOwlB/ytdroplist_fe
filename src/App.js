import "./App.css";
import BaseList from "./modules/BaseList";
import ManualAddVideo from "./modules/ManualAddVideo";
import { VideoProvider } from "./context/videos";
function App() {
  return (
    <div className="App">
      <VideoProvider>
        <BaseList />
        <ManualAddVideo />
      </VideoProvider>
    </div>
  );
}

export default App;
