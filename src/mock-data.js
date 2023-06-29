const products = [
  {
    code: 1,
    name: "Zipped cardigan",
    image:
      "https://image.hm.com/assets/hm/e8/64/e864b1dfc9952f9142cb935d6d04bce86e78d5df.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 919,
      formattedValue: "Rs.919.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_cardigansjumpers_cardigans",
    ratting: 4.1,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/e0/7e/e07ef96117ba1b26504545d30b9e53b612db0c53.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/4b/0d/4b0d1393fcbfcb832a29da92e9bd6aa4ae539eb2.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/c9/c2/c9c2bdd29350740e7ac22bad350f4cb01f4f5dfe.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/b6/c9/b6c99c5bc89a752142a5f7ce4ae8a6c4ae603ccc.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/cf/fd/cffdf8f2084a5823fd9ae7a70ec69150e57abc70.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/e0/5f/e05f9029dadcb7c4fd703698f8aa42cedc54d25b.jpg",
      },
    ],
  },
  {
    code: 2,
    name: "Skinny Jeans",
    image:
      "https://image.hm.com/assets/hm/5a/b3/5ab3eaa681265286f795d408658be503d82fc74d.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 999,
      formattedValue: "Rs.999.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_jeans_skinny",
    ratting: 4.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/05/1f/051f153033db9a50f19da87bb0bf10863e04a99a.jpg",
      },
    ],
  },
  {
    code: 3,
    name: "Waffled jersey pyjamas",
    image:
      "https://image.hm.com/assets/hm/0f/12/0f12ccbb12b9e5abcf86bc546299b79ba1df1825.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 799,
      formattedValue: "Rs.799.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_nightwear_pyjamas",
    ratting: 5.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/3b/f4/3bf4a0bd43f05ba5c9f6776dedcdaecb3259cda8.jpg",
      },
    ],
  },
  {
    code: 4,
    name: "Knot-detail sandals",
    image:
      "https://image.hm.com/assets/hm/1a/19/1a190143cab1f1ee0e650aa877794539aca73b3c.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1299,
      formattedValue: "Rs.1,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 649,
      formattedValue: "Rs.649.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_basics_trousersleggings",
    ratting: 3.9,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/fb/22/fb22aac20b69db6834712a4d136f7a1664de9579.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/67/02/67025b079cc3f712cb1289eea99416a1ae94d29c.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/b5/85/b585df1f8855fd8950ae62c165aabc0fd59d2b67.jpg",
      },
    ],
  },
  {
    code: 5,
    name: "Skinny Fit Cargo joggers",
    image:
      "https://image.hm.com/assets/hm/1f/38/1f3834aa2d51a91f30eb36510ee3f3620d1050b9.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2699,
      formattedValue: "Rs.2,699.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1619,
      formattedValue: "Rs.1,619.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_trousers_cargo",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/bf/9c/bf9cf8ae7ddc6167be523c40092f54857ff3b13f.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/dc/f4/dcf4454484f27521805700ecfef0828c036d6e48.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/8a/80/8a80508ef6244d19ae47a212eb54423beb70f8c8.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ef/54/ef543ba65ec581065e1a8e31ab92d546abdb6e7a.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ed/c9/edc938ed3d3e28ab92d4b802d235d5908afcdb31.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/f3/1f/f31fbaeb57e46bf9be53e792692128d283af2a28.jpg",
      },
    ],
  },
  {
    code: 6,
    name: "Wrap dress",
    image:
      "https://image.hm.com/assets/hm/9e/51/9e513473b269336fa96863ada07a5fa379dda779.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_dresses_shortdresses",
    ratting: 4.1,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/bb/36/bb36bad1d15ffe71719d4cbe375311038ccc2f64.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/8f/14/8f14a4daffe1e730b2f329c71c87a27fdd108759.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/f7/8c/f78c74bf53cd4de98bd368ec42db7ca710aa7679.jpg",
      },
    ],
  },
  {
    code: 7,
    name: "Linen-blend pull-on trousers",
    image:
      "https://image.hm.com/assets/hm/5d/e8/5de871aa0504fcaaa376e820120a484a5f29b999.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1799,
      formattedValue: "Rs.1,799.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1259,
      formattedValue: "Rs.1,259.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_trousers",
    ratting: 4.9,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/44/e1/44e14f5c0edcc4dc5125c45a77dfdab5af1a5d39.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/03/e5/03e55344b72ea162c696a2991092dc1956b6b56f.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/eb/b8/ebb8d2c8299ca2beb90e074eb1a8141fc0c8642f.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/d3/49/d349e159975ad45d0b642e3a0c2ae52503a27c55.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/53/0a/530a24911f3a3261379d49bb60a4ed7a2a2ce2e6.jpg",
      },
    ],
  },
  {
    code: 8,
    name: "Ankle-length trousers",
    image:
      "https://image.hm.com/assets/hm/3f/25/3f259fd07c88d86c15434d2d913348f9515d48fa.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1399,
      formattedValue: "Rs.1,399.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_trousers_highwaisted",
    ratting: 4.3,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/35/04/35049c7125132245267e279c8fab8bcc58bb6f65.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/27/09/270996d6e920e3c1e7eeea74024dcd372524f167.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/90/db/90db152d62ac5c23b84e9160f31e90cabeb13c7f.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/22/a7/22a781c41cf17576872a7a05b6ce98cb261f4934.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/eb/20/eb209b714f7490b7c4bb1c6fbffc6d19ec7e20dd.jpg",
      },
    ],
  },
  {
    code: 9,
    name: "2-pack Relaxed Fit sweatshirts",
    image:
      "https://image.hm.com/assets/hm/13/55/135567ff5de0f17728d791d552a82b83faaa3d7d.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_hoodiessweatshirts_sweatshirts",
    ratting: 3.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/ff/fb/fffb529a7c5cd887b1d048d86ba226e3de85b233.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/b1/72/b172c5775e3bb441696564984b2e0973cd67d9b8.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/86/ca/86ca5114343b5fbc0abf416a79756a690951e39d.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/fc/5f/fc5f3dd76936d1eab8652330f732c33bf15bfbe5.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/02/3d/023d1d563a88ea747e3b5ab57fbd78faf0168b5a.jpg",
      },
    ],
  },
  {
    code: 10,
    name: "5-pack cotton short trunks",
    image:
      "https://image.hm.com/assets/hm/30/0f/300f5c001e6250a8791f2f9f10378e9495aef78c.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 829,
      formattedValue: "Rs.829.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_underwear_trunks",
    ratting: 4.1,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/55/2d/552d2f316a910be947e03da5d0f696fd463afa2d.jpg",
      },
    ],
  },
  {
    code: 11,
    name: "Chunky Chelsea boots",
    image:
      "https://image.hm.com/assets/hm/34/75/3475289332d0c4951bb5bbc3ec6687860b8b0584.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 3499,
      formattedValue: "Rs.3,499.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1749,
      formattedValue: "Rs.1,749.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_shoes",
    ratting: 4.7,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/50/21/5021bc84d58de6a006f1a38f88afaceabeb89c64.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/33/76/33764004ae4b3c651ef8cfdc32c732e2a94bc16b.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/4d/ff/4dffa26b54565e22572de12a5c7b83236288c480.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/29/f3/29f38920f8a8af6ca0106f94aa926575ae033816.jpg",
      },
    ],
  },
  {
    code: 12,
    name: "Slim Fit Turtleneck top",
    image:
      "https://image.hm.com/assets/hm/93/e7/93e7b1254cbb41f08abf83ee3f952702597aa849.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1299,
      formattedValue: "Rs.1,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 589,
      formattedValue: "Rs.589.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_tshirtstanks",
    ratting: 3.6,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/3c/fc/3cfc49d8aceea3f08dae2cbb8523dd9adfd25831.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/f7/3e/f73edb828dc513a0c086883ac07b17f2fcb7a8a9.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/a3/d2/a3d2b2cd55d38454655b72f23462bc6f131374fd.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/19/c4/19c4c8f75277728a43ac0a639345031792039d49.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/cf/61/cf61736bd31b3bb601d9604077de7252d2acdf39.jpg",
      },
    ],
  },
  {
    code: 13,
    name: "Wide High Jeans",
    image:
      "https://image.hm.com/assets/hm/ad/5a/ad5aaba670c05b47e2b341e12f371914d4d39229.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1729,
      formattedValue: "Rs.1,729.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_jeans",
    ratting: 4.6,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/e1/00/e100c6cdf5aee89eba8b1c6285e0b0506c9a719b.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/c6/3a/c63ab6bef994b279c089b848ed0fad3412aad382.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/f5/2a/f52a2cc1e68cecce339648cafda7f4a5fcbbcfb1.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/6e/db/6edb551cea0466cf3cfcffa029b8b52832988e13.jpg",
      },
    ],
  },
  {
    code: 14,
    name: "Cropped rugby shirt",
    image:
      "https://image.hm.com/assets/hm/5d/c6/5dc6b3e0ad0e67a360973131a4897541380430ed.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1299,
      formattedValue: "Rs.1,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 649,
      formattedValue: "Rs.649.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_tops_longsleeve",
    ratting: 3.1,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/67/83/6783e65faafaa0899e7bca4eb13073789d9ef6d7.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/3d/40/3d40b6e85bd2f6a542773f4d91da07482acbdb05.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/8e/7f/8e7ffd917d4de3095975ff36b7125e091df4f4ee.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ba/a9/baa980628432b39db45c3e30d1ce9245400baf70.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/a8/a9/a8a9f5e36d28fb78bb6760ddaa75bf063526c21d.jpg",
      },
    ],
  },
  {
    code: 15,
    name: "Pyjama top and leggings",
    image:
      "https://image.hm.com/assets/hm/37/4b/374baf5e5a89794f7ae696edab755c6865df50f6.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 449,
      formattedValue: "Rs.449.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_nightwear_pyjamas",
    ratting: 3.9,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/05/b0/05b0909611055372e151c3140a8f8feb1903a859.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/3d/41/3d419fd29cb4d64d4ca28c803208510f80f4bf95.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/d1/7b/d17b28a92fb7ae81f813c14b33e2cbccfa701364.jpg",
      },
    ],
  },
  {
    code: 16,
    name: "Chunky buckle-detail loafers",
    image:
      "https://image.hm.com/assets/hm/0f/47/0f476ce970ed9a9170065b0a860fa5dbe3eee52b.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "Ladies_shoes_loafers",
    ratting: 3.4,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/31/4d/314dd2819eefcc4ed79c39721a253a8c7acbdbde.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/88/0f/880f24a703b8d5920e45d72be273f04e71b1771f.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/63/38/6338fc7dc31407049882b254d6ef50518bc3c5af.jpg",
      },
    ],
  },
  {
    code: 17,
    name: "Pyjamas",
    image:
      "https://image.hm.com/assets/hm/72/11/7211337155c6d0a9cfa2ad5ca2dedf8742771cd7.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 799,
      formattedValue: "Rs.799.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_nightwear_pyjamas",
    ratting: 4.4,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/e1/32/e132e66cf7daf7414b4b300d4b7b97191a78b458.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/90/ad/90adc9bc38cf4d1c437d3ed4cea659368222d949.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/81/63/8163785e95435d64b1b7f577f47603e420ab1842.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/a3/1f/a31fd4c17b582b9d60d401d88fffb379b77a89c8.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/36/f4/36f47aa5d982f034ac3c649318fdf7b414448124.jpg",
      },
    ],
  },
  {
    code: 18,
    name: "Slim Fit Cotton polo shirt",
    image:
      "https://image.hm.com/assets/hm/e5/d4/e5d47951f09e5552d3b8c7fd534284432a2eb4f9.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1299,
      formattedValue: "Rs.1,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 779,
      formattedValue: "Rs.779.00",
    },
    categoryName: "Men",
    mainCategoryCode: "MEN_TSHIRTSTANKS_POLO",
    ratting: 3.7,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/ef/26/ef26481d30e34f3eaa30faa56a770d6ccef6b9cc.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/4c/8f/4c8fc8750d495abc8a01c7235724a49b3eafc521.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/03/5c/035c39ac793d4b0a796a4eb5362617573751ecb1.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ed/e6/ede6dc8f230e133d8d72d6e620c2ed90ef87b0ec.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/2c/90/2c902c2549aae81cc0fc9ce5b3df00a2b2095d5d.jpg",
      },
    ],
  },
  {
    code: 19,
    name: "Linen-blend pull-on trousers",
    image:
      "https://image.hm.com/assets/hm/e6/9b/e69b5a0df8aea496817e47ba13757ae8aa2840bb.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1799,
      formattedValue: "Rs.1,799.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1259,
      formattedValue: "Rs.1,259.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_trousers",
    ratting: 3.6,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/72/13/721346734134c1c6ab731cbf19e6041b4d13329c.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/8f/e8/8fe87f4935abb3b4092ddcff73c8cf705133ff42.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/e3/cf/e3cf829c4cc213db889681332395f9743c171183.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/1a/20/1a2075871da5a661eb73d672939fe738042e29f1.jpg",
      },
    ],
  },
  {
    code: 20,
    name: "Relaxed Fit Hoodie",
    image:
      "https://image.hm.com/assets/hm/60/62/60629c6b2c3c690c247a6b1bff2d4541f4155d0c.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_hoodiessweatshirts_hoodies",
    ratting: 4.1,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/95/30/95309b91b000c495dbcf7b3557617af197cf1ec3.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/e1/21/e1213aed3000f30788fb54f8a63d7f9e5656a147.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/2c/4c/2c4cf5f68c9719af6dd01abe11db806fe9944b42.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/f3/cd/f3cd5c7eef9bbee01208049bb859d6800aca1ebe.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/92/e6/92e6c40f0e75a7f1a94c59cf5e0f8d65eae235c8.jpg",
      },
    ],
  },
  {
    code: 21,
    name: "Relaxed Fit Printed hoodie",
    image:
      "https://image.hm.com/assets/hm/12/86/12863ffb711b2ab147c0cb73946946c3ac69a0de.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1269,
      formattedValue: "Rs.1,269.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_hoodiessweatshirts_hoodies",
    ratting: 4.4,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/55/7f/557f72a4e3a90e2f6a55cf97ad1b75b596e299c4.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/03/43/0343e214dab1845dca5f39b8222b1db2645a1ae6.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/b2/60/b260016ca325378b2d80b4620979566506b4aab5.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/c6/74/c674b54f5c652540624942641cf4ecef56d4dbdd.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/37/76/3776d4b59b22ffefe61b4e6b2832aa2645c8276b.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/1d/70/1d70ad392c4674ae050c241effb4f4116ae1c7bb.jpg",
      },
    ],
  },
  {
    code: 22,
    name: "Low Waist Cargo Jeans",
    image:
      "https://image.hm.com/assets/hm/80/d5/80d53c8c742f14f1837de15b650616cdba122b19.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 699,
      formattedValue: "Rs.699.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_trousers_cargo",
    ratting: 3.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/10/d0/10d044a85c61ef67a894d72e0a9c4c52bcc54764.jpg",
      },
    ],
  },
  {
    code: 23,
    name: "Relaxed Fit Corduroy shirt",
    image:
      "https://image.hm.com/assets/hm/3e/dc/3edc5d7df3622d82bc2f5440dbf5e4361799f033.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1099,
      formattedValue: "Rs.1,099.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_shirts_longsleeved",
    ratting: 3.9,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/ae/14/ae14d9fa82a8f3ea46fcbc1f4b600a9922f1bc2a.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/1a/ca/1acac481feb0d52c605c8e9509fa74d1ce5e7c82.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/4a/4b/4a4bb0a18ec02a1ec2d4243c62d4455a74f3ddda.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/b7/51/b751a89d185eca10c05da2cb1dc1ad5b5117dcb1.jpg",
      },
    ],
  },
  {
    code: 24,
    name: "Slim Fit Cotton polo shirt",
    image:
      "https://image.hm.com/assets/hm/cf/c7/cfc7a40d9432a96ee87d4ec7a19db0341dde589b.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1299,
      formattedValue: "Rs.1,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 719,
      formattedValue: "Rs.719.00",
    },
    categoryName: "Men",
    mainCategoryCode: "MEN_TSHIRTSTANKS_POLO",
    ratting: 4.6,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/ca/86/ca862b2b54be5dea33f3aa1f25eccde1863965e5.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/aa/98/aa986a9afd2b7d280dfac4506add0286e0cc9289.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/c1/bc/c1bcc732b51858f9dc076254b048066ef906de23.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/f1/b0/f1b0411d95e2829f7d751d45f93aecd1c98d674f.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/72/79/7279fa4fdbeb2102f39eebd0f4d913397bd298f2.jpg",
      },
    ],
  },
  {
    code: 25,
    name: "Regular Fit Printed hoodie",
    image:
      "https://image.hm.com/assets/hm/0b/b5/0bb53720575450c0952ca1cc3dfcddd612ab429b.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1099,
      formattedValue: "Rs.1,099.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_hoodiessweatshirts_hoodies",
    ratting: 2.9,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/b4/a9/b4a923c47d5d4e348441b6f367f49cbbdd573321.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/85/ec/85ec4fe8fe41b517797cbf0285ee60350f6908b3.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/cf/c8/cfc8e79d3637cb22e89b84de66545017156d6a0b.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/87/56/87568e2998e67811f9a7652f3c1c5c76095328ba.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ac/74/ac74ce734d9b6e0a7ee28301f666e838fbd4d70d.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/68/7f/687f4d677e720a0b99ae538341d1ba9ec79a0f0c.jpg",
      },
    ],
  },
  {
    code: 26,
    name: "Linen-blend pull-on trousers",
    image:
      "https://image.hm.com/assets/hm/2b/47/2b475edc5c3f112a5a77be36c160cd1f9148d232.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1799,
      formattedValue: "Rs.1,799.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_trousers",
    ratting: 3.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/3c/d4/3cd48b1b1342531441bfabfb7dfc0971f7cfb46b.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/a6/5c/a65c31cefe52976594ddf38abec99e2bc99cfda5.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/1f/9b/1f9b5f125dc71caf787a1818eca87e5be2a30c0b.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/63/1c/631caa9d8bcce7762dcc37abd299b88a2ee0a322.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ab/c2/abc2418bcd92598c29eb93149ac5ec930ac0aa7d.jpg",
      },
    ],
  },
  {
    code: 27,
    name: "Crochet-look trousers",
    image:
      "https://image.hm.com/assets/hm/ca/50/ca509904514368a5591d5c7547e082cf9c9ad842.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1299,
      formattedValue: "Rs.1,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 519,
      formattedValue: "Rs.519.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_trousers_flare",
    ratting: 4.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/b1/62/b162a596513788a7428cef910c4f5fb53cfcd628.jpg",
      },
    ],
  },
  {
    code: 28,
    name: "Straight High Split Jeans",
    image:
      "https://image.hm.com/assets/hm/3f/11/3f11d263f78300d896bde6714c5cbeb41666f5f3.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2699,
      formattedValue: "Rs.2,699.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1889,
      formattedValue: "Rs.1,889.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_jeans_slim",
    ratting: 5.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/e2/f3/e2f340af6dc106ee45b8a91c526664ab6f2da2fe.jpg",
      },
    ],
  },
  {
    code: 29,
    name: "High-waisted joggers",
    image:
      "https://image.hm.com/assets/hm/47/91/4791d41b4ed00e01ba902e1553dee1f84199b53d.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_basics_trousersleggings",
    ratting: 3.1,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/96/2c/962c5673268e8b8bc48ad26d2b757abff2d04d62.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/9c/96/9c9695bac230d71cba140eeaffc3652c712388f2.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/4d/3e/4d3ebb27ed27eeeded6df15d80a0c44189e1e0d5.jpg",
      },
    ],
  },
  {
    code: 30,
    name: "Small string pouch bag",
    image:
      "https://image.hm.com/assets/hm/63/ca/63cac4664111b218f92f9cdd8477496e24966db5.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 689,
      formattedValue: "Rs.689.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_accessories_bags_clutchespouches",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/c6/41/c64143b7c09820d7aa37761b682180ae898110f5.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/33/1b/331b0950acbcc3d7a6eb7ac4e91802334586c444.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/1b/dc/1bdccad71568845c4ab31b67490a24c42779fbf4.jpg",
      },
    ],
  },
  {
    code: 31,
    name: "Pyjamas",
    image:
      "https://image.hm.com/assets/hm/56/e6/56e6393561ebe608c054447f53fe92227374f635.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 599,
      formattedValue: "Rs.599.00",
    },
    categoryName: "Ladies",
    ratting: 3.9,
    mainCategoryCode: "ladies_nightwear_pyjamas",
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/0f/81/0f818eba1e6f9d8766eee6993c2fa03f35e7384e.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/64/63/64637fcaf16738c8a3af6e2956de5b1bb5333a68.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/0d/85/0d852df4755646ea07c171c32d9357d28fcd5be7.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ed/15/ed15e1f138f0d7d99e611b5b102b61236a755ab4.jpg",
      },
    ],
  },
  {
    code: 32,
    name: "Flare Low Jeans",
    image:
      "https://image.hm.com/assets/hm/7b/8b/7b8bc992bba38f83ce5a963ddde59e0c4051e549.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1799,
      formattedValue: "Rs.1,799.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 989,
      formattedValue: "Rs.989.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_jeans_bootcut",
    ratting: 4.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/51/13/51133b5a0b51f1a6045e43b932e3e6e0bbd7c5de.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ed/c6/edc6712cf8aa3681c28b98067d81acc94d8ae62a.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/d4/ec/d4ec1df2fcdc2df57c700341a236678c640a0945.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/da/2f/da2f11faf03e954897312d42e1c43cee8ac0e5fa.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/1b/ac/1bac37dd55823e4a1841cf2f764b5532d98a5e4c.jpg",
      },
    ],
  },
  {
    code: 33,
    name: "Flared sequined leggings",
    image:
      "https://image.hm.com/assets/hm/38/07/3807ea5a616040e2519e8e1f2e7862bae7692459.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 599,
      formattedValue: "Rs.599.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_trousers_leggings",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/4b/e2/4be258c681775ea3372ede8d949cd6aea318dbc6.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/64/95/6495b0cc58af6258519f4e1e5a09e421794bd855.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/92/c4/92c4a000559270ff534974d5f9084962b211968c.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/e1/1c/e11c62eb66df5f02508eccf2d1b2de480439f2d7.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/fa/12/fa1226c881118de14317332d0f1b70c85435446d.jpg",
      },
    ],
  },
  {
    code: 34,
    name: "5-pack cotton thong briefs",
    image:
      "https://image.hm.com/assets/hm/b1/ec/b1ec3436ea6c9468ad704c1b6151c240598f0135.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 999,
      formattedValue: "Rs.999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 399,
      formattedValue: "Rs.399.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_lingerie_briefsknickers_multipack",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/89/09/8909c1b726c4530ad124d6f7f48bb75399f05ad0.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/b7/16/b7162bcd0a0365677227c6313cafbfb6bb239901.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/2b/06/2b06bd1aa90d84cb172a1ee683f1e6331d6732bc.jpg",
      },
    ],
  },
  {
    code: 35,
    name: "Handwoven merino wool rug",
    image:
      "https://image.hm.com/assets/hm/bb/80/bb804fc6e47808d1d4e1210f89b983809037a01c.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 25999,
      formattedValue: "Rs.25,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 12999,
      formattedValue: "Rs.12,999.00",
    },
    categoryName: "Home All",
    mainCategoryCode: "home_rugs",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/14/68/1468a79cf28bf2df99e665190ccc79670946c722.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/fe/04/fe04915886a2892854bc779f13279c72ff458ed3.jpg",
      },
    ],
  },
  {
    code: 36,
    name: "Patterned resort shirt",
    image:
      "https://image.hm.com/assets/hm/78/22/78225ede8a9b9463398bd5020660a22793084d63.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 689,
      formattedValue: "Rs.689.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_shirtsblouses_shirts",
    ratting: 4.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/92/20/9220abcd7ebea7c4eea0ca403ca2d3b9e1bc9f00.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/81/ba/81ba0f4de0cc106f948b38a4a68342ebb7a31880.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/bc/ea/bcea4e1f118839c815e3c5fea55a6535b91fa6a4.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/90/7f/907f94864dca4f6ad39f4e4c0d8d20b19712d7ca.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/60/c0/60c0e60c7035bcc988d62e9948927f798f62aed2.jpg",
      },
    ],
  },
  {
    code: 37,
    name: "Straw shoulder bag",
    image:
      "https://image.hm.com/assets/hm/8e/16/8e16b47c4ae6710173479ba4a450c18a25c825e7.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 599,
      formattedValue: "Rs.599.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_accessories_bags",
    ratting: 4.1,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/a0/8b/a08b11244243d3fe0638830a80172a9d6e050149.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/a4/15/a4153e7fd7aa50adb4abfc81224d91dc9a3bdcb1.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/eb/dc/ebdc9c43fd36ca1dfc60c2c57fb524c8ba01d007.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/bc/43/bc43364690ee3b32ddbfdb828fd31411579803ad.jpg",
      },
    ],
  },
  {
    code: 38,
    name: "Low Waist Denim skirt",
    image:
      "https://image.hm.com/assets/hm/d2/a6/d2a6eacf175aa28199dbaac375a9974c6870f7a1.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 599,
      formattedValue: "Rs.599.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "Ladies_skirts_denim",
    ratting: 4.8,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/be/9c/be9cedc08461b3faa1b143fae4c902753ac2f61e.jpg",
      },
    ],
  },
  {
    code: 39,
    name: "Pyjamas",
    image:
      "https://image.hm.com/assets/hm/a1/02/a1026bb17ac2ebb8d71693238ac9e62a86858ddd.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 449,
      formattedValue: "Rs.449.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_nightwear_pyjamas",
    ratting: 4.9,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/f0/84/f0847177708b94c7e07ae4cc435b1c720604c2a3.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/40/e3/40e3bb4f519191a12b55ee1f7a2772cafe648c3b.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/92/80/928045a417242ae5d7527434434f6994c2038f5a.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/9b/b4/9bb40e06b1360db7f95c8adab8889d906c0e48eb.jpg",
      },
    ],
  },
  {
    code: 40,
    name: "Slim Fit Cotton polo shirt",
    image:
      "https://image.hm.com/assets/hm/e5/d4/e5d47951f09e5552d3b8c7fd534284432a2eb4f9.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1299,
      formattedValue: "Rs.1,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 779,
      formattedValue: "Rs.779.00",
    },
    categoryName: "Men",
    mainCategoryCode: "MEN_TSHIRTSTANKS_POLO",
    ratting: 4.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/ef/26/ef26481d30e34f3eaa30faa56a770d6ccef6b9cc.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/4c/8f/4c8fc8750d495abc8a01c7235724a49b3eafc521.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/03/5c/035c39ac793d4b0a796a4eb5362617573751ecb1.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ed/e6/ede6dc8f230e133d8d72d6e620c2ed90ef87b0ec.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/2c/90/2c902c2549aae81cc0fc9ce5b3df00a2b2095d5d.jpg",
      },
    ],
  },
  {
    code: 41,
    name: "Chunky Chelsea boots",
    image:
      "https://image.hm.com/assets/hm/34/75/3475289332d0c4951bb5bbc3ec6687860b8b0584.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 3499,
      formattedValue: "Rs.3,499.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1749,
      formattedValue: "Rs.1,749.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_shoes",
    ratting: 5.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/50/21/5021bc84d58de6a006f1a38f88afaceabeb89c64.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/33/76/33764004ae4b3c651ef8cfdc32c732e2a94bc16b.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/4d/ff/4dffa26b54565e22572de12a5c7b83236288c480.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/29/f3/29f38920f8a8af6ca0106f94aa926575ae033816.jpg",
      },
    ],
  },
  {
    code: 42,
    name: "Ankle-length trousers",
    image:
      "https://image.hm.com/assets/hm/21/ba/21bad9735edf143c0d33643f7196e709112c4144.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1399,
      formattedValue: "Rs.1,399.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_jeans_skinny",
    ratting: 4.4,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/05/1f/051f153033db9a50f19da87bb0bf10863e04a99a.jpg",
      },
    ],
  },
  {
    code: 43,
    name: "Glittery trainers",
    image:
      "https://image.hm.com/assets/hm/a9/7d/a97df6de28a519712b7d5a836e6d425685be508d.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 899,
      formattedValue: "Rs.899.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_divided_shoes",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/47/14/47140f4a1f540e3b6026db48666c09a225119045.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/e6/47/e647de8643098d1ec94417d03f2107d904856b48.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/30/d2/30d2fdff1741a3d5f3af942d1336e1f393b5cd46.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/9f/3d/9f3deafc1f142c53e01e165102c09cecb6e0c00e.jpg",
      },
    ],
  },
  {
    code: 44,
    name: "Cut-out dress",
    image:
      "https://image.hm.com/assets/hm/d5/b9/d5b9cba8402b53572cf99ea779ee85124fc9db59.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 599,
      formattedValue: "Rs.599.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_dresses_camidresses",
    ratting: 4.1,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/3a/23/3a238cc1e4c21c703658573dc7b36129c29f28aa.jpg",
      },
    ],
  },
  {
    code: 45,
    name: "High-waisted cargo shorts",
    image:
      "https://image.hm.com/assets/hm/69/47/69471ab46db6c21599f4995c1c2776b3d7e7fc2f.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2099,
      formattedValue: "Rs.2,099.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 839,
      formattedValue: "Rs.839.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "Ladies_shorts_highwaisted",
    ratting: 3.8,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/c7/4e/c74eeeb0ebfde810aeccf1605380b28de4b7307f.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/c5/0a/c50a88bcdda009f31428abe0320ffc2f6856a8b0.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/4c/fc/4cfcb78d196175c9a4bd883cafdb3afbbfaac31a.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/08/d7/08d7fa26b2dd8a1d9489120aa1f279779ee7c31b.jpg",
      },
    ],
  },
  {
    code: 46,
    name: "Relaxed Fit Corduroy shirt",
    image:
      "https://image.hm.com/assets/hm/6b/7d/6b7dd318b3782c565cb4b855c7d009e5cd002ef6.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1999,
      formattedValue: "Rs.1,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1299,
      formattedValue: "Rs.1,299.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_shirts_longsleeved",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/c7/26/c726b6d0decf41bea001d2b5645824321d529efe.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/29/4b/294be88c53b134f15cbe1a403ff02862016ee326.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/6b/6b/6b6b433395804a3e8b7d0b4b7504dd8bfcf013de.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/5f/53/5f53a49ecd5fb73b71a6986ad4c4b61da063ab27.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/83/14/8314d98ab3c21748de800eeb3e2ef6e698d71209.jpg",
      },
    ],
  },
  {
    code: 47,
    name: "5-pack cotton short trunks",
    image:
      "https://image.hm.com/assets/hm/47/0f/470fd5d08d330bad732706afb56423645825c10f.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 829,
      formattedValue: "Rs.829.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_underwear_trunks",
    ratting: 3.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/ee/cc/eecc2799efa4ea86b5fd36864dee729a88caca35.jpg",
      },
    ],
  },
  {
    code: 48,
    name: "Straight High Jeans",
    image:
      "https://image.hm.com/assets/hm/bb/54/bb540550a21765b83963d7ced24536d231fa3bd2.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 3999,
      formattedValue: "Rs.3,999.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1199,
      formattedValue: "Rs.1,199.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_divided_jeans_straight",
    ratting: 3.8,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/55/95/5595d1e7bf2e48a8e7ff3470c26b539fb27deff9.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/59/66/59662582b13d886c77b3bdc4f606a74dc6834ac8.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/a1/4f/a14f326d5a1e5924a02c7fe671ad6ed93e7a0c6a.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/f0/86/f0865a1fd33540ac6fb575ccf5008336035c2d63.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/91/13/911320a8e4831eae38344ea53b1d4e5a93eb596c.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ec/1c/ec1c88ca53e9acc8fdf3228067f28b19e2b3ce72.jpg",
      },
    ],
  },
  {
    code: 49,
    name: "Seamless leggings",
    image:
      "https://image.hm.com/assets/hm/43/ae/43ae5e2de79625328a67c63d8ea46cae03248430.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1299,
      formattedValue: "Rs.1,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 389,
      formattedValue: "Rs.389.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_trousers_leggings",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/0d/01/0d010562d000f0eafa4c1363118fa96b54e6a487.jpg",
      },
    ],
  },
  {
    code: 50,
    name: "Patterned wrap dress",
    image:
      "https://image.hm.com/assets/hm/d3/a4/d3a4adb4969af4b398b58b820c4b086c0c1a7a90.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1149,
      formattedValue: "Rs.1,149.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "Ladies_dresses_wrap",
    ratting: 3.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/84/2c/842c1bfb0e47dea94ee33f0490aa383503ee60d5.jpg",
      },
    ],
  },
  {
    code: 51,
    name: "Slim Fit Turtleneck top",
    image:
      "https://image.hm.com/assets/hm/93/e7/93e7b1254cbb41f08abf83ee3f952702597aa849.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1299,
      formattedValue: "Rs.1,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 589,
      formattedValue: "Rs.589.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_tshirtstanks",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/3c/fc/3cfc49d8aceea3f08dae2cbb8523dd9adfd25831.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/f7/3e/f73edb828dc513a0c086883ac07b17f2fcb7a8a9.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/a3/d2/a3d2b2cd55d38454655b72f23462bc6f131374fd.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/19/c4/19c4c8f75277728a43ac0a639345031792039d49.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/cf/61/cf61736bd31b3bb601d9604077de7252d2acdf39.jpg",
      },
    ],
  },
  {
    code: 52,
    name: "Egyptian duvet cover set",
    image:
      "https://image.hm.com/assets/hm/d4/ad/d4ad85cbdbf16b582a80f74de7bec4a24fd1388d.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 9999,
      formattedValue: "Rs.9,999.00",
    },
    categoryName: "Home All",
    mainCategoryCode: "home_bedlinen_duvetscoversets",
    ratting: 3.9,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/70/ec/70ec6b12f98d41a0c3513ca677e127ed0e4db021.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/9b/a1/9ba13fa1d47e491f8d2e25e1060754ca3661889f.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/2e/d0/2ed00dbc5102150f14ccd7e55441ca412e0dadce.jpg",
      },
    ],
  },
  {
    code: 53,
    name: "Relaxed Fit Printed T-shirt",
    image:
      "https://image.hm.com/assets/hm/90/67/9067d44075375b2292ed1c06a7eddba3b9329685.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 899,
      formattedValue: "Rs.899.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_tshirtstanks_printed",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/a3/a3/a3a37fd4f347ad891d376aa6bf2ef9385af4d7b3.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/4f/10/4f109acaefa9e5086921d6196b08dac66bef79a4.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/bf/47/bf4775e99da45e729107ed1ba76f96c4a34fdebb.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/3c/c1/3cc15b7596b622163462e6ce050968db5559b550.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/04/4e/044e264f260a7fed8970294d6e1a970ba0024b71.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/ac/4d/ac4d0012c95b99829248f79abe7183d59c1a409b.jpg",
      },
    ],
  },
  {
    code: 54,
    name: "Slim Jeans",
    image:
      "https://image.hm.com/assets/hm/21/92/2192ced80298025510f434238c0ad325df7e11e9.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_jeans_slim",
    ratting: 3.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/56/71/5671aca244b6631b98dfe405dfee01f2fad833cc.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/e9/2a/e92ae45968e0db3b661f474a1b7771808021c904.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/01/bf/01bf640c72f5504e3026a2b40a31414d7a15c0eb.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/c2/b5/c2b51dd8133eb1ac6865cf8b4c6990c919b444e0.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/2e/65/2e655996d3649f03bda19bc623920208ee3b5927.jpg",
      },
    ],
  },
  {
    code: 55,
    name: "Relaxed Fit sweatshirts",
    image:
      "https://image.hm.com/assets/hm/13/55/135567ff5de0f17728d791d552a82b83faaa3d7d.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_hoodiessweatshirts_sweatshirts",
    ratting: 4.5,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/ff/fb/fffb529a7c5cd887b1d048d86ba226e3de85b233.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/b1/72/b172c5775e3bb441696564984b2e0973cd67d9b8.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/86/ca/86ca5114343b5fbc0abf416a79756a690951e39d.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/fc/5f/fc5f3dd76936d1eab8652330f732c33bf15bfbe5.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/02/3d/023d1d563a88ea747e3b5ab57fbd78faf0168b5a.jpg",
      },
    ],
  },
  {
    code: 56,
    name: "High-waisted joggers",
    image:
      "https://image.hm.com/assets/hm/47/91/4791d41b4ed00e01ba902e1553dee1f84199b53d.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 1499,
      formattedValue: "Rs.1,499.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_basics_trousersleggings",
    ratting: 5.0,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/96/2c/962c5673268e8b8bc48ad26d2b757abff2d04d62.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/9c/96/9c9695bac230d71cba140eeaffc3652c712388f2.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/4d/3e/4d3ebb27ed27eeeded6df15d80a0c44189e1e0d5.jpg",
      },
    ],
  },
  {
    code: 57,
    name: "Canvas cargo trousers",
    image:
      "https://image.hm.com/assets/hm/46/a5/46a544dfb078ff021a77fc55059f549cfdad2ced.jpg",
    sellingAttributes: ["New Arrival"],
    actualPrice: {
      currencyIso: "INR",
      value: 1799,
      formattedValue: "Rs.1,799.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_trousers_cargo",
    ratting: 3.9,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/c4/96/c496ffad2cef4d7a8b2541818d857390ea603466.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/61/b0/61b0df9ff20578b8d7e0fddb54adc2ae5b20268a.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/8e/82/8e828a0bf23f7cae76f32711c309c023febd36fe.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/1b/03/1b03d34b90b7e54e9607edbaeb5a262db555d7bb.jpg",
      },
    ],
  },
  {
    code: 58,
    name: "Tapered linen-blend trousers",
    image:
      "https://image.hm.com/assets/hm/52/31/5231983178ec54b682263d231e61f899627b9fcb.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 919,
      formattedValue: "Rs.919.00",
    },
    categoryName: "Ladies",
    mainCategoryCode: "ladies_trousers_highwaisted",
    ratting: 4.7,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/4d/2d/4d2d16ad95bfbb3e53e2fcf997bb3ba04fe6bb9c.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/6b/c3/6bc396d6a8518ccf5cbb4c8a41b6020f35d58908.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/56/9d/569dab6eb8b1fbff5252cce103db582f2b20e3ec.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/cd/92/cd92cbb59ce43e3dad05df12532cc3f16d21753c.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/15/79/1579026f695a29f702aa64e6defca7984d6a9550.jpg",
      },
    ],
  },
  {
    code: 59,
    name: "Relaxed Fit Printed hoodie",
    image:
      "https://image.hm.com/assets/hm/12/86/12863ffb711b2ab147c0cb73946946c3ac69a0de.jpg",
    actualPrice: {
      currencyIso: "INR",
      value: 2299,
      formattedValue: "Rs.2,299.00",
    },
    discountedPrice: {
      currencyIso: "INR",
      value: 1269,
      formattedValue: "Rs.1,269.00",
    },
    categoryName: "Men",
    mainCategoryCode: "men_hoodiessweatshirts_hoodies",
    ratting: 3.8,
    brandName: "H&M",
    galleryImages: [
      {
        image:
          "https://image.hm.com/assets/hm/55/7f/557f72a4e3a90e2f6a55cf97ad1b75b596e299c4.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/03/43/0343e214dab1845dca5f39b8222b1db2645a1ae6.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/b2/60/b260016ca325378b2d80b4620979566506b4aab5.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/c6/74/c674b54f5c652540624942641cf4ecef56d4dbdd.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/37/76/3776d4b59b22ffefe61b4e6b2832aa2645c8276b.jpg",
      },
      {
        image:
          "https://image.hm.com/assets/hm/1d/70/1d70ad392c4674ae050c241effb4f4116ae1c7bb.jpg",
      },
    ],
  },
];

export default products;
