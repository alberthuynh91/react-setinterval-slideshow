import React, { useState } from 'react';

let intervalID;
let index = 0;

const items = [
  {
    id: 0,
    name: 'Avocado',
    price: '1.99',
    imageUrl: 'images/avocado.jpeg',
  },
  {
    id: 1,
    name: 'Bananas',
    price: '3.99',
    imageUrl: 'images/bananas.jpeg',
  },
  {
    id: 2,
    name: 'Chicken',
    price: '10.99',
    imageUrl: 'images/chicken-breast.jpeg',
  },
];

const App = () => {
  const [delay, setDelay] = useState(1000);
  const [_, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false)
  const currentImage = items[index].imageUrl;

  const handleChange = ({ target: { value } }) => {
    setDelay(value * 1000);
  };

  const handleStart = () => {
    setIsStarted(true)
    intervalID = setInterval(() => {
      if (index < items.length - 1) {
        index++;
        setCurrentIndex(index);
      } else {
        index = 0;
        setCurrentIndex(index);
      }
    }, delay);
  };

  const handleStop = (intervalID) => {
    setIsStarted(false)
    clearInterval(intervalID);
  };

  return (
    <div className="grid place-items-center">
      <img className="object-contain h-96 w-96 mb-6" src={currentImage} />
      Slideshow delay (in seconds)
      <input
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="number"
      />
      <div>
        <button
        className="bg-gray-400 hover:bg-gray-600 text-white text-s font-semibold py-2 px-4 rounded mt-2 disabled:opacity-25 mr-2"
        onClick={() => handleStart()}
        disabled={isStarted}
        >
          Start
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-600 text-white text-s font-semibold py-2 px-4 rounded mt-2 disabled:opacity-25"
          onClick={() => handleStop(intervalID)}
          disabled={!isStarted}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default App;
