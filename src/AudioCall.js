import { useRef } from 'react'

const AudioCall = () => {
  const pcLocal = useRef(new RTCPeerConnection(null))
  const pcRemote = useRef(new RTCPeerConnection(null))

  return (<></>)
}

export default AudioCall;