import React from 'react' 
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function Overlay() {
  return (
    <div
      className='text-white'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}>
      <a
        href='https://github.com/AnEntrypoint'
        style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>
        probably emerged from an entrypoint.
      </a>
      <a
        href='https://247420.xyz'
        style={{ position: 'absolute', top: 40, left: 340, fontSize: '13px' }}>
        Press <kbd className='kbd kbd-sm'>F</kbd> to pay respects.
      </a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Overlay />
  </React.StrictMode>
)
