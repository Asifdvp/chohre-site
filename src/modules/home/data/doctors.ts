export interface DoctorData {
  id: number;
  name: string;
  specialty: string;
  image: string;
  experience: number;
  patients: number;
  rating: number;
  description: string;
}

export const doctors: DoctorData[] = [
  {
    id: 1,
    name: "Zahid Abbasov",
    specialty: "Ümumi Rekonstruktiv Carrah",
    image: "/images/zahid.jfif",
    experience: 10,
    patients: 200,
    rating: 4.9,
    description:
      "Dr. Zahid Abbasov dünyada nadir rast gəlinən bir həkimdir: həm ənənəvi tibbdə, həm də gələcəyin texnologiyaları ilə müalicədə ustadır. Onun kabineti təkcə bir klinika deyil, eyni zamanda tibbi laboratoriya və virtual reallıq simulyasiya mərkəzidir.",
  },
  {
    id: 2,
    name: "Asif Mustafayev",
    specialty: "Lor Cerrahı",
    image: "/images/asif.jfif",
    experience: 8,
    patients: 180,
    rating: 4.7,
    description:
      "Peşəkar Lor cerrahı, hastəların sağlığını yüksək səviyyədə həll edən uzman həkimdir. Müasir texnologiyalar və keçmiş təcrübə ilə işləyir.",
  },
  {
    id: 3,
    name: "Elmeddin Ceferov",
    specialty: "Uşaq Doktoru",
    image: "/images/test.jpg",
    experience: 12,
    patients: 250,
    rating: 5.0,
    description:
      "Uşaq sağlığı əlanında peşəkar həkim. Böyük təcrübə və xüsusi bacarıq ilə uşaqların sağlığını qoruyur.",
  },
  {
    id: 4,
    name: "Rəhim Əbdullayev",
    specialty: "Kardiyoloji",
    image: "/images/zahid.jfif",
    experience: 15,
    patients: 300,
    rating: 4.8,
    description:
      "Ürək xəstəlikləri sahəsində həkim. Müasir diaqnostika və müalicə üsulları ilə işləyir.",
  },
  {
    id: 5,
    name: "Leyla İsmayılova",
    specialty: "Nevroloq",
    image: "/images/zahid.jfif",
    experience: 10,
    patients: 220,
    rating: 4.9,
    description:
      "Sinir sistemi xəstəliklərinin müalicəsinə ixtisaslaşmış həkim. Hastələrə dəqiq diaqnoz qoyur.",
  },
  {
    id: 6,
    name: "Vəli Məmmədov",
    specialty: "Ortoped",
    image: "/images/zahid.jfif",
    experience: 11,
    patients: 190,
    rating: 4.7,
    description:
      "Sünük və oynaq xəstəliklərində peşəkar həkim. Cerrahı müdaxilə və konsertativ müalicə metodlarından istifadə edir.",
  },
];
