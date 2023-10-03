import "./assets/app.css"
import logo from "./assets/logo.svg"

interface DifferentComponent {
  [key: string]: React.ComponentType<any> | JSX.Element
}

const TestPreview: React.FC<{ type: string }> = ({ type }) => {
  // Check if the componentType exists in the DifferentComponent object
  if (differentComponent[type]) {
    const Component = differentComponent[type]
    return (
      <div>{typeof Component === "function" ? <Component /> : Component}</div>
    )
  } else {
    return <div>Component not found</div>
  }
}

const AppContent: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const differentComponent: DifferentComponent = {
  app: AppContent, // Assuming AppContent is a valid React component
  input: <div>Input</div>,
}

export default TestPreview
