/* ==========================================================================
   RANG DATA — Product catalogue (single source of truth)
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
    /* ---------------------------- SUMMER (NEW JPG LINKS) ---------------------------- */
    { id: 'rd0042', code: 'RD0042', collection: 'summer', name: 'Mustard Yellow Embroidered Suit', color: 'Mustard Yellow', pieces: 2, fabric: 'Cotton Lawn', price: 4499, status: 'in-stock',
      imgs: ['https://i.ibb.co/fGVWJRp8/RD0042a.jpg', 'https://i.ibb.co/YTw1L01y/RD0042b.jpg', 'https://i.ibb.co/BVYm8mQt/RD0042c.jpg'] },
    { id: 'rd058', code: 'RD058', collection: 'summer', name: 'Golden Mustard Embroidered Suit', color: 'Golden Mustard', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'sold-out',
      imgs: ['https://i.ibb.co/RkQJm1HY/RD058a.jpg', 'https://i.ibb.co/2VMnKYR/RD058b.jpg', 'https://i.ibb.co/cKF72dgX/RD058c.jpg'] },
    { id: 'rd0545', code: 'RD0545', collection: 'summer', name: 'Deep Blue Embroidered Suit', color: 'Deep Blue', pieces: 3, fabric: 'Cotton Lawn', price: 4899, status: 'in-stock',
      imgs: ['https://i.ibb.co/MyRsgCL2/RD0545a.jpg', 'https://i.ibb.co/Fvgqm0c/RD0545b.jpg', 'https://i.ibb.co/qYV3yPR2/RD0545c.jpg'] },
    { id: 'rd0556', code: 'RD0556', collection: 'summer', name: 'Lilac Glow Embroidered Suit', color: 'Lilac Glow', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'sold-out',
      imgs: ['https://i.ibb.co/FbRzNbFG/RD0556a.jpg', 'https://i.ibb.co/1JMGSqXw/RD0556b.jpg', 'https://i.ibb.co/jvzBbgWS/RD0556c.jpg'] },
    { id: 'rd0561', code: 'RD0561', collection: 'summer', name: 'Dark Brown Embroidered Suit', color: 'Dark Brown', pieces: 2, fabric: 'Lawn Slub', price: 4499, status: 'in-stock',
      imgs: ['https://i.ibb.co/xKQGkk4G/RD0561a.jpg', 'https://i.ibb.co/yBpRbpBC/RD0561b.jpg', 'https://i.ibb.co/Mk2BHF06/RD0561c.jpg'] },
    { id: 'rd0572', code: 'RD0572', collection: 'summer', name: 'Teal Green Embroidered Suit', color: 'Teal Green', pieces: 3, fabric: 'Cotton Lawn', price: 5699, status: 'in-stock',
      imgs: ['https://i.ibb.co/CpK5cxMb/RD0572a.jpg', 'https://i.ibb.co/ZRHP7FmV/RD0572b.jpg', 'https://i.ibb.co/hx5Pv0dP/RD0572c.jpg'] },
    { id: 'rd0576', code: 'RD0576', collection: 'summer', name: 'Beige Nude Embroidered Suit', color: 'Beige Nude', pieces: 3, fabric: 'Cotton Lawn', price: 4899, status: 'sold-out',
      imgs: ['https://i.ibb.co/BHThn7t1/RD0576a.jpg', 'https://i.ibb.co/j9PFqKMm/RD0576b.jpg', 'https://i.ibb.co/sJ2Q6bc9/RD0576c.jpg'] },
    { id: 'rd0582', code: 'RD0582', collection: 'summer', name: 'Ivory White Embroidered Suit', color: 'Ivory White', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'in-stock',
      imgs: ['https://i.ibb.co/sp8qJ9zX/RD0582a.jpg', 'https://i.ibb.co/Vp3vLbT5/RD0582ac.jpg', 'https://i.ibb.co/0jL490jZ/RD0582b.jpg'] },
    { id: 'rd0585', code: 'RD0585', collection: 'summer', name: 'Maroon Luxury Embroidered Suit', color: 'Maroon', pieces: 3, fabric: 'Cotton Lawn', price: 5699, status: 'sold-out',
      imgs: ['https://i.ibb.co/DP06yBRB/RD0585a.jpg', 'https://i.ibb.co/Q7w5Yc1N/RD0585b.jpg', 'https://i.ibb.co/4wdDbx7F/RD0585c.jpg'] },
    { id: 'rd0586', code: 'RD0586', collection: 'summer', name: 'Mint Sage Embroidered Suit', color: 'Mint Sage', pieces: 3, fabric: 'Cotton Lawn', price: 5499, status: 'in-stock',
      imgs: ['https://i.ibb.co/b5F3jF9w/RD0586a.jpg', 'https://i.ibb.co/tTpMhtLv/RD0586b.jpg', 'https://i.ibb.co/5W5PP5J8/RD0586c.jpg'] },
    { id: 'rd0587', code: 'RD0587', collection: 'summer', name: 'Off White Embroidered Suit', color: 'Off White', pieces: 3, fabric: 'Cotton Lawn', price: 4899, status: 'in-stock',
      imgs: ['https://i.ibb.co/NdmLSG1L/RD0587a.jpg', 'https://i.ibb.co/4wC8fSj4/RD0587b.jpg', 'https://i.ibb.co/bM8z9vTZ/RD0587c.jpg'] },
    { id: 'rd0601', code: 'RD0601', collection: 'summer', name: 'Charcoal Grey Embroidered Suit', color: 'Charcoal Grey', pieces: 3, fabric: 'Cotton Lawn', price: 5499, status: 'sold-out',
      imgs: ['https://i.ibb.co/CpysM06Q/RD0601a.jpg', 'https://i.ibb.co/bjtCWRxN/RD0601b.jpg', 'https://i.ibb.co/4wdLrLJm/RD0601c.jpg'] },
    { id: 'rd0605', code: 'RD0605', collection: 'summer', name: 'Forest Olive Embroidered Suit', color: 'Forest Olive', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'in-stock',
      imgs: ['https://i.ibb.co/FL0t58r9/RD0605a.jpg', 'https://i.ibb.co/27scKfL4/RD0605b.jpg', 'https://i.ibb.co/r8p6DRQ/RD0605c.jpg'] },
    { id: 'rd0608', code: 'RD0608', collection: 'summer', name: 'Royal Blue Embroidered Suit', color: 'Royal Blue', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'in-stock',
      imgs: ['https://i.ibb.co/QvcGNdMP/RD0608a.jpg', 'https://i.ibb.co/yFMxSMWF/RD0608b.jpg', 'https://i.ibb.co/mCMHmvKY/RD0608c.jpg'] },
    { id: 'rd0609', code: 'RD0609', collection: 'summer', name: 'Sapphire Blue Embroidered Suit', color: 'Sapphire Blue', pieces: 3, fabric: 'Cotton Lawn', price: 5499, status: 'sold-out',
      imgs: ['https://i.ibb.co/zMnJcqN/RD0609a.jpg', 'https://i.ibb.co/ZR0Dgzn4/RD0609b.jpg', 'https://i.ibb.co/hJfnwRXb/RD0609c.jpg'] },
    { id: 'rd0611', code: 'RD0611', collection: 'summer', name: 'Peach Glow Embroidered Suit', color: 'Peach Glow', pieces: 3, fabric: 'Cotton Lawn', price: 4899, status: 'in-stock',
      imgs: ['https://i.ibb.co/YBhZpwLm/RD0611a.jpg', 'https://i.ibb.co/v4W5GxNp/RD0611b.jpg', 'https://i.ibb.co/5xhp176T/RD0611c.jpg'] },
    { id: 'rd0612', code: 'RD0612', collection: 'summer', name: 'Peacock Blue Embroidered Suit', color: 'Peacock Blue', pieces: 3, fabric: 'Cotton Lawn', price: 4899, status: 'in-stock',
      imgs: ['https://i.ibb.co/vptjvbG/RD0612a.jpg', 'https://i.ibb.co/5hM6qDv9/RD0612b.jpg', 'https://i.ibb.co/rG0kKwXh/RD0612c.jpg', 'https://i.ibb.co/cSbkp7sk/RD0612d.jpg'] },
    { id: 'rd0613', code: 'RD0613', collection: 'summer', name: 'Classic Multi Embroidered Suit', color: 'Classic Multi', pieces: 3, fabric: 'Cotton Lawn', price: 5199, status: 'sold-out',
      imgs: ['https://i.ibb.co/TBq9tYDQ/RD0613a.jpg', 'https://i.ibb.co/RXr6Ydx/RD0613b.jpg', 'https://i.ibb.co/FkRzXWKX/RD0613c.jpg'] },
    { id: 'rd0615', code: 'RD0615', collection: 'summer', name: 'Festive Tone Embroidered Suit', color: 'Festive Tone', pieces: 3, fabric: 'Cotton Lawn', price: 5499, status: 'in-stock',
      imgs: ['https://i.ibb.co/rfLXP1pQ/RD0615a.jpg', 'https://i.ibb.co/mF4hSn9y/RD0615b.jpg'] },
    { id: 'rd06007', code: 'RD06007', collection: 'summer', name: 'Crimson Red Embroidered Suit', color: 'Crimson Red', pieces: 3, fabric: 'Cotton Lawn', price: 5699, status: 'sold-out',
      imgs: ['https://i.ibb.co/QvLRBdMX/RD06007a.jpg', 'https://i.ibb.co/tMd40ZBR/RD06007b.jpg', 'https://i.ibb.co/dJbpjTbx/RD06007c.jpg'] },

    /* ---------------------------- WINTER (COMPRESSED IMAGES) ---------------------------- */
    { id: 'rd001', code: 'RD 001', collection: 'winter', name: 'Off White Heavy Viscose Suit', color: 'Off White', pieces: 3, fabric: 'Heavy Viscose', price: 6899, status: 'in-stock',
      imgs: ['https://i.ibb.co/7NKQ3cvs/RD-001-visco-a.jpg', 'https://i.ibb.co/4R21jyT8/RD-001-visco-b.jpg', 'https://i.ibb.co/ttLhqF2/RD-001-visco-c.jpg'] },
    { id: 'rd002', code: 'RD 002', collection: 'winter', name: 'Maroon Heavy Viscose Suit', color: 'Maroon', pieces: 3, fabric: 'Heavy Viscose', price: 6599, status: 'in-stock',
      imgs: ['https://i.ibb.co/9jTj92H/RD-002-visco-a.jpg', 'https://i.ibb.co/JF3WJ1wy/RD-002-visco-b.jpg', 'https://i.ibb.co/pjz44mCx/RD-002-visco-c.jpg'] },
    { id: 'rd003', code: 'RD 003', collection: 'winter', name: 'Teal Green Winter Khaddar Suit', color: 'Teal Green', pieces: 3, fabric: 'Winter Khaddar', price: 5799, status: 'in-stock',
      imgs: ['https://i.ibb.co/BHW11CyW/RD-003-khaddar-a.jpg', 'https://i.ibb.co/8DDgnx2j/RD-003-khaddar-b.jpg', 'https://i.ibb.co/pB0LHCnv/RD-003-khaddar-c.jpg'] },
    { id: 'rd005', code: 'RD 005', collection: 'winter', name: 'Brown Warm Dhank Suit', color: 'Brown', pieces: 3, fabric: 'Warm Dhank', price: 4999, status: 'in-stock',
      imgs: ['https://i.ibb.co/VYhgZFqB/RD-005-dhank-a.jpg', 'https://i.ibb.co/0jHDRZ8D/RD-005-dhank-b.jpg', 'https://i.ibb.co/nMK87mtQ/RD-005-dhank-c.jpg'] },
    { id: 'rd006', code: 'RD 006', collection: 'winter', name: 'Purple Heavy Viscose Suit', color: 'Purple', pieces: 3, fabric: 'Heavy Viscose', price: 6599, status: 'in-stock',
      imgs: ['https://i.ibb.co/zHf1Wtxc/RD-006-visco-a.jpg', 'https://i.ibb.co/k6QpK1bX/RD-006-visco-b.jpg', 'https://i.ibb.co/MxJWMZGR/RD-006-visco-c.jpg'] },
    { id: 'rd008', code: 'RD 008', collection: 'winter', name: 'Charcoal Grey Heavy Viscose Suit', color: 'Charcoal Grey', pieces: 3, fabric: 'Heavy Viscose', price: 6799, status: 'in-stock',
      imgs: ['https://i.ibb.co/fzybQWb3/RD-008-visco-a.jpg', 'https://i.ibb.co/XxdD5CBH/RD-008-visco-b.jpg', 'https://i.ibb.co/RGbkhFkw/RD-008-visco-c.jpg'] },
    { id: 'rd009', code: 'RD 009', collection: 'winter', name: 'Tea Pink Warm Dhank Suit', color: 'Tea Pink', pieces: 3, fabric: 'Warm Dhank', price: 5399, status: 'in-stock',
      imgs: ['https://i.ibb.co/21508Bnv/RD-009-dhank-a.jpg', 'https://i.ibb.co/d4P6m9vH/RD-009-dhank-b.jpg', 'https://i.ibb.co/Y7qgF3FZ/RD-009-dhank-c.jpg'] },
    { id: 'rd010', code: 'RD 010', collection: 'winter', name: 'Navy Blue Warm Dhank Suit', color: 'Navy Blue', pieces: 3, fabric: 'Warm Dhank', price: 5199, status: 'in-stock',
      imgs: ['https://i.ibb.co/m5H80SkG/RD-010dhank-a.jpg', 'https://i.ibb.co/0p4SkyvZ/RD-010dhank-b.jpg', 'https://i.ibb.co/0pJYVsxf/RD-010dhank-c.jpg'] },
    { id: 'rd011', code: 'RD 011', collection: 'winter', name: 'Deep Green Winter Khaddar Suit', color: 'Deep Green', pieces: 3, fabric: 'Winter Khaddar', price: 5999, status: 'in-stock',
      imgs: ['https://i.ibb.co/38pkN1Y/RD-011-Khaddar-a.jpg', 'https://i.ibb.co/bgVVCYXw/RD-011-Khaddar-b.jpg', 'https://i.ibb.co/QFGDng5p/RD-011-Khaddar-c.jpg'] },
    { id: 'rd0162', code: 'RD 0162', collection: 'winter', name: 'Mustard Yellow Winter Khaddar Suit', color: 'Mustard Yellow', pieces: 3, fabric: 'Winter Khaddar', price: 5999, status: 'in-stock',
      imgs: ['https://i.ibb.co/d0TMsSMy/RD-0162-Khaddar-a.jpg', 'https://i.ibb.co/4wKxsBYR/RD-0162-Khaddar-b.jpg', 'https://i.ibb.co/DPyScrZC/RD-0162-Khaddar-c.jpg'] },
    { id: 'rd0253', code: 'RD 0253', collection: 'winter', name: 'Peach Warm Dhank Suit', color: 'Peach', pieces: 3, fabric: 'Warm Dhank', price: 5599, status: 'in-stock',
      imgs: ['https://i.ibb.co/FqHgz4k2/RD-0253-dannak-a.jpg', 'https://i.ibb.co/21tny5jG/RD-0253-dannak-b.jpg', 'https://i.ibb.co/VcsKyWKp/RD-0253-dannak-c.jpg'] },
    { id: 'rd0265', code: 'RD 0265', collection: 'winter', name: 'Olive Green Heavy Viscose Suit', color: 'Olive Green', pieces: 3, fabric: 'Heavy Viscose', price: 6599, status: 'in-stock',
      imgs: ['https://i.ibb.co/chJWbMVK/RD-0265-visco-a.jpg', 'https://i.ibb.co/0yNFFrKV/RD-0265-visco-b.jpg', 'https://i.ibb.co/dwprhVNN/RD-0265-visco-c.jpg'] },
    { id: 'rd0329', code: 'RD 0329', collection: 'winter', name: 'Black Heavy Viscose Suit', color: 'Black', pieces: 3, fabric: 'Heavy Viscose', price: 6699, status: 'in-stock',
      imgs: ['https://i.ibb.co/9mBG2rj3/RD-0329-visco-a.jpg', 'https://i.ibb.co/zDfJBdV/RD-0329-visco-b.jpg', 'https://i.ibb.co/ynk5RRn3/RD-0329-visco-c.jpg', 'https://i.ibb.co/8DJdT6X5/RD-0329-visco-d.jpg'] },
    { id: 'rd0330', code: 'RD 0330', collection: 'winter', name: 'Emerald Green Heavy Viscose Suit', color: 'Emerald Green', pieces: 3, fabric: 'Heavy Viscose', price: 6699, status: 'in-stock',
      imgs: ['https://i.ibb.co/Z6WTv3XD/RD-0330-visco-a.jpg', 'https://i.ibb.co/TDvHbTM7/RD-0330-visco-b.jpg', 'https://i.ibb.co/zVB0PNpD/RD-0330-visco-c.jpg', 'https://i.ibb.co/b5ZvNTz4/RD-0330-visco-d.jpg'] },
    { id: 'rd0336', code: 'RD 0336', collection: 'winter', name: 'Olive Green Winter Khaddar Suit', color: 'Olive Green', pieces: 3, fabric: 'Winter Khaddar', price: 5999, status: 'in-stock',
      imgs: ['https://i.ibb.co/XxG97sks/RD-0336-khaddar-a.jpg', 'https://i.ibb.co/whQCkQdF/RD-0336-khaddar-b.jpg', 'https://i.ibb.co/cSgGMgpX/RD-0336-khaddar-c.jpg', 'https://i.ibb.co/yFDS40RM/RD-0336-khaddar-d.jpg'] },
    { id: 'rd0363', code: 'RD 0363', collection: 'winter', name: 'Navy Blue Warm Dhank Suit', color: 'Navy Blue', pieces: 3, fabric: 'Warm Dhank', price: 5599, status: 'in-stock',
      imgs: ['https://i.ibb.co/d4SQ8sMY/RD-0363-dhank-a.jpg', 'https://i.ibb.co/R4spT6dy/RD-0363-dhank-b.jpg', 'https://i.ibb.co/JWWSrn8b/RD-0363-dhank-c.jpg'] },
    { id: 'rd0395', code: 'RD 0395', collection: 'winter', name: 'Black Warm Dhank Suit', color: 'Black', pieces: 3, fabric: 'Warm Dhank', price: 5999, status: 'in-stock',
      imgs: ['https://i.ibb.co/gLVbmXxP/RD-0395-dhank-a.jpg', 'https://i.ibb.co/rK8fzdWJ/RD-0395-dhank-b.jpg', 'https://i.ibb.co/VY0FTFZC/RD-0395-dhank-c.jpg'] },
    { id: 'rd0417', code: 'RD 0417', collection: 'winter', name: 'Mustard Yellow Warm Dhank Suit', color: 'Mustard Yellow', pieces: 3, fabric: 'Warm Dhank', price: 5599, status: 'in-stock',
      imgs: ['https://i.ibb.co/W4k2zw9T/RD-0417-dhank-a.jpg', 'https://i.ibb.co/k247v0M2/RD-0417-dhank-b.jpg', 'https://i.ibb.co/VWDm5v88/RD-0417-dhank-c.jpg'] },
    { id: 'rd0421', code: 'RD 0421', collection: 'winter', name: 'Magenta Heavy Viscose Suit', color: 'Magenta', pieces: 3, fabric: 'Heavy Viscose', price: 6699, status: 'in-stock',
      imgs: ['https://i.ibb.co/VY5Gc77B/RD-0421-visco-a.jpg', 'https://i.ibb.co/3y8bxHwd/RD-0421-visco-b.jpg', 'https://i.ibb.co/q3sQx0vx/RD-0421-visco-c.jpg', 'https://i.ibb.co/kgFwDp06/RD-0421-visco-d.jpg'] }
  ];

  var LEGACY_IDS = {
    '1': 'rd0042', '2': 'rd058', '3': 'rd0545', '4': 'rd0556', '5': 'rd0561',
    '6': 'rd0572', '7': 'rd0576', '8': 'rd0582', '9': 'rd0585', '10': 'rd0586',
    '11': 'rd0587', '12': 'rd0601', '13': 'rd0605', '14': 'rd0607', '15': 'rd0609',
    '16': 'rd0611', '17': 'rd0612', '18': 'rd0613', '19': 'rd0615', '20': 'rd06007'
  };

  var COLLECTIONS = {
    summer: { key: 'summer', label: 'Summer Collection', page: 'summer.html', tagline: 'Breathable lawn and slub suits with multi-head thread embroidery.', spec: SUMMER_SPEC },
    winter: { key: 'winter', label: 'Winter Collection', page: 'winter.html', tagline: 'Warm viscose, khaddar and dhank suits for the cold season.', spec: WINTER_SPEC }
  };

  function winterShirtSpec(p) {
    return { Material: 'Premium ' + p.fabric.toLowerCase(), Length: '3 metres', Work: 'Multi-head thread embroidery on front & sleeves' };
  }

  var API = {
    all: function () { return PRODUCTS.slice(); },
    byCollection: function (key) { return PRODUCTS.filter(function (p) { return p.collection === key; }); },
    get: function (id) {
      if (!id) return null;
      var key = String(id).trim().toLowerCase();
      if (LEGACY_IDS[key]) key = LEGACY_IDS[key];
      var found = PRODUCTS.filter(function (p) { return p.id === key; })[0];
      if (found) return found;
      var flat = key.replace(/[\s-]/g, '');
      return PRODUCTS.filter(function (p) { return p.code.replace(/[\s-]/g, '').toLowerCase() === flat; })[0] || null;
    },
    collection: function (key) { return COLLECTIONS[key] || null; },
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
        var hay = [p.code, p.name, p.color, p.fabric, p.collection, p.pieces + ' pcs', p.pieces + ' piece'].join(' ').toLowerCase().replace(/\s+/g, ' ');
        var flat = hay.replace(/[\s-]/g, '');
        return terms.every(function (t) { return hay.indexOf(t) > -1 || flat.indexOf(t.replace(/[\s-]/g, '')) > -1; });
      });
    },
    related: function (p, limit) {
      var n = limit || 4;
      var same = PRODUCTS.filter(function (x) { return x.collection === p.collection && x.id !== p.id && x.status === 'in-stock'; });
      var rest = PRODUCTS.filter(function (x) { return x.id !== p.id && same.indexOf(x) === -1; });
      return same.concat(rest).slice(0, n);
    }
  };

  root.RD_PRODUCTS = API;
})(window);
