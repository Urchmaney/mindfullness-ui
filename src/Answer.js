import { peerjs } from 'peerjs'
import { useRef } from 'react'

const Answer = () => {
  
  const videRef = useRef(null)
  const remoteVidRef = useRef(null)
  

  const answerCall = () => {
    const peer = new peerjs.Peer('a8ea239e-8d0e-4d0f-8625-30efe1d4972d')
    peer.on("call", (call) => {
      console.log('Been Called................')
      navigator.mediaDevices.getUserMedia(
        { video: true, audio: true }
      ).then(
        (stream) => {
          console.log('answering..............')
          videRef.current.srcObject = stream;
          call.answer(stream); // Answer the call with an A/V stream.
          call.on("stream", (remoteStream) => {
            // Show stream in some <video> element.
            const videoTracks = remoteStream.getVideoTracks();
            console.log(`Using video device: ${videoTracks[0].label}`);
            remoteVidRef.current.srcObject = remoteStream;
            console.log('streaming going On..........')
            console.log('Recieving.............')
          });
        }).catch((err) => {
          console.error("Failed to get local stream", err)
        });
    });
  }

  return (<>
     <video style={ { width: "300px", height: "300px"  }} ref={videRef} id="gum-local" autoPlay playsInline ></video>
     <video style={ { width: "300px", height: "300px"  }} ref={remoteVidRef} id="gum-remote" autoPlay playsInline ></video>
    <p>
      <button onClick={() => answerCall()}> Answer</button>
      Answering
    </p>
  </>)
}

export default Answer;