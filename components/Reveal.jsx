import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0, as:Tag = 'div', ...props }){
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)){
      el.classList.add('in'); return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){ el.classList.add('in'); io.unobserve(el) }
      })
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const delayClass = delay ? ` del-${delay}` : ''
  return <Tag ref={ref} className={`reveal${delayClass} ${className}`.trim()} {...props}>{children}</Tag>
}
