import { peerjs } from 'peerjs'
import { useRef } from 'react'

const AudioCall = () => {
  let peer = null;
  console.log(peer)
  const videRef = useRef(null)
  const remoteVidRef = useRef(null)

  const callPeer = () => {
    console.log('callllllllll')
    peer = new peerjs.Peer('40a251b2-97f6-4c99-8a62-255a883638')
    navigator.mediaDevices.getUserMedia(
      { video: true, audio: true }).then(
      (stream) => {
        console.log(peer)
        console.log('oN streaming');
        console.log(stream)
        
        const calle = peer.call('a8ea239e-8d0e-4d0f-8625-30efe1d4972d', stream);
        console.log(peer)
        videRef.current.srcObject = stream
        console.log(calle, '------------')
        calle.on("stream", (remoteStream) => {
          const videoTracks = remoteStream.getVideoTracks();
          console.log(`Using video device: ${videoTracks[0].label}`);
          remoteVidRef.current.srcObject = remoteStream;
          console.log('streaming going On..........')
        });
      }).catch(
      (err) => {
        console.error("Failed to get local stream", err);
      });
  }

  return (<>
    <video style={ { width: "300px", height: "300px"  }} ref={videRef} id="gum-local" autoPlay playsInline ></video>
    <video style={ { width: "300px", height: "300px"  }} ref={remoteVidRef} id="gum-remote" autoPlay playsInline ></video>
    <button onClick={() => callPeer()}>
      Call
    </button>

    <button>
      Answer
    </button>
  </>)
}

export default AudioCall;