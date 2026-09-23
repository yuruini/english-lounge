type Props = { className?: string; label?: string; position?: string }
export function MediaFrame({ className = '', label = 'EL / DALIAN', position = 'center' }: Props) {
  return <figure className={`media-frame ${className}`} style={{ '--pos': position } as React.CSSProperties}>
    <img src={`${import.meta.env.BASE_URL}assets/images/el-editorial.png`} alt="Friends from the English Lounge community together in Dalian" loading="lazy" />
    <figcaption>{label}</figcaption>
  </figure>
}
