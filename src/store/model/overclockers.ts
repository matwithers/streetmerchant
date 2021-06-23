import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Overclockers: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: 'a[class="buynow"]',
      text: ['add to basket'],
    },
    maxPrice: {
      container: 'div[class="article_details_price"]',
      euroFormat: false, // Note: Overclockers uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: 'a[class="buynow"]',
      text: ['see details'],
    },
  },
  links: [
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/zotac-geforce-rtx-3070-ti-trinity-8gb-gddr6x-pci-express-graphics-card-gx-12p-zt.html',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/zotac-geforce-rtx-3070-ti-amp-holo-8gb-gddr6x-pci-express-graphics-card-gx-12q-zt.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/asus-geforce-rtx-3070-ti-rog-strix-oc-8gb-gddr6-pci-express-graphics-card-gx-46j-as.html',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/zotac-geforce-rtx-3070-ti-trinity-oc-8gb-gddr6x-pci-express-graphics-card-gx-12w-zt.html',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/palit-geforce-rtx-3070-ti-gamerock-8gb-gddr6-pci-express-graphics-card-gx-066-pl.html',
    },
    {
      brand: 'gigabyte',
      model: 'master',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/gigabyte-aorus-geforce-rtx-3070-ti-master-8gb-gddr6x-pci-express-graphics-card-gx-1dv-gi.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/gigabyte-geforce-rtx-3070-ti-eagle-8gb-gddr6x-pci-express-graphics-card-gx-1du-gi.html',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/palit-geforce-rtx-3070-ti-gamerock-oc-8gb-gddr6-pci-express-graphics-card-gx-068-pl.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/asus-geforce-rtx-3070-ti-tuf-oc-8gb-gddr6-pci-express-graphics-card-gx-46k-as.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/palit-geforce-rtx-3070-ti-gaming-pro-8gb-gddr6-pci-express-graphics-card-gx-067-pl.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/gigabyte-geforce-rtx-3070-ti-gaming-oc-8gb-gddr6x-pci-express-graphics-card-gx-1dw-gi.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070ti',
      url:
        'https://www.overclockers.co.uk/msi-geforce-rtx-3070-ti-suprim-x-8gb-gddr6x-pci-express-graphics-card-gx-37j-ms.html',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.artbox',
      sitePrefix: 'https://www.overclockers.co.uk',
      titleAttribute: 'data-description',
      titleSelector: '.producttitles',
    }),
    urls: [
    ],
  },
  name: 'overclockers',
  waitUntil: 'domcontentloaded',
};
