import PageAnimation from "@/components/animation/page-animation"

const TemplatePage = ({children}: {children: React.ReactNode}) => {
    return (
        <PageAnimation>
            {children}
        </PageAnimation>
    )
}

export default TemplatePage