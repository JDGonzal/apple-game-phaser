const INIT_IMAGES = [
  { key: 'bg', path: '/assets/bg.png' },
  { key: 'basket', path: '/assets/basket.png' },
];

export function preloadGame ({ load }) {
  INIT_IMAGES.forEach(({ key, path }) => {
    load.image(key, path);
  });
}
