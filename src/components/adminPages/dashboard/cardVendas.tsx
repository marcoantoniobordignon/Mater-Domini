type Props = {
    iconURL: string;
    label: string;
    data: number;
};

export const CardVendas = ({ iconURL, label, data }: Props) => {

    let ordemNumericaVendas: string = "";
    let valorMostrado: string = "0";

    if(data / 10 >= 6 && data / 10 < 9) {
        ordemNumericaVendas = "milhão";
        valorMostrado = (data / 1000000).toFixed(2);
    } else if (data / 10 >= 3) {
        ordemNumericaVendas = "mil";
        valorMostrado = (data / 1000).toFixed(2);
    }

    const nome1 = label.split(" ")[0];
    const nome2 = label.split(" ")[1];
    const nome3 = label.split(" ")[2];

    return (
        <div className="relative bg-white pt-30 pl-5 w-70 h-60 shadow-md rounded-lg">
            <div className="absolute flex items-center justify-center bg-black w-20 h-15 top-0 left-0 rounded-tl-md rounded-br-md ">
                <img src={iconURL} alt="ícone" 
                    className="h-95/100 w-auto"/>
            </div>
                <div className="-mt-4 ml-2">
                    <div className="mb-4 text-2xl font-bold ">
                        {label === "% Variação YoY" ? 
                        (
                            <div>
                                <span>{data} %</span>
                                <div id="label" className="mt-2 text-2xl text-gray-400 font-normal">{label}</div>
                            </div>
                            
                        ) :
                        (
                            <div>
                                <span>R$ {valorMostrado} {ordemNumericaVendas}</span>
                                <div id="label" className="mt-2 text-2xl text-gray-400 font-normal">{nome1} <br /> {nome2} {nome3}</div>
                            </div>
                        )
                        }
                        
                    </div>
                </div>
        </div>
    );
};