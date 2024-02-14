interface CustomerLayoutProps {
    children: React.ReactNode,
    analytica: React.ReactNode,
    revenue: React.ReactNode
}

export default function CustomerLayout ({ children, analytica, revenue }: CustomerLayoutProps) {
  return (
    <div>
        <h1 className="text-4xl">Customer Layout</h1>
        <div>
            <div>{children}</div>
            <div>ghghjmhk</div>
            aaa
            <div>{analytica}</div>
            aa
            <div>{revenue}</div>
            aa
        </div>
    </div>
  )
}