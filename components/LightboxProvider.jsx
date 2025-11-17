import { createContext, useContext, useState } from 'react'

const LightboxContext = createContext(null)

export function useLightbox(){
  return useContext(LightboxContext)
}

export default function LightboxProvider({ children }){
  const [lightbox, setLightbox] = useState({ open:false, src:'', caption:'' })
  const openLightbox = (src, caption='') => setLightbox({ open:true, src, caption })
  const closeLightbox = () => setLightbox({ open:false, src:'', caption:'' })

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      {lightbox.open && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="lightbox-close" aria-label="Close" onClick={closeLightbox}>×</button>
          <img src={lightbox.src} alt={lightbox.caption} onClick={(e)=>e.stopPropagation()} />
          {lightbox.caption && <p className="lightbox-caption">{lightbox.caption}</p>}
        </div>
      )}
    </LightboxContext.Provider>
  )
}

export { LightboxContext }
