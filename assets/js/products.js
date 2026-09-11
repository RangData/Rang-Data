/* ==========================================================================
   RANG DATA — Product catalogue (single source of truth)
   --------------------------------------------------------------------------
   Every page reads prices, stock and imagery from THIS file only.
   Update a product once here and it changes across the whole site.

   Fields
     id         unique slug, used in product.html?id=...
     code       SKU shown to customers
     collection "summer" | "winter"
     name       display name
     color      colour family
     pieces     2 or 3
     fabric     shirt fabric family
     price      PKR, integer
     status     "in-stock" | "sold-out"
     imgs       [main, ...additional]
   ========================================================================== */
(function (root) {
  'use strict';

  var SUMMER_SPEC = {
    shirt: { Material: 'Premium fine cotton lawn', Length: '3 metres', Work: 'Multi-head thread embroidery on front & sleeves' },
    dupatta: { Material: 'Lightweight voile / chiffon', Length: '2.5 metres', Colour: 'Matching to design' },
    trouser: { Material: 'Dyed matching lawn (unstitched)', Length: '2.5 metres', Colour: 'Matching to design' }
  };

  var WINTER_SPEC = {
    dupatta: { Material: 'Premium chiffon dupatta', Length: '2.5 metres', Colour: 'Matching to design' },
    trouser: { Material: 'Dyed matching trouser (unstitched)', Length: '2.5 metres', Colour: 'Matching to design' }
  };

  var PRODUCTS = [
    /* ---------------------------- SUMMER ---------------------------- */
    { id: 'rd0042', code: 'RD0042', collection: 'summer', name: 'Mustard Yellow Embroidered Suit', color: 'Mustard Yellow', pieces: 2, fabric: 'Cotton Lawn', price: 4499, status: 'sold-out',
      imgs: ['https://i.ibb.co/QFyr5pJ8/RD0042a.png', 'https://i.ibb.co/PZG1D8Vh/RD0042b.png'] },
    { id: 'rd058', code: 'RD058', collection: 'summer', name: 'Golden Mustard Embroidered Suit', color: 'Golden Mustard', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'sold-out',
      imgs: ['https://i.ibb.co/YFtPS8Fd/RD058a.png', 'https://i.ibb.co/nNt0LfFX/RD058b.png'] },
    { id: 'rd0545', code: 'RD0545', collection: 'summer', name: 'Deep Blue Embroidered Suit', color: 'Deep Blue', pieces: 3, fabric: 'Cotton Lawn', price: 4899, status: 'in-stock',
      imgs: ['https://i.ibb.co/fYCgVKTm/RD0545a.png', 'https://i.ibb.co/x8d31tRk/RD0545b.png'] },
    { id: 'rd0556', code: 'RD0556', collection: 'summer', name: 'Lilac Glow Embroidered Suit', color: 'Lilac Glow', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'sold-out',
      imgs: ['https://i.ibb.co/TBgMQH0T/RD0556a.png', 'https://i.ibb.co/TMtzKFMP/RD0556b.png'] },
    { id: 'rd0561', code: 'RD0561', collection: 'summer', name: 'Dark Brown Embroidered Suit', color: 'Dark Brown', pieces: 2, fabric: 'Lawn Slub', price: 4499, status: 'in-stock',
      imgs: ['https://i.ibb.co/ZzZwSj42/RD0561a.png', 'https://i.ibb.co/Y7DpDMLv/RD0561b.png'] },
    { id: 'rd0572', code: 'RD0572', collection: 'summer', name: 'Teal Green Embroidered Suit', color: 'Teal Green', pieces: 3, fabric: 'Cotton Lawn', price: 5699, status: 'in-stock',
      imgs: ['https://i.ibb.co/Y7NHV9P3/RD0572a.png', 'https://i.ibb.co/yF6rfzTQ/RD0572b.png'] },
    { id: 'rd0576', code: 'RD0576', collection: 'summer', name: 'Beige Nude Embroidered Suit', color: 'Beige Nude', pieces: 3, fabric: 'Cotton Lawn', price: 4899, status: 'sold-out',
      imgs: ['https://i.ibb.co/LDB3kywF/RD0576a.png', 'https://i.ibb.co/V0s54Ycw/RD0576b.png'] },
    { id: 'rd0582', code: 'RD0582', collection: 'summer', name: 'Ivory White Embroidered Suit', color: 'Ivory White', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'in-stock',
      imgs: ['https://i.ibb.co/nq1fQvG1/RD0582a.png', 'https://i.ibb.co/cSgxdSbg/RD0582ac.png'] },
    { id: 'rd0585', code: 'RD0585', collection: 'summer', name: 'Maroon Luxury Embroidered Suit', color: 'Maroon', pieces: 3, fabric: 'Cotton Lawn', price: 5699, status: 'sold-out',
      imgs: ['https://i.ibb.co/5W57Nr76/RD0585a.png', 'https://i.ibb.co/QFgTbsV1/RD0585b.png'] },
    { id: 'rd0586', code: 'RD0586', collection: 'summer', name: 'Mint Sage Embroidered Suit', color: 'Mint Sage', pieces: 3, fabric: 'Cotton Lawn', price: 5499, status: 'sold-out',
      imgs: ['https://i.ibb.co/Z1YX7xLY/RD0586a.png', 'https://i.ibb.co/PGnzpMbJ/RD0586b.png'] },
    { id: 'rd0587', code: 'RD0587', collection: 'summer', name: 'Off White Embroidered Suit', color: 'Off White', pieces: 3, fabric: 'Cotton Lawn', price: 4899, status: 'sold-out',
      imgs: ['https://i.ibb.co/cXRtGWKT/RD0587a.png', 'https://i.ibb.co/V5qS6pj/RD0587b.png'] },
    { id: 'rd0601', code: 'RD0601', collection: 'summer', name: 'Charcoal Grey Embroidered Suit', color: 'Charcoal Grey', pieces: 3, fabric: 'Cotton Lawn', price: 5499, status: 'sold-out',
      imgs: ['https://i.ibb.co/8gXH43Q1/RD0601a.png', 'https://i.ibb.co/YBd72ZJM/RD0601b.png'] },
    { id: 'rd0605', code: 'RD0605', collection: 'summer', name: 'Forest Olive Embroidered Suit', color: 'Forest Olive', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'in-stock',
      imgs: ['https://i.ibb.co/FbGYhD9r/RD0605a.png', 'https://i.ibb.co/6JGJZ6vW/RD0605b.png'] },
    { id: 'rd0607', code: 'RD0607', collection: 'summer', name: 'Royal Blue Embroidered Suit', color: 'Royal Blue', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'in-stock',
      imgs: ['https://i.ibb.co/GvYkGkFS/RD0607a.png', 'https://i.ibb.co/KzSXsXTM/RD0607b.png'] },
    { id: 'rd0609', code: 'RD0609', collection: 'summer', name: 'Sapphire Blue Embroidered Suit', color: 'Sapphire Blue', pieces: 3, fabric: 'Cotton Lawn', price: 5499, status: 'sold-out',
      imgs: ['https://i.ibb.co/LXKv0yDN/RD0609a.png', 'https://i.ibb.co/fdLbPSNj/RD0609b.png'] },
    { id: 'rd0611', code: 'RD0611', collection: 'summer', name: 'Peach Glow Embroidered Suit', color: 'Peach Glow', pieces: 3, fabric: 'Cotton Lawn', price: 4899, status: 'sold-out',
      imgs: ['https://i.ibb.co/zWryTzVJ/RD0611a.png', 'https://i.ibb.co/v4fYRHxV/RD0611b.png'] },
    { id: 'rd0612', code: 'RD0612', collection: 'summer', name: 'Peacock Blue Embroidered Suit', color: 'Peacock Blue', pieces: 3, fabric: 'Cotton Lawn', price: 4899, status: 'in-stock',
      imgs: ['https://i.ibb.co/4wGMhNLh/RD0612a.png', 'https://i.ibb.co/5WXvWBKv/RD0612b.png'] },
    { id: 'rd0613', code: 'RD0613', collection: 'summer', name: 'Classic Multi Embroidered Suit', color: 'Classic Multi', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'sold-out',
      imgs: ['https://i.ibb.co/4wxTWL3H/RD0613a.png', 'https://i.ibb.co/848dgbvs/RD0613b.png'] },
    { id: 'rd0615', code: 'RD0615', collection: 'summer', name: 'Festive Tone Embroidered Suit', color: 'Festive Tone', pieces: 3, fabric: 'Cotton Lawn', price: 5499, status: 'in-stock',
      imgs: ['https://i.ibb.co/D2FMVmW/RD0615a.png', 'https://i.ibb.co/1GmdmfwS/RD0615b.png'] },
    { id: 'rd06007', code: 'RD06007', collection: 'summer', name: 'Crimson Red Embroidered Suit', color: 'Crimson Red', pieces: 3, fabric: 'Cotton Lawn', price: 5699, status: 'sold-out',
      imgs: ['https://i.ibb.co/C5GshYFN/RD06007a.png', 'https://i.ibb.co/67p4y3TD/RD06007b.png'] },

    /* ---------------------------- WINTER (ALL PRODUCTS WITH NAMES, COLORS & PRICES) ---------------------------- */
    { id: 'rd001', code: 'RD 001', collection: 'winter', name: 'Off White Heavy Viscose Suit', color: 'Off White', pieces: 3, fabric: 'Heavy Viscose', price: 4299, status: 'in-stock',
      imgs: ['https://i.ibb.co/k6W3dtTm/RD-001-visco-a.jpg', 'https://i.ibb.co/bjDDy1S0/RD-001-visco-b.jpg', 'https://i.ibb.co/Dgfd0LKF/RD-001-visco-c.jpg'] },
    { id: 'rd002', code: 'RD 002', collection: 'winter', name: 'Maroon Heavy Viscose Suit', color: 'Maroon', pieces: 3, fabric: 'Heavy Viscose', price: 4699, status: 'in-stock',
      imgs: ['https://i.ibb.co/Mx8Z1kvL/RD-002-visco-a.jpg', 'https://i.ibb.co/0VC9Rpjw/RD-002-visco-b.jpg', 'https://i.ibb.co/gbFSYMch/RD-002-visco-c.jpg'] },
    { id: 'rd003', code: 'RD 003', collection: 'winter', name: 'Teal Green Winter Khaddar Suit', color: 'Teal Green', pieces: 3, fabric: 'Winter Khaddar', price: 4399, status: 'in-stock',
      imgs: ['https://i.ibb.co/Ndxh876C/RD-003-khaddar-a.jpg', 'https://i.ibb.co/4wgMSBNJ/RD-003-khaddar-b.jpg', 'https://i.ibb.co/fdDs0921/RD-003-khaddar-c.jpg'] },
    { id: 'rd005', code: 'RD 005', collection: 'winter', name: 'Brown Warm Dhank Suit', color: 'Brown', pieces: 3, fabric: 'Warm Dhank', price: 5199, status: 'in-stock',
      imgs: ['https://i.ibb.co/m5SvGzLX/RD-005-dhank-a.jpg', 'https://i.ibb.co/hxpq8FQw/RD-005-dhank-b.jpg', 'https://i.ibb.co/r2qMLL29/RD-005-dhank-c.jpg'] },
    { id: 'rd006', code: 'RD 006', collection: 'winter', name: 'Purple Heavy Viscose Suit', color: 'Purple', pieces: 3, fabric: 'Heavy Viscose', price: 4799, status: 'in-stock',
      imgs: ['https://i.ibb.co/rKpz9CDT/RD-006-visco-a.jpg', 'https://i.ibb.co/yBkxhyT9/RD-006-visco-b.jpg', 'https://i.ibb.co/zVtfG0q1/RD-006-visco-c.jpg'] },
    { id: 'rd008', code: 'RD 008', collection: 'winter', name: 'Charcoal Grey Heavy Viscose Suit', color: 'Charcoal Grey', pieces: 3, fabric: 'Heavy Viscose', price: 4299, status: 'in-stock',
      imgs: ['https://i.ibb.co/5gGcX5fC/RD-008-visco-a.jpg', 'https://i.ibb.co/svZqxh4d/RD-008-visco-b.jpg', 'https://i.ibb.co/23cqcD0R/RD-008-visco-c.jpg'] },
    { id: 'rd009', code: 'RD 009', collection: 'winter', name: 'Tea Pink Warm Dhank Suit', color: 'Tea Pink', pieces: 3, fabric: 'Warm Dhank', price: 4499, status: 'in-stock',
      imgs: ['https://i.ibb.co/tNJVq0k/RD-009-dhank-a.jpg', 'https://i.ibb.co/SXMXXvVd/RD-009-dhank-b.jpg', 'https://i.ibb.co/nX999NQ/RD-009-dhank-c.jpg'] },
    { id: 'rd010', code: 'RD 010', collection: 'winter', name: 'Navy Blue Warm Dhank Suit', color: 'Navy Blue', pieces: 3, fabric: 'Warm Dhank', price: 4199, status: 'in-stock',
      imgs: ['https://i.ibb.co/JWdzJwMv/RD-010dhank-a.jpg', 'https://i.ibb.co/d0ywgvYM/RD-010dhank-b.jpg', 'https://i.ibb.co/6RLV8126/RD-010dhank-c.jpg'] },
    { id: 'rd011', code: 'RD 011', collection: 'winter', name: 'Sage Green Winter Khaddar Suit', color: 'Sage Green', pieces: 3, fabric: 'Winter Khaddar', price: 4099, status: 'in-stock',
      imgs: ['https://i.ibb.co/pB9htnC6/RD-011-Khaddar-a.jpg', 'https://i.ibb.co/ynG0xtrM/RD-011-Khaddar-b.jpg', 'https://i.ibb.co/fGX8q2BP/RD-011-Khaddar-c.jpg'] },

    /* ---------- NEW WINTER PRODUCTS (WITH NAMES, COLORS & PRICES) ---------- */
    { id: 'rd0162', code: 'RD 0162', collection: 'winter', name: 'Deep Green Winter Khaddar Suit', color: 'Deep Green', pieces: 3, fabric: 'Winter Khaddar', price: 4799, status: 'in-stock',
      imgs: ['https://i.ibb.co/bgbs94Jc/RD-0162-Khaddar-a.jpg', 'https://i.ibb.co/RkPhN7dL/RD-0162-Khaddar-b.jpg', 'https://i.ibb.co/xSYfDsWX/RD-0162-Khaddar-c.jpg'] },
    { id: 'rd0253', code: 'RD 0253', collection: 'winter', name: 'Mustard Yellow Warm Dhank Suit', color: 'Mustard Yellow', pieces: 3, fabric: 'Warm Dhank', price: 4499, status: 'in-stock',
      imgs: ['https://i.ibb.co/1gwfhyh/RD-0253-dannak-a.jpg', 'https://i.ibb.co/qY7fHXqM/RD-0253-dannak-b.jpg', 'https://i.ibb.co/wFC1vmhp/RD-0253-dannak-c.jpg'] },
    { id: 'rd0265', code: 'RD 0265', collection: 'winter', name: 'Dusty Pink Heavy Viscose Suit', color: 'Dusty Pink', pieces: 3, fabric: 'Heavy Viscose', price: 4399, status: 'in-stock',
      imgs: ['https://i.ibb.co/sdFm7zBR/RD-0265-visco-a.jpg', 'https://i.ibb.co/23Jzhjf1/RD-0265-visco-b.jpg', 'https://i.ibb.co/39jFpJ0D/RD-0265-visco-c.jpg'] },
    { id: 'rd0329', code: 'RD 0329', collection: 'winter', name: 'Soft Gold Heavy Viscose Suit', color: 'Soft Gold', pieces: 3, fabric: 'Heavy Viscose', price: 5199, status: 'in-stock',
      imgs: ['https://i.ibb.co/0ywHztZD/RD-0329-visco-a.jpg', 'https://i.ibb.co/jvfLBKfM/RD-0329-visco-b.jpg', 'https://i.ibb.co/1Y6qbV3k/RD-0329-visco-c.jpg', 'https://i.ibb.co/C5nGsN2Y/RD-0329-visco-d.jpg'] },
    { id: 'rd0330', code: 'RD 0330', collection: 'winter', name: 'Mauve Purple Heavy Viscose Suit', color: 'Mauve Purple', pieces: 3, fabric: 'Heavy Viscose', price: 5199, status: 'in-stock',
      imgs: ['https://i.ibb.co/Lztw0zyW/RD-0330-visco-a.jpg', 'https://i.ibb.co/5ggkXd8x/RD-0330-visco-b.jpg', 'https://i.ibb.co/gFySgrbr/RD-0330-visco-c.jpg', 'https://i.ibb.co/5gd4rSv4/RD-0330-visco-d.jpg'] },
    { id: 'rd0336', code: 'RD 0336', collection: 'winter', name: 'Olive Green Winter Khaddar Suit', color: 'Olive Green', pieces: 3, fabric: 'Winter Khaddar', price: 5399, status: 'in-stock',
      imgs: ['https://i.ibb.co/MkYcj5BW/RD-0336-khaddar-a.jpg', 'https://i.ibb.co/67Zwrdzx/RD-0336-khaddar-b.jpg', 'https://i.ibb.co/DDtPVfpY/RD-0336-khaddar-c.jpg', 'https://i.ibb.co/spzc58mv/RD-0336-khaddar-d.jpg'] },
    { id: 'rd0363', code: 'RD 0363', collection: 'winter', name: 'Rust Brown Warm Dhank Suit', color: 'Rust Brown', pieces: 3, fabric: 'Warm Dhank', price: 5299, status: 'in-stock',
      imgs: ['https://i.ibb.co/vCddpdF0/RD-0363-dhank-a.jpg', 'https://i.ibb.co/svyTjsJr/RD-0363-dhank-b.jpg', 'https://i.ibb.co/yFfNyQbK/RD-0363-dhank-c.jpg', 'https://i.ibb.co/zWpW59wd/RD-0363-dhank-d.jpg'] },
    { id: 'rd0395', code: 'RD 0395', collection: 'winter', name: 'Black Warm Dhank Suit', color: 'Black', pieces: 3, fabric: 'Warm Dhank', price: 4999, status: 'in-stock',
      imgs: ['https://i.ibb.co/bR2yJzdv/RD-0395-dhank-a.jpg', 'https://i.ibb.co/XrK0H8pP/RD-0395-dhank-b.jpg', 'https://i.ibb.co/7NTFqbsK/RD-0395-dhank-c.jpg'] },
    { id: 'rd0417', code: 'RD 0417', collection: 'winter', name: 'Deep Teal Warm Dhank Suit', color: 'Deep Teal', pieces: 3, fabric: 'Warm Dhank', price: 5299, status: 'in-stock',
      imgs: ['https://i.ibb.co/0pPrSLb1/RD-0417-dhank-a.jpg', 'https://i.ibb.co/PG7F4n4j/RD-0417-dhank-b.jpg', 'https://i.ibb.co/fLRjrwc/RD-0417-dhank-c.jpg'] },
    { id: 'rd0421', code: 'RD 0421', collection: 'winter', name: 'Plum Purple Heavy Viscose Suit', color: 'Plum Purple', pieces: 3, fabric: 'Heavy Viscose', price: 5299, status: 'in-stock',
      imgs: ['https://i.ibb.co/mCdBNRfS/RD-0421-visco-a.jpg', 'https://i.ibb.co/cXK6tKHP/RD-0421-visco-b.jpg', 'https://i.ibb.co/svcThdVZ/RD-0421-visco-c.jpg', 'https://i.ibb.co/nM0NLx7S/RD-0421-visco-d.jpg', 'https://i.ibb.co/5gtr51X3/RD-0421-visco-e.jpg'] }
  ];

  /* Old links such as product.html?id=7 or product-summer.html?id=7 still
     resolve, so nothing that was already shared on WhatsApp/social breaks. */
  var LEGACY_IDS = {
    '1': 'rd0042', '2': 'rd058', '3': 'rd0545', '4': 'rd0556', '5': 'rd0561',
    '6': 'rd0572', '7': 'rd0576', '8': 'rd0582', '9': 'rd0585', '10': 'rd0586',
    '11': 'rd0587', '12': 'rd0601', '13': 'rd0605', '14': 'rd0607', '15': 'rd0609',
    '16': 'rd0611', '17': 'rd0612', '18': 'rd0613', '19': 'rd0615', '20': 'rd06007'
  };

  var COLLECTIONS = {
    summer: {
      key: 'summer',
      label: 'Summer Collection',
      page: 'summer.html',
      tagline: 'Breathable lawn and slub suits with multi-head thread embroidery.',
      spec: SUMMER_SPEC
    },
    winter: {
      key: 'winter',
      label: 'Winter Collection',
      page: 'winter.html',
      tagline: 'Warm viscose, khaddar and dhank suits for the cold season.',
      spec: WINTER_SPEC
    }
  };

  /* Winter shirt fabric copy depends on the fabric family. */
  function winterShirtSpec(p) {
    return {
      Material: 'Premium ' + p.fabric.toLowerCase(),
      Length: '3 metres',
      Work: 'Multi-head thread embroidery on front & sleeves'
    };
  }

  var API = {
    all: function () { return PRODUCTS.slice(); },

    byCollection: function (key) {
      return PRODUCTS.filter(function (p) { return p.collection === key; });
    },

    get: function (id) {
      if (!id) return null;
      var key = String(id).trim().toLowerCase();
      if (LEGACY_IDS[key]) key = LEGACY_IDS[key];
      var found = PRODUCTS.filter(function (p) { return p.id === key; })[0];
      if (found) return found;
      /* also allow lookup straight by SKU, e.g. ?id=RD%200042 */
      var flat = key.replace(/[\s-]/g, '');
      return PRODUCTS.filter(function (p) {
        return p.code.replace(/[\s-]/g, '').toLowerCase() === flat;
      })[0] || null;
    },

    collection: function (key) { return COLLECTIONS[key] || null; },

    /* Shirt / dupatta / trouser breakdown for the product page. */
    specs: function (p) {
      var base = COLLECTIONS[p.collection].spec;
      var out = [{ title: 'Shirt fabric', rows: p.collection === 'winter' ? winterShirtSpec(p) : base.shirt }];
      if (p.pieces === 3) out.push({ title: 'Dupatta fabric', rows: base.dupatta });
      out.push({ title: 'Trouser fabric', rows: base.trouser });
      return out;
    },

    search: function (query) {
      var q = String(query || '').trim().toLowerCase();
      if (!q) return [];
      var terms = q.split(/\s+/);
      return PRODUCTS.filter(function (p) {
        var hay = [p.code, p.name, p.color, p.fabric, p.collection, p.pieces + ' pcs', p.pieces + ' piece']
          .join(' ').toLowerCase().replace(/\s+/g, ' ');
        var flat = hay.replace(/[\s-]/g, '');
        return terms.every(function (t) {
          return hay.indexOf(t) > -1 || flat.indexOf(t.replace(/[\s-]/g, '')) > -1;
        });
      });
    },

    related: function (p, limit) {
      var n = limit || 4;
      var same = PRODUCTS.filter(function (x) {
        return x.collection === p.collection && x.id !== p.id && x.status === 'in-stock';
      });
      var rest = PRODUCTS.filter(function (x) {
        return x.id !== p.id && same.indexOf(x) === -1;
      });
      return same.concat(rest).slice(0, n);
    }
  };

  root.RD_PRODUCTS = API;
})(window);
