import type { OrderToCartType } from "../hooks/useCart";

export const submitMessageWhatsApp = (orders: OrderToCartType[]) => {
  const numero = "5521981315814";

  if (orders.length === 0) {
    alert("Nenhum pedido encontrado!");
    return;
  }

  const pedidosFormatados = orders.map((order, index) => {
    const salgados = order.salgados.length > 0
      ? order.salgados.map(s => `🥟 ${s.sabor} (x${s.quantidade})`).join("\n")
      : "Nenhum 🫥";

    const docinhos = order.docinhos.length > 0
      ? order.docinhos.map(d => `🍬 ${d.sabor} (x${d.quantidade})`).join("\n")
      : "Nenhum 😢";

    return (
      `🎉 *Pedido ${index + 1}:*\n` +
      `👤 *Nome:* ${order.nome}\n` +
      `👥 *Para:* ${order.pessoas} pessoas\n\n` +
      `🥟 *Salgados:*\n${salgados}\n\n` +
      `🍬 *Docinhos:*\n${docinhos}\n\n` +
      `🍰 *Torta:* ${order.torta.tamanho}cm - ${order.torta.sabor}\n\n` +
      `💰 *Total:* ${order.preco}\n`
    );
  }).join("\n-----------------------------\n");

  const mensagem = encodeURIComponent(
    `Olá! 😄 Estou empolgado(a) com meus pedidos de *Kit Festa*! Seguem os detalhes abaixo:\n\n` +
    `${pedidosFormatados}\n` +
    `🎁 Aguardo seu retorno com mais informações!\nVamos fazer essa festa acontecer! 🥳`
  );

  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, "_blank");
};
