// BETRAKING MERKEZI KONFIGURASYON
// Tum siteler bu dosyayi yukler.
// Domain degistirmek icin asagidaki "domain" degerini guncelleyin.

const SITE_CONFIG = {
  domain: "https://betraking.com",

  get login()    { return `${this.domain}/login`; },
  get register() { return `${this.domain}/register`; },
};

const DOMAIN   = SITE_CONFIG.domain;
const LOGIN    = SITE_CONFIG.login;
const REGISTER = SITE_CONFIG.register;
