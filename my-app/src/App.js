import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./Build\Test 1.loader.js",
  dataUrl: "./Build\Test 1.data",
  frameworkUrl: "./Build\Test 1.framework.js",
  codeUrl: "./Build\Test 1.wasm",
});

function App() {
  return (
    
    <div className="App">
      <div className ="Unity">
        <Unity unityContext={unityContext} 
        style= {{
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          justifySelf: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}/>  
      </div>

      <div className="HeaderBar">
        <h1>FPS Microgame</h1>
      </div>
    </div>
  );
}

export default App;
