
import './App.css';
import Webcam from "react-webcam";
function App() {
const styles={
  width:"800px",
  height:"600px"
}
const takePicture=()=>{
  let picture=Webcam.getScreenshot({width: 1920, height: 1080});
  document.querySelector('a').herf=picture;
  
}

  return (
    <>
     <div id='webCame' autoPlay playsInline  styles={styles}>
     < Webcam/>
     </div>
     <canvas id='canvas'>
  
     </canvas>
   
     <button download class='a'>snap</button>
    </>
  );
}

export default App;
