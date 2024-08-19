import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
      name: 'Beaver Creek',
      cover: 'https://via.placeholder.com/1024x1024.png?text=Beaver+Creek',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Daylight',
      cover: 'https://via.placeholder.com/1024x1024.png?text=Daylight',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Keep Going',
      cover: 'https://via.placeholder.com/1024x1024.png?text=Keep+Going',
      artist: 'Swørn',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Nightfall',
      cover: 'https://via.placeholder.com/1024x1024.png?text=Nightfall',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Reflection',
      cover: 'https://via.placeholder.com/1024x1024.png?text=Reflection',
      artist: 'Swørn',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Under the City Stars',
      cover:
        'https://via.placeholder.com/1024x1024.png?text=Under+the+City+Stars',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
    // ADD MORE HERE
  ];
}

export default chillHop;
