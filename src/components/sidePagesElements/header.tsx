import { container_config } from "@/utils/container_config"

export const HeaderSidePages = () => {
    return (
        <header className="header-conta w-full absolute top-0">
            <div className={container_config}>
                <div className="flex justify-between items-center h-20">
                    <div className="logo">
                        <a href="/">
                        <img src="https://cdn.dooca.store/162084/files/logo-mater-domini-fundo-transparente-1.png?v=1760241684&webp=0"
                            alt="logo"
                            className="w-80 h-auto"/>
                        </a>
                    </div>
                    <div className="info">
                        <div className="tel text-lg font-bold text-right">(65) 99335-6858</div>
                        <div className="horario-de-funcionamento text-lg">Segunda a Sábado, das 9h às 17h</div>
                    </div>
                </div>
            </div>
        </header>
    )
}