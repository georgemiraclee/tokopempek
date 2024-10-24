const NUMBER_WHATSAPP = process.env.NEXT_PUBLIC_NUMBER_WA;
const WA_LINK = `https://api.whatsapp.com/send?phone=6281274388189&text=`;

export const TEMPLATE_WA_LINK = (items: string, price: number) =>
  `${WA_LINK}Halo%0A%0ABu Yuli%2C%20saya%20mau%20pesan%20pempek%20${items}%0AJadi%20total%20pembeliannya%20Rp.%20${price}%0A%0A%0ATerima%20kasih`;
