import { City } from "../types/city.types";
import { OfficeSpace } from "@/features/offices/data/OfficeSpace.mock";

const cityNames = 
 [
  "Aceh",
  "Sumatera Utara",
  "Sumatera Barat",
  "Riau",
  "Kepulauan Riau",
  "Jambi",
  "Sumatera Selatan",
  "Bangka Belitung",
  "Bengkulu",
  "Lampung",
  "Banten",
  "DKI Jakarta",
  "Jawa Barat",
  "Jawa Tengah",
  "DI Yogyakarta",
  "Jawa Timur",
  "Bali",
  "Nusa Tenggara Barat",
  "Nusa Tenggara Timur",
  "Kalimantan Barat",
  "Kalimantan Tengah",
  "Kalimantan Selatan",
  "Kalimantan Timur",
  "Kalimantan Utara",
  "Sulawesi Utara",
  "Sulawesi Tengah",
  "Sulawesi Selatan",
  "Sulawesi Tenggara",
  "Gorontalo",
  "Sulawesi Barat",
  "Maluku",
  "Maluku Utara",
  "Papua",
  "Papua Barat",
  "Papua Selatan",
  "Papua Tengah",
  "Papua Pegunungan",
  "Papua Barat Daya"
];

export const cities:City[] = cityNames.map((name, i) => {
  const officeCount = OfficeSpace.filter((space) => space.location === name).length;
  
//random angka antara 1 sampai 10 dari chat GPT
// const getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// end random angka antara 1 sampai 10

  return {
    id: i + 1,
    name,
    // officeCount: 1,
    officeCount: officeCount,
    // image: `/assets/images/thumbnails/thumbnails-${(i % 3)+1}.png`,
    image: `/assets/images/thumbnails/thumbnails-${i + 1}.png`,
    slug: name.toLowerCase().replace(/\s+/g,"-"), //Jakarta Pusat -> jakarta-pusat
    };
});
  

