import type { ExtraPieType, OrderToCartType } from "../hooks/useCart";

export interface MessageWpp {
  order: OrderToCartType[];
  client: {
    name: string;
    payment: string;
  };
  extraPie?: ExtraPieType[];
}

export const submitMessageWhatsApp = (data: MessageWpp): Promise<boolean> => {

  try {
    const numero = "5521981315814";

    const pedidosFormatados = data.order.length > 0 ?
      data.order.map((order, index) => {
        const salgados = order.salgados.length > 0
          ? order.salgados.map(s => `🥟 ${s.sabor}`).join("\n")
          : "Nenhum 🫥";

        const docinhos = order.docinhos.length > 0
          ? order.docinhos.map(d => `🍬 ${d.sabor}`).join("\n")
          : "Nenhum 😢";

        return (
          `🎉 *Pedido ${index + 1}:*\n` +
          `✏️ *${order.nome}*\n` +
          `👥 *Para:* ${order.pessoas} pessoas\n\n` +
          `🥟 *Salgados:*\n${salgados}\n\n` +
          `🍬 *Docinhos:*\n${docinhos}\n\n` +
          `🍰 *Torta:* ${order.torta.tamanho}cm - ${order.torta.sabor}\n\n` +
          `💰 *Valor:* ${order.preco}\n` +
          `\n--------------------------------------------\n`
        );
      }) :
      "";

    const extrasPie = data.extraPie && data.extraPie.length > 0 ?
      "\n🍰 *Tortas Extras:*\n" +
      data.extraPie.map((pie) =>
        `• ${pie.dataPies.name} (${pie.valores.tamanho}cm) - R$${pie.valores.preco}\n\n--------------------------------------------\n`
      ) : "";

    const valueTotal: number = data.order.reduce((prev, cur) => prev + Number(cur.preco.replace(',', '.')), 0) + (data.extraPie ? data.extraPie?.reduce((prev, cur) => prev + cur.valores.preco, 0) : 0)

    const mensagem = encodeURIComponent(
      `Olá, ${data.client.name}! 😄\n` +
      `Informações sobre o seu pedido de *Kit Festa*:\n\n` +
      `${pedidosFormatados}` +
      `${extrasPie}` +
      `\n💵 *Total:* R$${valueTotal.toFixed(2)}\n` +
      `\n💳 *Pagamento:* ${data.client.payment}\n` +
      `\n🎁 Logo entraremos em contato! Muito obrigado! 🥳`
    );

    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, "_blank");

    return Promise.resolve(true);
  } catch (error) {
    console.error("Erro ao enviar mensagem", error);
    return Promise.reject(error);
  }
}


