export const enviarMensagemWhatsApp = (kitNome: string) => {
    const numero = "5599999999999"; // Substitua pelo número desejado com DDI e DDD
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o ${kitNome} do cardápio de kits de festa.`
    );
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, "_blank");
  }
