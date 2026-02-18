// import seo from "@/lib/seo";
import Container from "@/components/shared/Container";
import Image from "next/image";

// export const metadata: Metadata = seo({
//   title: "Media | Layihə Hovuzu",
// });

const About = () => {
  return (
    <Container>
      <div className="pb-8 md:pb-12">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="col-span-1 relative aspect-4/3 md:aspect-auto md:h-full">
            <Image
              src="/images/about.webp"
              alt="about"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="md:col-span-2 rounded-lg px-4 border border-primary/12 p-3 md:px-5 text-text font-sm font-normal leading-5">
            <div>
              <h3 className="font-semibold font-base leading-6 mb-1 text-black/80">
                Fəaliyyətimiz
              </h3>
              <p className="mb-3">
                Çöhrə Estetik Klinika, müasir tibbi texnologiyalarla estetik və
                dermatoloji xidmətlər göstərən peşəkar bir sağlamlıq və gözəllik
                mərkəzidir. Klinikada həm tibbi, həm də qeyri-cərrahi estetik
                prosedurlar yüksək ixtisaslı mütəxəssislər tərəfindən həyata
                keçirilir. Pasiyent məmnuniyyəti, təhlükəsizlik və fərdi yanaşma
                klinikanın əsas prioritetləri arasında yer alır.
              </p>
              <p>
                Çöhrə Estetik Klinika özünü yalnız xidmət göstərən bir müəssisə
                kimi deyil, həm də pasiyentlərin özünəinamını artırmağı
                hədəfləyən bir “gözəllik və sağlamlıq məkanı” kimi təqdim edir.
                Burada hər pasiyent üçün dəri növü, yaş, ümumi sağlamlıq və
                estetik məqsədlər nəzərə alınaraq fərdi müalicə planı
                hazırlanır.
              </p>
            </div>
            <div className="mt-3">
              <h3 className="font-semibold font-base leading-6 mb-1 text-black/80">
                Üstünlüklər
              </h3>
              <ul>
                <li>• Peşəkar və təcrübəli mütəxəssislər</li>
                <li>• Steril və komfortlu şərait</li>
                <li>• Son model tibbi-avadanlıqları</li>
                <li>• Fərdi yanaşma və təhlükəsiz müalicə protokolları</li>
                <li>• Yüksək pasiyent məmnuniyyəti</li>
              </ul>
            </div>
            <div className="mt-3">
              <h3 className="font-semibold font-base leading-6 mb-1 text-black/80">
                Klinikanın əsas xidmətləri
              </h3>
              <ul>
                <li>• Üz və bədən estetikası</li>
                <li>• Dəri problemlərinin müalicəsi </li>
                <li>• İnyeksiyon prosedurlar </li>
                <li>• Aparat kosmetologiyası</li>
              </ul>
            </div>
            <div className="mt-3">
              <p>
                Çöhrə Estetik Klinika, gözəlliyinə və sağlamlığına dəyər verən
                hər kəsi daha parlaq, təravətli və təbii görünüşə qovuşmaq üçün
                dəvət edir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
