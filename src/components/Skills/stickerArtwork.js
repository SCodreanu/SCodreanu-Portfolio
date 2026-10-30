// Vector source: same aspect ratio as its card; no upscaled bitmap.
export function stickerArtwork(width, height) {
  const w = Math.max(1, Math.round(width));
  const h = Math.max(1, Math.round(height));
  const size = Math.min(w * .16, 70);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="#101820"/>
    <rect x="12" y="12" width="${Math.max(1,w-24)}" height="${Math.max(1,h-24)}" rx="12" fill="none" stroke="#378bcb" stroke-width="1"/>
    <path d="M${w-48} 0H${w}V48Z" fill="#378bcb"/>
    <text x="${w/2}" y="${h/2-8}" text-anchor="middle" fill="#f8fafc" font-family="Arial,sans-serif" font-size="${size}" font-weight="800">PEEL</text>
    <text x="${w/2}" y="${h/2+size}" text-anchor="middle" fill="#38bdf8" font-family="Arial,sans-serif" font-size="${size}" font-weight="800">ME!</text>
  </svg>`;
  return { type: 'image', src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`, padding: 0, textureMaxEdge: Math.min(1536, Math.max(768, Math.ceil(Math.max(w,h)*Math.min(window.devicePixelRatio || 1,2)))) };
}
