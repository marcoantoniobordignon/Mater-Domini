type PropsTitleandSubtitle = {
    title: string,
    subtitle: string,
    sizeTitle: string,
    sizeSubtitle: string,
    colorTitle?: string,
    weightTitle?: string,
    colorSubtitle?: string,
    weightSubtitle?: string
}

type PropsOnlyTitle = {
    title: string,
    sizeTitle: string,
    colorTitle?: string,
    weightTitle?: string
}

export const TitleandSubtitle = ({ title, subtitle, sizeTitle, sizeSubtitle, colorTitle, weightTitle, colorSubtitle, weightSubtitle}: PropsTitleandSubtitle) => {
    return (
        <>
            <h1 style={{ fontSize: sizeTitle, color: colorTitle, fontWeight: weightTitle}} className="title1 text-primary font-normal text-center">{title}</h1>
            <h2 style={{ fontSize: sizeSubtitle, color: colorSubtitle, fontWeight: weightSubtitle }} className="title2 text-[22px] text-[#201B1B]/70 font-normal text-center">{subtitle}</h2>
        </>
    )
}

export const OnlyTitle = ({ title, sizeTitle, colorTitle, weightTitle }: PropsOnlyTitle) => {
    return (
        <h1  style={{ fontSize: sizeTitle, color: colorTitle, fontWeight: weightTitle }} className="title1 text-primary font-normal text-center">{title}</h1>
    )
}