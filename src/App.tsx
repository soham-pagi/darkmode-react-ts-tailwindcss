import { useState } from "react";

type ColorMode = 'light' | 'dark';


function App() {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  function toggleDarkMode() {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={`${colorMode} min-w-96`}>
      <div className="flex flex-col justify-center items-center h-[100dvh] dark:bg-gray-900 rounded">
        <div className="bg-blue-400 p-5 text-center dark:bg-gray-500 rounded">
          <h1 className="text-black text-3xl p-4">Register</h1>
          <form className="flex flex-col gap-4 justify-center items-center p-5 bg-white w-50 sm:w-96 rounded">
            <input type="text" className="bg-gray-200 px-3 py-2 w-full  outline-none rounded" placeholder="First Name" />
            <input type="text" className="bg-gray-200 px-3 py-2 w-full outline-none rounded" placeholder="Last Name" />
            <input type="email" className="bg-gray-200 px-3 py-2 w-full outline-none rounded" placeholder="Email" />
            <button type="button" className="bg-blue-400 w-full p-2 text-white rounded hover:bg-blue-300 active:bg-blue-500 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500 dark:active:bg-gray-700">CREATE</button>
          </form>
        </div>

        <button
          className="absolute p-2 bottom-2 right-2 dark:bg-black dark:text-white rounded-[100%]"
          onClick={toggleDarkMode}>
          {colorMode === 'light' ? 'DRK' : 'LHT'}
        </button>
      </div>
    </div>
  )
}

export default App;
