import { Dialog, Select } from "@radix-ui/themes";
import { useContext, useState } from "react";
import { notify } from "../../func/notify";
import type { ExtraPieType, OrderToCartType } from "../../hooks/useCart";
import { submitMessageWhatsApp, type MessageWpp } from "../../func/wtt";
import { ControlComponentsContext } from "../CreateContext";

type DialogUserProps = {
    setOpenModal: (open: boolean) => void;
    openModal: boolean;
    order: OrderToCartType[];
    extraPie: ExtraPieType[];
}

export function DialogUser({ openModal, order, setOpenModal, extraPie }: DialogUserProps) {

    const { removeAllItemToCart, setModalCart } = useContext(ControlComponentsContext)
    const payment = ["Pix/Debito", "Dinheiro", "Credito"]
    const { error } = notify();
    const [name, setName] = useState<string>("");
    const [getPayment, setPayment] = useState<string>(payment[0]);

    const confirm = async () => {
        if (name.trim().length <= 1)
            return error("Ops... Está faltando o nome 😱");

        const submitDatas: MessageWpp = {
            client: {
                name,
                payment: getPayment,
            },
            order,
            ...(extraPie.length > 0 && { extraPie }),
        };

        const response = await submitMessageWhatsApp(submitDatas);
        if (response === false)
            return error("Ops... Tivemos um erro ao enviar o pedido. Entre em contato 😱");

        setModalCart(false);
        setOpenModal(false);
        setName("");
        setPayment(payment[0]);
        removeAllItemToCart();
    };


    return (
        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
            <Dialog.Content className="flex flex-col gap-4 text-center">
                <Dialog.Title className="font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    finalizando seu pedido!
                    <span className="text-zinc-50 text-2xl">🎉</span> 
                </Dialog.Title>
                <div>
                    <label htmlFor="User">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border bg-gray-50 w-full px-3 py-2 rounded-xl mb-4 outline-none focus:ring-1 focus:ring-pink-600 shadow border-none caret-zinc-950"
                            placeholder="Digite seu nome"
                        />
                    </label>

                    <div className="flex gap-2 justify-start items-center">
                        <h3 className="italic text-zinc-700">Formas de pagamento: </h3>
                        <Select.Root onValueChange={setPayment} defaultValue={getPayment} >
                            <Select.Trigger color="pink" />
                            <Select.Content color="pink">
                                <Select.Group>
                                    <Select.Label>Pagamento</Select.Label>
                                    {
                                        payment.map((item, index) => (
                                            <Select.Item key={index} value={item}>{item}</Select.Item>
                                        ))
                                    }
                                </Select.Group>
                            </Select.Content>
                        </Select.Root>
                    </div>
                    {getPayment === payment[2] && (
                        <h3 className="italic text-zinc-600">Parcelas em até 2x</h3>
                    )}
                </div>

                <div className="grid grid-cols-2 justify-center item-center gap-4 font-semibold">
                    <button
                        type="button"
                        aria-label="Cancelar pedido"
                        onClick={() => setOpenModal(false)}
                        className="bg-gray-50 hover:bg-gray-200 text-zinc-900 py-2 px-3 rounded-xl shadow transition w-full hover:scale-105"
                    >
                        Voltar
                    </button>

                    <button
                        type="button"
                        aria-label="Confirmar pedido"
                        onClick={() => confirm()}
                        className="bg-gradient-to-r from-pink-600 to-purple-600 text-zinc-50 py-2 px-3 rounded-xl shadow transition w-full hover:scale-105"
                    >
                        Enviar pedido
                    </button>
                </div>
            </Dialog.Content>
        </Dialog.Root >
    );
}