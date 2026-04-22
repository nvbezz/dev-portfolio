import { TimelineItem } from "@/types"
import { FadeIn } from "@/components/ui/FadeIn"

type TimelineProps = {
  items: TimelineItem[]
}

export const Timeline = ({ items }: TimelineProps) => (
  <ol className="relative border-l border-border">
    {items.map((item, index) => (
      <FadeIn key={index} delay={index * 0.1}>
      <li className="mb-8 ml-6 last:mb-0">
        <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg-primary" />
        <p className="mb-1 text-xs font-medium text-text-muted">{item.date}</p>
        <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
        <p className="mb-1 text-sm text-accent">{item.subtitle}</p>
        {item.description && (
          <p className="text-sm text-text-muted">{item.description}</p>
        )}
      </li>
      </FadeIn>
    ))}
  </ol>
)
