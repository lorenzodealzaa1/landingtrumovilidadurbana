type SectionHeadingProps = {
  title: string
  description?: string
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-pretty text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  )
}
