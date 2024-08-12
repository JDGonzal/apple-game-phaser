const INIT_IMAGES = [
  { key: 'bg', path: '/assets/bg.png' },
  { key: 'basket', path: '/assets/basket.png' },
  { key: 'apple', path: '/assets/apple.png' },
  { key: 'money', path: '/assets/money.png' },
];

const INIT_AUDIOS = [
  { key: 'coin', path: '/assets/coin.mp3' },
  { key: 'bgMusic', path: '/assets/bgMusic.mp3' },
];

export function preloadGame ({ load }) {
  INIT_IMAGES.forEach(({ key, path }) => {
    load.image(key, path);
  });

  INIT_AUDIOS.forEach(({ key, path }) => {
    load.audio(key, path);
  });
}
