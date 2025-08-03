import bolinhaQueijo from "../assets/image/salgados/bolinhaQueijo.png";
import coxinha from "../assets/image/salgados/coxinha.png";
import kibe from "../assets/image/salgados/kibe.png";
import salsicha from "../assets/image/salgados/salsicha.jpg";
import calabresa from "../assets/image/salgados/calabresa.jpg";
import mistoSalgado from "../assets/image/salgados/misto.jpg";
import brigadeiroBolo from "../assets/image/bolos/brigadeiro.png";
import boloFesta from "../assets/image/bolos/boloFesta.png";
import maracuja from "../assets/image/bolos/maracuja.png";
import maracujaCandy from "../assets/image/bolos/maracujaChocolateCandy.png";
import limaoCandy from "../assets/image/bolos/limaoCandy.png";
import negrescoCandy from "../assets/image/bolos/negrescoCandy.png";
import boloFestaCandy from "../assets/image/bolos/boloFestaCandy.png";
import kinderOvoCandy from "../assets/image/bolos/kinderOvoCandy.png";
import florestaNegraCandy from "../assets/image/bolos/florestaNegraCandy.png";
import mousseChocolateCandy from "../assets/image/bolos/mousseChocolateCandy.png";
import beijinho from "../assets/image/docinhos/beijinho.jpg";
import brigadeiroDocinho from "../assets/image/docinhos/brigadeiro.png";
import cajuzinho from "../assets/image/docinhos/cajuzinho.jpg";
import mistoDocinho from "../assets/image/docinhos/mistoDocinho.jpg";
import { v4 as uuidv4, type UUIDTypes } from "uuid";

export type DataPie = {
    image: string;
    name: string;
    description: string;
};

export type ValuesPies = {
    tamanho: number,
    preco: number
};

type PieType = {
    candy:
    {
        id: UUIDTypes;
        pies: DataPie[];
        valores: ValuesPies[];
    };
    normal:
    {
        id: UUIDTypes;
        pies: DataPie[];
        valores: ValuesPies[];
    };
}

export type DataItemType = {
    name: string;
    image: string;
}

export type KitsType = {
    id: UUIDTypes;
    nome: string;
    pessoas: string;
    salgados: number;
    docinhos: number;
    tamanhoTorta: number;
    preco: string;
    destaque: string;
    favorite: boolean;
}

export const optionsPies: PieType = {
    candy: {
        id: uuidv4(),
        pies: [
            {
                image: maracujaCandy,
                name: "Maracujá c/chocolate",
                description: ""
            },
            {
                image: limaoCandy,
                name: "Limão c/chocolate",
                description: ""
            },
            {
                image: negrescoCandy,
                name: "Negresco c/chocolate",
                description: ""
            },
            {
                image: boloFestaCandy,
                name: "Bolo festa c/chocolate",
                description: ""
            },
            {
                image: kinderOvoCandy,
                name: "Kinder Ovo c/chocolate",
                description: ""
            },
            {
                image: florestaNegraCandy,
                name: "Floresta Negra",
                description: ""
            },
            {
                image: mousseChocolateCandy,
                name: "Mousse c/chocolate",
                description: ""
            }
        ],
        valores: [
            {
                tamanho: 15,
                preco: 52.50
            },
        ],
    },
    normal: {
        id: uuidv4(),
        pies:
            [
                {
                    image: brigadeiroBolo,
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
    }
};



export const salgados: DataItemType[] = [
    {
        name: "Misto",
        image: mistoSalgado
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

export const kits: KitsType[] = [
    {
        id: uuidv4(),
        nome: "Festa na caixa",
        pessoas: "Até 4 pessoas",
        docinhos: 20,
        salgados: 40,
        preco: "99.00",
        tamanhoTorta: 15,
        destaque: "Mais economico!",
        favorite: false,

    },
    {
        id: uuidv4(),
        nome: "Kit Pequeno",
        pessoas: "10 a 15 pessoas",
        salgados: 120,
        docinhos: 45,
        tamanhoTorta: 20,
        preco: "170,00",
        destaque: "Mais pedido!",
        favorite: true,
    },
    {
        id: uuidv4(),
        nome: "Kit Médio",
        pessoas: "20 a 25 pessoas",
        salgados: 200,
        docinhos: 75,
        tamanhoTorta: 25,
        preco: "240,00",
        destaque: "Equilíbrio perfeito",
        favorite: false,
    },
    {
        id: uuidv4(),
        nome: "Kit Grande",
        pessoas: "30 a 35 pessoas",
        salgados: 280,
        docinhos: 105,
        tamanhoTorta: 30,
        preco: "320,00",
        destaque: "Para grandes festas",
        favorite: false,
    },
];