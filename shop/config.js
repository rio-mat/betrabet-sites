// BETRABET MERKEZI KONFIGURASYON
// Tum siteler bu dosyayi GitHub uzerinden yukler.
// Sadece "num" degerini degistirip commit+push yapin, tum siteler guncellenir.

const SITE_CONFIG = {
  base: "betrabet",
  num: 366,

  get domain()   { return `https://${this.base}${this.num}.com`; },
  get login()    { return `${this.domain}/login`; },
  get register() { return `${this.domain}/register`; },
};

const DOMAIN   = SITE_CONFIG.domain;
const LOGIN    = SITE_CONFIG.login;
const REGISTER = SITE_CONFIG.register;
