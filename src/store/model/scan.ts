import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Scan: Store = {
  currency: '£',
  disableAdBlocker: true,
  minPageSleep: 60000,
  labels: {
    captcha: [
      {
        container: '#challenge-form',
        text: ['hcaptcha_submit'],
      },
    ],
    inStock: {
      container: '.buyPanel .priceAvailability',
      text: ['add to basket', 'in stock'],
    },
    maxPrice: {
      container: '.buyPanel .price',
      euroFormat: false, // Note: Scan uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.buyPanel .priceAvailability',
      text: ['pre order'],
    },
  },
  links: [
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/gigabyte-nvidia-geforce-rtx-3070-ti-eagle-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1770mhz',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/palit-nvidia-geforce-rtx-3070-ti-gamingpro-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1575mhz-gp',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/zotac-nvidia-geforce-rtx-3070-ti-trinity-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1770mhz-boos',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/palit-nvidia-geforce-rtx-3070-ti-gamerock-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1575mhz-gpu',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/asus-nvidia-geforce-rtx-3070-ti-tuf-gaming-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1770mhz-bo',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/palit-nvidia-geforce-rtx-3070-ti-gamerock-oc-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1575mhzo',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/evga-nvidia-geforce-rtx-3070-ti-ftw3-ultra-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1580mhz-18',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/gigabyte-nvidia-geforce-rtx-3070-ti-gaming-oc-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1830mhz',
    },
    {
      brand: 'pny',
      model: 'epic x',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/pny-nvidia-geforce-rtx-3070-ti-xlr8-gaming-revel-epic-x-8gb-gddr6x-ray-tracing-graphics-card-6144-co',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/zotac-nvidia-geforce-rtx-3070-ti-amp-holo-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1830mhz-boo',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/msi-nvidia-geforce-rtx-3070-ti-ventus-3x-oc-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1800mhz-b',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/gigabyte-aorus-nvidia-geforce-rtx-3070-ti-master-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1875',
    },
    {
      brand: 'asus',
      model: 'gaming oc',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/asus-nvidia-geforce-rtx-3070-ti-tuf-gaming-oc-8gb-gddr6x-ray-tracing-graphics-card-6144-core',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/msi-nvidia-geforce-rtx-3070-ti-gaming-x-trio-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1830mhz',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/asus-nvidia-geforce-rtx-3070-ti-rog-strix-oc-8gb-gddr6x-ray-tracing-graphics-card-6144-core',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/asus-nvidia-geforce-rtx-3070-ti-rog-strix-8gb-gddr6x-ray-tracing-graphics-card-6144-core',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/gigabyte-nvidia-geforce-rtx-3070-ti-eagle-oc-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1800mhz',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/gigabyte-nvidia-geforce-rtx-3070-ti-vision-oc-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1830mhz',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070ti',
      url:
        'https://www.scan.co.uk/products/msi-nvidia-geforce-rtx-3070-ti-suprim-x-8gb-gddr6x-ray-tracing-graphics-card-6144-core-1860mhz-boost',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: 'div.productList ul.productColumns li.product',
      sitePrefix: 'https://www.scan.co.uk',
      titleSelector: '.details .description',
      urlSelector: 'a[href]',
    }),
    ttl: 300000,
    urls: [],
  },
  name: 'scan',
  waitUntil: 'domcontentloaded',
};
