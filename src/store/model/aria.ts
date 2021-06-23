import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Aria: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '#addQuantity',
      text: ['add to shopping basket'],
    },
    maxPrice: {
      container: '.priceBig',
      euroFormat: false, // Note: Aria uses non-euroFromat as price seperator
    },
    outOfStock: {
      container: '.fBox',
      text: ['out of stock', 'there is currently no stock of this item'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070ti',
      url:
        'https://www.aria.co.uk/SuperSpecials/Other+products/ASUS+NVIDIA+GeForce+RTX+3070+Ti+8GB+ROG+Strix+OC+Ampere+Graphics+Card+?productId=73506',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070ti',
      url:
        'https://www.aria.co.uk/SuperSpecials/Other+products/MSI+NVIDIA+GeForce+RTX+3070+Ti+8GB+SUPRIM+X+Ampere+Graphics+Card?productId=73512',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070ti',
      url:
        'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3070+Ti/ASUS+NVIDIA+GeForce+RTX+3070+Ti+8GB+TUF+GAMING+OC+Ampere+Graphics+Card?productId=73524',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3070ti',
      url:
        'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3070+Ti/ASUS+NVIDIA+GeForce+RTX+3070+Ti+8GB+ROG+Strix+Ampere+Graphics+Card?productId=73523',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070ti',
      url:
        'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3070+Ti/ASUS+NVIDIA+GeForce+RTX+3070+Ti+8GB+ROG+Strix+OC+Ampere+Graphics+Card?productId=73522',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070ti',
      url:
        'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3070+Ti/MSI+NVIDIA+GeForce+RTX+3070+Ti+8GB+SUPRIM+X+Ampere+Graphics+Card?productId=73521',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070ti',
      url:
        'https://www.aria.co.uk/Products/Components/Graphics+Cards/NVIDIA+GeForce/GeForce+RTX+3070+Ti/MSI+NVIDIA+GeForce+RTX+3070+Ti+8GB+VENTUS+3X+OC+Ampere+Graphics+Card?productId=73519',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: '.listTableTr',
      sitePrefix: 'https://www.aria.co.uk',
      titleSelector: 'strong > a[href]',
    }),
    urls: [
    ],
  },
  name: 'aria',
  waitUntil: 'domcontentloaded',
};
