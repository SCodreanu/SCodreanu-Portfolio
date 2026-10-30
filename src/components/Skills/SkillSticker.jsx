import { useEffect, useRef, useState } from 'react';
import { stickerArtwork } from './stickerArtwork';

const FORGE_URL = 'https://sticker.oooo.so/embed/sticker-forge.es.js';
let forgeModule;
const loadForge = () => {
  if (!forgeModule) forgeModule = import(/* @vite-ignore */ FORGE_URL).catch((error) => { forgeModule = undefined; throw error; });
  return forgeModule;
};

export default function SkillSticker({ cardRef, headingRef, title }) {
  const mountRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '350px 0px', threshold: 0 });
    observer.observe(cardRef.current);
    return () => { observer.disconnect(); };
  }, [cardRef]);

  useEffect(() => {
    if (!visible || revealed) return;
    setReady(false);
    let cancelled = false;
    let instance;
    let observer;
    let resizeTimer;
    const mount = mountRef.current;
    const card = cardRef.current;
    const reveal = () => { setRevealed(true); headingRef.current?.focus({ preventScroll: true }); };
    const detached = () => reveal();
    const error = () => { if (!cancelled) { setFailed(true); setReady(false); } };
    mount.addEventListener('detachcomplete', detached);
    mount.addEventListener('error', error);
    async function init() {
      try {
        const { createSticker } = await loadForge();
        if (cancelled) return;
        const width = card.clientWidth;
        const height = card.clientHeight;
        const created = await createSticker(mount, {
          source: stickerArtwork(width, height),
          display: { width, height },
          outline: { width: 0 },
          tilt: 0, wind: 0, quality: 'medium',
          sound: { enabled: true, volume: 0.55 },
          shadow: { opacity: 0.2, blur: 16, distance: 10 },
          peel: { residue: false, surfaceShadow: true, stiffness: 0.72, detachThreshold: 0.74, release: 'snap' },
        });
        if (cancelled) { created.destroy(); return; }
        instance = created;
        instance.setRenderScale(Math.min(window.devicePixelRatio || 1, 2));
        const canvas = mount.querySelector('canvas');
        canvas?.setAttribute('aria-label', `Sticker ${title}: trascina un bordo, usa le frecce oppure il pulsante Mostra competenze`);
        let lastWidth = width;
        let lastHeight = height;
        observer = new ResizeObserver(() => {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(async () => {
            if (cancelled || !instance) return;
            const width = card.clientWidth;
            const height = card.clientHeight;
            if (width === lastWidth && height === lastHeight) return;
            lastWidth = width; lastHeight = height;
            instance.setOptions({ display: { width, height } });
            try { await instance.setSource(stickerArtwork(width, height)); } catch { error(); }
          }, 150);
        });
        observer.observe(card);
        setReady(true);
      } catch { error(); }
    }
    init();
    return () => {
      cancelled = true;
      clearTimeout(resizeTimer);
      observer?.disconnect();
      mount.removeEventListener('detachcomplete', detached);
      mount.removeEventListener('error', error);
      instance?.destroy();
    };
  }, [visible, revealed, cardRef, headingRef, title]);

  const reveal = () => {
    setRevealed(true); setReady(false);
    headingRef.current?.focus({ preventScroll: true });
  };
  const active = visible && !revealed;
  return (
    <>
      {!revealed && <div className="sticker-overlay">
        <div className={`sticker-cover ${active && ready ? 'sticker-cover-hidden' : ''}`} aria-hidden="true"><span>PEEL<br /><strong>ME!</strong></span></div>
        {active && <div className="sticker-renderer" ref={mountRef} />}
        <div className="sticker-actions">
          {ready && <span className="sticker-hint" aria-hidden="true">Afferra un bordo e strappa ↗</span>}
          <button type="button" onClick={reveal} aria-label={`Mostra competenze: ${title}`}>Mostra competenze <span aria-hidden="true">↗</span></button>
          {active && !ready && !failed && <span role="status">Caricamento effetto…</span>}
          {failed && <span role="status">Effetto non disponibile. Puoi mostrare le competenze.</span>}
        </div>
      </div>}
      {revealed && <button className="sticker-restore" type="button" onClick={() => { setRevealed(false); setFailed(false); setReady(false); requestAnimationFrame(() => cardRef.current?.querySelector('.sticker-actions button')?.focus({ preventScroll: true })); }}>Rimetti sticker <span aria-hidden="true">↺</span></button>}
    </>
  );
}
