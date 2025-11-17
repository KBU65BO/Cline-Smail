import { useEffect, useState } from 'react'
import { useLightbox } from './LightboxProvider.jsx'

export default function CaseSlider({ items = [], interval = 5000 }){
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [idx, setIdx] = useState(0)
  const { openLightbox } = useLightbox()

  useEffect(() => {
    if (prefersReduced || items.length <= 1) return
    const t = setInterval(() => setIdx(i => (i + 1) % items.length), interval)
    return () => clearInterval(t)
  }, [items.length, interval, prefersReduced])

  return (
    <div className="slider card">
      {items.map((it, i) => (
        <div key={i} className={i === idx ? 'slide active' : 'slide'}>
          <h3>{it.title}</h3>
          <img src={it.before} alt={`${it.title} before`} onClick={() => openLightbox(it.before, `${it.title} — Before`)} />
          <p className="muted">Before</p>
          <img src={it.after} alt={`${it.title} after`} onClick={() => openLightbox(it.after, `${it.title} — After`)} />
          <p className="muted">After</p>
        </div>
      ))}
      <div style={{display:'flex', gap:8, marginTop:10}}>
        {items.map((_, i) => (
          <button key={i} aria-label={`Go to slide ${i+1}`} onClick={() => setIdx(i)}
            style={{width:10,height:10,borderRadius:999,border:'1px solid #e5e7eb',background:i===idx?'#0ea5e9':'#fff'}} />
        ))}
      </div>
    </div>
  )
}
