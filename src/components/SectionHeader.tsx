type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">{eyebrow}</p>
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>
    </div>
  )
}
