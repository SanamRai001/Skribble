import useSocket from './hooks/useSocket'

const App = () => {
  const {isConnected} = useSocket();
  return (
    <div>is Connected: {isConnected ? "yes": "No"}</div>
  )
}

export default App