import { container_config } from "@/utils/container_config";

export const FooterSidePages = () => {
    return (
        <footer className="w-full h-20 border-t border-t-black/15">
            <div className={`${container_config} flex items-center justify-between`}>
                <div>
                    <div>Mater Domini - , - Bosque da Saúde - Cuiabá / MT</div>
                    <div>CNPJ: 43.831.385/0001-41 - Mater Domini</div>
                </div>
                <div>
                    <div>Desenvolvido por Marco Bordignon</div>
                </div>
            </div>
        </footer>
    )
};