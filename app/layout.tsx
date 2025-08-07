import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

  

export const metadata: Metadata = {
   title: "Nude'n Satin Cattery",
  description: "Canadian sphynx cattery website",
 keywords: [
    'sphynx cat', 'sphynx kitten', 'hairless cat', 'canadian sphynx', 'sphynx cattery', 'sphynx breeder', 'sphynx adoption', 'sphynx kittens for sale', 'elite cattery', 'hypoallergenic cat',
    'sphynx health', 'sphynx care', 'sphynx grooming', 'sphynx diet', 'sphynx personality', 'sphynx temperament', 'sphynx kitten price', 'sphynx cat Canada', 'sphynx kittens Canada', 'sphynx breeder Canada',
    'hairless kitten', 'naked cat', 'sphynx home', 'sphynx cat video', 'cat show sphynx', 'champion sphynx', 'sphynx cat photos', 'hairless cat pictures', 'sphynx kitten delivery', 'sphynx cat vaccination',
    'sphynx cat shipping', 'sphynx cattery Vancouver', 'sphynx cattery British Columbia', 'sphynx kittens Vancouver', 'sphynx kittens BC', 'cfa sphynx breeder', 'tica sphynx breeder', 'sphynx kitten reservation', 'sphynx adoption Canada', 'sphynx cat grooming tips',
    'sphynx cat health guarantee', 'sphynx cat colors', 'sphynx cat patterns', 'hairless cat love', 'exotic sphynx', 'purebred sphynx', 'rare sphynx', 'blue sphynx', 'odd-eyed sphynx', 'family sphynx pet',
    'канадский сфинкс', 'купить сфинкса', 'питомник сфинксов', 'сфинкс котенок', 'голый кот', 'котенок без шерсти', 'элитный питомник', 'сфинкс заводчик', 'сфинкс Канада', 'продажа сфинксов',
    'сфинкс цены', 'уход за сфинксом', 'здоровье сфинкса', 'кормление сфинкса', 'характер сфинкса', 'сфинкс фото', 'сфинкс видео', 'сфинкс доставка', 'прививки сфинкса', 'выставка сфинксов',
    'породистый сфинкс', 'редкий сфинкс', 'голубой сфинкс', 'разноглазый сфинкс', 'канадский сфинкс купить', 'котята сфинкса Ванкувер', 'сфинксы в Канаде', 'сфинкс на заказ', 'лучший питомник сфинксов', 'сертифицированный питомник',
    'канадский сфинкс цена', 'уход за кожей сфинкса', 'гипоаллергенный кот', 'лысый котенок', 'сфинкс здоровье', 'сфинкс характер', 'сфинкс в добрые руки', 'сфинкс окрасы', 'элитные котята', 'канадский сфинкс Ванкувер',
    'заводчик сфинксов Канада', 'фото котят сфинкса', 'любовь к сфинксам', 'отзыв о питомнике', 'рекомендации по содержанию', 'официальные документы CFA', 'TICA сертификат', 'международный питомник сфинксов', 'розовые сфинксы', 'котята шоу-класса'
  ].join(', '),
  icons: { icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
  
}