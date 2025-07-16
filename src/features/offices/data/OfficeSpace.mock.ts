import { OfficeSpace } from "../types/OfficeSpace.types";
export const OfficeSpace: OfficeSpace[] = [
  {
    id: 1,
    title: "Saleum Office",
    slug: "saleum-office",
    price: 1500000,
    duration: "5 Hari",
    address: "Jl. T. Hamzah Bendahara No.41, Lhokseumawe, Aceh 24351",
    about: "A luxury office with modern amenities.",
    location: "Aceh",
    rating: 4.2,
    tags: ["Popular"],
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
      ],
    features: ["Wi-Fi", "Air Conditioning", "Parking","Extra Snacks","Coffee","Compact"],
    salesContact: [
      {
        name: "John Doe",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Aswadi",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    isFullyBooked: false,
  },

  {
    id: 2,
    title: "Horas Office",
    slug: "horas-office",
    price: 1800000,
    duration: "7 Hari",
    address: "Jl. Sisingamaraja IX, Sagulung, Medan 24351",
    about: "Best price office you want !.",
    location: "Medan",
    rating: 4.7,
    tags: ["Cheaper"],
    image: "/assets/images/thumbnails/thumbnails-2.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
      ],
    features: ["Wi-Fi", "Air Conditioning", "Parking","Extra Snacks","Coffee","Compact"],
    salesContact: [
      {
        name: "Dinda Rahmadana",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Faozi",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    isFullyBooked: false,
  },

  {
    id: 3,
    title: "Ambo Office",
    slug: "ambo-office",
    price: 1300000,
    duration: "5 Hari",
    address: "Jl. Ahmad Yani, Kota Padang. SUMBAR 24351",
    about: "Simple office with basic amenities.",
    location: "Padang",
    rating: 4.6,
    tags: ["Expensive"],
    image: "/assets/images/thumbnails/thumbnails-3.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
      ],
    features: ["Wi-Fi", "Air Conditioning", "Parking","Extra Snacks","Coffee","Compact"],
    salesContact: [
      {
        name: "Dinda Rahmadana",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Faozi",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    isFullyBooked: false,
  },
];