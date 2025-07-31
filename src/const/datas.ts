import bolinhaQueijo from "../assets/image/bolinhaQueijo.png";
import coxinha from "../assets/image/coxinha.png";
import kibe from "../assets/image/kibe.png";
import salsicha from "../assets/image/salsicha.jpg";
import calabresa from "../assets/image/calabresa.jpg";
import misto from "../assets/image/misto.jpg";
import brigadeiro from "../assets/image/brigadeiro.png";
import boloFesta from "../assets/image/boloFesta.png";
import maracuja from "../assets/image/maracuja.png";
import beijinho from "../assets/image/beijinho.jpg";
import brigadeiroDocinho from "../assets/image/brigadeiroDocinho.png";
import cajuzinho from "../assets/image/cajuzinho.jpg";
import mistoDocinho from "../assets/image/mistoDocinho.jpg";

export type DataPieType = {
    image: string;
    name: string;
    description: string;
}

export type PiesType = {
    dataPies: DataPieType[];
    valores: {tamanho:number, preco:number}[];
}

export type DataItemType = {    
    name: string;
    image: string;
}

export type kitsType = {
    nome: string;
    pessoas: string;
    salgados: number;
    docinhos: number;
    tamanhoTorta: number;
    preco: string;
    destaque: string;
}

export const pies: PiesType = {
    dataPies: [
        {
            image: brigadeiro,
            name: "Brigadeiro",
            description: "Bolo de chocolate recheado com brigadeiro, coberto com chocolate cremoso e finalizado com granulado."
        },
        {
            image: boloFesta,
            name: "Bolo festa",
            description: "Bolo de baunilha recheado com doce de leite e ameixa, coberto com chantilly, coco ralado e um toque de doce de leite."
        },
        {
            image: maracuja,
            name: "Maracujá c/chantilly",
            description: "Bolo de baunilha recheado e coberto com creme de maracujá e chantilly."
        }
    ],
    valores: [
        {
            tamanho: 20,
            preco: 105
        },
        {
            tamanho: 25,
            preco: 125
        },
        {
            tamanho: 30,
            preco: 155
        }
    ],

};

export const salgados: DataItemType[] = [
    {
        name: "Misto",
        image: misto
    },
    {
        name: "Bolinha de Queijo",
        image: bolinhaQueijo
    },
    {
        name: "Kibe",
        image: kibe
    },
    {
        name: "Calabresa",
        image: calabresa
    },
    {
        name: "Coxinha de Frango",
        image: coxinha
    },
    {
        name: "Enroladinho de Salsicha",
        image: salsicha
    }
];

export const docinhos: DataItemType[] = [
    {
        name: "Misto",
        image: mistoDocinho
    },
    {
        name: "Beijinho",
        image: beijinho
    },
    {
        name: "Brigadeiro",
        image: brigadeiroDocinho
    },
    {
        name: "Cajuzinho",
        image: cajuzinho
    }
]

export const kits: kitsType[] = [
    {
        nome: "Kit Pequeno",
        pessoas: "10 a 15 pessoas",
        salgados: 120,
        docinhos: 45,
        tamanhoTorta: 20,
        preco: "170,00",
        destaque: "Mais pedido!",
    },
    {
        nome: "Kit Médio",
        pessoas: "20 a 25 pessoas",
        salgados: 200,
        docinhos: 75,
        tamanhoTorta: 25,
        preco: "240,00",
        destaque: "Equilíbrio perfeito",
    },
    {
        nome: "Kit Grande",
        pessoas: "30 a 35 pessoas",
        salgados: 280,
        docinhos: 105,
        tamanhoTorta: 30,
        preco: "320,00",
        destaque: "Para grandes festas",
    },
];