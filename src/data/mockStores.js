export const mockStores = [
  {
    id: 1,
    name: "Zara Fashion",
    description: "Moda contemporánea para todas las ocasiones. Las últimas tendencias europeas.",
    address: "Av. Principal 123, Centro, Uriangato",
    hours: "Lunes a Viernes: 9:00 AM - 8:00 PM | Sábados: 10:00 AM - 7:00 PM",
    logo: "https://i.pravatar.cc/300",
    coverImage: "https://picsum.photos/id/103/1200/600",
    rating: 4.5,
    category: "Moda casual",
    productType: ["Mujer", "Niña", "Unisex"], // Nuevo campo
    products: [
      {
        id: 101,
        name: "Pantalón slim fit negro",
        price: 599,
        category: "Pants",
        productType: "Mujer", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Pantalón+Zara",
        images: [
          "https://via.placeholder.com/300?text=Pantalón+Frente",
          "https://via.placeholder.com/300?text=Pantalón+Detalle",
          "https://via.placeholder.com/300?text=Pantalón+Lateral"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul marino"],
        features: [
          "100% algodón",
          "Corte slim fit",
          "Cierre con botón y cremallera"
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad y ajuste perfecto",
            date: "2023-05-15"
          },
          {
            id: 2,
            user: "Ana S.",
            rating: 4,
            comment: "Buen pantalón pero la talla viene un poco grande",
            date: "2023-04-22"
          }
        ],
        stock: 15
      },
      {
        id: 102,
        name: "Blusa de seda blanca",
        price: 399,
        category: "Blusa",
        productType: "Mujer", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Blusa+Zara",
        images: [
          "https://via.placeholder.com/300?text=Blusa+Frente",
          "https://via.placeholder.com/300?text=Blusa+Detalle"
        ],
        sizes: ["XS", "S", "M"],
        colors: ["Blanco", "Beige"],
        features: [
          "100% seda",
          "Corte elegante",
          "Cuello en V"
        ],
        rating: 4.2,
        reviews: [
          {
            id: 1,
            user: "María G.",
            rating: 5,
            comment: "Muy cómoda y elegante",
            date: "2023-06-10"
          }
        ],
        stock: 8
      },
      {
        id: 103,
        name: "Chamarra de mezclilla",
        price: 899,
        category: "Chamarra",
        productType: "Unisex", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Pantalón+Zara",
        images: [
          "https://via.placeholder.com/300?text=Pantalón+Frente",
          "https://via.placeholder.com/300?text=Pantalón+Detalle",
          "https://via.placeholder.com/300?text=Pantalón+Lateral"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul marino"],
        features: [
          "100% algodón",
          "Corte slim fit",
          "Cierre con botón y cremallera"
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad y ajuste perfecto",
            date: "2023-05-15"
          },
          {
            id: 2,
            user: "Ana S.",
            rating: 4,
            comment: "Buen pantalón pero la talla viene un poco grande",
            date: "2023-04-22"
          }
        ],
        stock: 15
      },
      {
        id: 104,
        name: "Bolsa de mano",
        price: 599,
        category: "Bolsas",
        productType: "Mujer", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Pantalón+Zara",
        images: [
          "https://via.placeholder.com/300?text=Pantalón+Frente",
          "https://via.placeholder.com/300?text=Pantalón+Detalle",
          "https://via.placeholder.com/300?text=Pantalón+Lateral"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul marino"],
        features: [
          "100% algodón",
          "Corte slim fit",
          "Cierre con botón y cremallera"
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad y ajuste perfecto",
            date: "2023-05-15"
          },
          {
            id: 2,
            user: "Ana S.",
            rating: 4,
            comment: "Buen pantalón pero la talla viene un poco grande",
            date: "2023-04-22"
          }
        ],
        stock: 15
      },
       {
        id: 105,
        name: "Chamarra de mezclilla",
        price: 899,
        category: "Chamarra",
        productType: "Hombre", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Pantalón+Zara",
        images: [
          "https://via.placeholder.com/300?text=Pantalón+Frente",
          "https://via.placeholder.com/300?text=Pantalón+Detalle",
          "https://via.placeholder.com/300?text=Pantalón+Lateral"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul marino"],
        features: [
          "100% algodón",
          "Corte slim fit",
          "Cierre con botón y cremallera"
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad y ajuste perfecto",
            date: "2023-05-15"
          },
          {
            id: 2,
            user: "Ana S.",
            rating: 4,
            comment: "Buen pantalón pero la talla viene un poco grande",
            date: "2023-04-22"
          }
        ],
        stock: 15
      },
      {
        id: 106,
        name: "Zapatos",
        price: 599,
        category: "Zapatos",
        productType: "Niños", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Pantalón+Zara",
        images: [
          "https://via.placeholder.com/300?text=Pantalón+Frente",
          "https://via.placeholder.com/300?text=Pantalón+Detalle",
          "https://via.placeholder.com/300?text=Pantalón+Lateral"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul marino"],
        features: [
          "100% algodón",
          "Corte slim fit",
          "Cierre con botón y cremallera"
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad y ajuste perfecto",
            date: "2023-05-15"
          },
          {
            id: 2,
            user: "Ana S.",
            rating: 4,
            comment: "Buen pantalón pero la talla viene un poco grande",
            date: "2023-04-22"
          }
        ],
        stock: 15
      },
    ]
  },
  // ... otras tiendas con la misma estructura extendida
   {
    id: 2,
    name: "Louis Vuitton",
    description: "Las últimas tendencias europeas.",
    address: "Av. Principal 123, Centro, Uriangato",
    hours: "Lunes a Viernes: 9:00 AM - 8:00 PM | Sábados: 10:00 AM - 7:00 PM",
    logo: "https://robohash.org/mi-usuario?size=600x400", //permite avatares
    coverImage: "https://picsum.photos/id/1033/1200/600",
    rating: 4.5,
    category: "Moda casual",
    productType: ["Mujer", "Hombre"], // Nuevo campo
    products: [
      {
        id: 201,
        name: "Pantalón slim fit negro",
        price: 599,
        category: "pants",
        productType: "Hombre", // Tipo específico para este producto
        image: "https://picsum.photos/seed/ropa3/600/400",
        images: [
          "https://picsum.photos/seed/ropa1/600/400",
          "https://picsum.photos/seed/fashion1/600/400",
          "https://picsum.photos/seed/clothing1/600/400"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul marino"],
        features: [
          "100% algodón",
          "Corte slim fit",
          "Cierre con botón y cremallera"
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad y ajuste perfecto",
            date: "2023-05-15"
          },
          {
            id: 2,
            user: "Ana S.",
            rating: 4,
            comment: "Buen pantalón pero la talla viene un poco grande",
            date: "2023-04-22"
          }
        ],
        stock: 15
      },
      {
        id: 202,
        name: "Blusa de seda blanca",
        price: 399,
        category: "Blusas",
        productType: "Mujer", // Tipo específico para este producto
        image: "https://picsum.photos/seed/moda2/600/400",
        images: [
          "https://via.placeholder.com/300?text=Blusa+Frente",
          "https://via.placeholder.com/300?text=Blusa+Detalle"
        ],
        sizes: ["XS", "S", "M"],
        colors: ["Blanco", "Beige"],
        features: [
          "100% seda",
          "Corte elegante",
          "Cuello en V"
        ],
        rating: 4.2,
        reviews: [
          {
            id: 1,
            user: "María G.",
            rating: 5,
            comment: "Muy cómoda y elegante",
            date: "2023-06-10"
          }
        ],
        stock: 8
      },
      // ... otros productos con la misma estructura extendida
      {
        id: 203,
        name: "Pantalón negro",
        price: 599,
        category: "pants",
        productType: "Hombre", // Tipo específico para este producto
        image: "https://picsum.photos/seed/moda1/600/400",
        images: [
          "https://via.placeholder.com/300?text=Pantalón+Frente",
          "https://via.placeholder.com/300?text=Pantalón+Detalle",
          "https://via.placeholder.com/300?text=Pantalón+Lateral"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul marino"],
        features: [
          "100% algodón",
          "Corte slim fit",
          "Cierre con botón y cremallera"
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad y ajuste perfecto",
            date: "2023-05-15"
          },
          {
            id: 2,
            user: "Ana S.",
            rating: 4,
            comment: "Buen pantalón pero la talla viene un poco grande",
            date: "2023-04-22"
          }
        ],
        stock: 15
      },
      {
        id: 204,
        name: "Blusa ",
        price: 399,
        category: "Blusa",
        productType: "Mujer", // Tipo específico para este producto
        image: "https://picsum.photos/seed/moda100/600/400",
        images: [
          "https://via.placeholder.com/300?text=Blusa+Frente",
          "https://via.placeholder.com/300?text=Blusa+Detalle"
        ],
        sizes: ["XS", "S", "M"],
        colors: ["Blanco", "Beige"],
        features: [
          "100% seda",
          "Corte elegante",
          "Cuello en V"
        ],
        rating: 4.2,
        reviews: [
          {
            id: 1,
            user: "María G.",
            rating: 5,
            comment: "Muy cómoda y elegante",
            date: "2023-06-10"
          }
        ],
        stock: 8
      },
      // ... otros productos con la misma estructura extendida
    ]
  },
  // ... otras tiendas con la misma estructura extendida

   {
    id: 3,
    name: "Nike",
    description: "Moda Deportiva.",
    address: "Av. Principal 123, Centro, Uriangato",
    hours: "Lunes a Viernes: 9:00 AM - 8:00 PM | Sábados: 10:00 AM - 7:00 PM",
    logo: "https://ui-avatars.com/api/?name=Moda+Shop&size=256",
    coverImage: "https://via.placeholder.com/350x200?text=Zara+Fashion",
    rating: 4.5,
    category: "Juvenil",
    productType: ["Mujer", "Hombre", "Niña", "Niño"], // Nuevo campo
    products: [
      {
        id: 301,
        name: "Pantalón slim fit negro",
        price: 599,
        category: "pants",
        productType: "Hombre", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Pantalón+Zara",
        images: [
          "https://via.placeholder.com/300?text=Pantalón+Frente",
          "https://via.placeholder.com/300?text=Pantalón+Detalle",
          "https://via.placeholder.com/300?text=Pantalón+Lateral"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul marino"],
        features: [
          "100% algodón",
          "Corte slim fit",
          "Cierre con botón y cremallera"
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad y ajuste perfecto",
            date: "2023-05-15"
          },
          {
            id: 2,
            user: "Ana S.",
            rating: 4,
            comment: "Buen pantalón pero la talla viene un poco grande",
            date: "2023-04-22"
          }
        ],
        stock: 15
      },
      {
        id: 302,
        name: "Blusa de seda blanca",
        price: 399,
        category: "Blusas",
        productType: "Mujer", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Blusa+Zara",
        images: [
          "https://via.placeholder.com/300?text=Blusa+Frente",
          "https://via.placeholder.com/300?text=Blusa+Detalle"
        ],
        sizes: ["XS", "S", "M"],
        colors: ["Blanco", "Beige"],
        features: [
          "100% seda",
          "Corte elegante",
          "Cuello en V"
        ],
        rating: 4.2,
        reviews: [
          {
            id: 1,
            user: "María G.",
            rating: 5,
            comment: "Muy cómoda y elegante",
            date: "2023-06-10"
          }
        ],
        stock: 8
      },
      // ... otros productos con la misma estructura extendida
    ]
  },
  // ... otras tiendas con la misma estructura extendida

   {
    id: 4,
    name: "Forever 21",
    description: "Las últimas tendencias juveniles.",
    address: "Av. Principal 123, Centro, Uriangato",
    hours: "Lunes a Viernes: 9:00 AM - 8:00 PM | Sábados: 10:00 AM - 7:00 PM",
    logo: "https://via.placeholder.com/150?text=Zara",
    coverImage: "https://via.placeholder.com/350x200?text=Zara+Fashion",
    rating: 4.5,
    category: "Economica",
    productType: ["Mujer"], // Nuevo campo
    products: [
      {
        id: 401,
        name: "Pantalón slim fit negro",
        price: 599,
        category: "pants",
        productType: "Unisex", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Pantalón+Zara",
        images: [
          "https://via.placeholder.com/300?text=Pantalón+Frente",
          "https://via.placeholder.com/300?text=Pantalón+Detalle",
          "https://via.placeholder.com/300?text=Pantalón+Lateral"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul marino"],
        features: [
          "100% algodón",
          "Corte slim fit",
          "Cierre con botón y cremallera"
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad y ajuste perfecto",
            date: "2023-05-15"
          },
          {
            id: 2,
            user: "Ana S.",
            rating: 4,
            comment: "Buen pantalón pero la talla viene un poco grande",
            date: "2023-04-22"
          }
        ],
        stock: 15
      },
      {
        id: 402,
        name: "Vestidos",
        price: 399,
        category: "vestidos",
        productType: "Mujer", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Blusa+Zara",
        images: [
          "https://via.placeholder.com/300?text=Blusa+Frente",
          "https://via.placeholder.com/300?text=Blusa+Detalle"
        ],
        sizes: ["XS", "S", "M"],
        colors: ["Blanco", "Beige"],
        features: [
          "100% seda",
          "Corte elegante",
          "Cuello en V"
        ],
        rating: 4.2,
        reviews: [
          {
            id: 1,
            user: "María G.",
            rating: 5,
            comment: "Muy cómoda y elegante",
            date: "2023-06-10"
          }
        ],
        stock: 8
      },
      // ... otros productos con la misma estructura extendida
    ]
  },
  // ... otras tiendas con la misma estructura extendida

   {
    id: 5,
    name: "Loro Pianna",
    description: "Moda tendencias.",
    address: "Av. Principal 123, Centro, Uriangato",
    hours: "Lunes a Viernes: 9:00 AM - 8:00 PM | Sábados: 10:00 AM - 7:00 PM",
    logo: "https://via.placeholder.com/150?text=Zara",
    coverImage: "https://via.placeholder.com/350x200?text=Zara+Fashion",
    rating: 4.5,
    category: "Tendencias",
    productType: ["Hombre"], // Nuevo campo
    products: [
      {
        id: 501,
        name: "Pantalón slim fit negro",
        price: 599,
        category: "pants",
        productType: "Hombre", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Pantalón+Zara",
        images: [
          "https://via.placeholder.com/300?text=Pantalón+Frente",
          "https://via.placeholder.com/300?text=Pantalón+Detalle",
          "https://via.placeholder.com/300?text=Pantalón+Lateral"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Negro", "Azul marino"],
        features: [
          "100% algodón",
          "Corte slim fit",
          "Cierre con botón y cremallera"
        ],
        rating: 4.5,
        reviews: [
          {
            id: 1,
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad y ajuste perfecto",
            date: "2023-05-15"
          },
          {
            id: 2,
            user: "Ana S.",
            rating: 4,
            comment: "Buen pantalón pero la talla viene un poco grande",
            date: "2023-04-22"
          }
        ],
        stock: 15
      },
      {
        id: 502,
        name: "Chamarra de seda blanca",
        price: 399,
        category: "chamarra",
        productType: "Hombre", // Tipo específico para este producto
        image: "https://via.placeholder.com/300?text=Blusa+Zara",
        images: [
          "https://via.placeholder.com/300?text=Blusa+Frente",
          "https://via.placeholder.com/300?text=Blusa+Detalle"
        ],
        sizes: ["XS", "S", "M"],
        colors: ["Blanco", "Beige"],
        features: [
          "100% seda",
          "Corte elegante",
          "Cuello en V"
        ],
        rating: 4.2,
        reviews: [
          {
            id: 1,
            user: "María G.",
            rating: 5,
            comment: "Muy cómoda y elegante",
            date: "2023-06-10"
          }
        ],
        stock: 8
      },
      // ... otros productos con la misma estructura extendida
    ]
  },
  // ... otras tiendas con la misma estructura extendida
];