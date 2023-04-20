import React, { ReactNode, useContext } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ListItem } from "../components/List";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ParagraphFooter } from "../components/FooterP";
import { ThemeContext } from "../utilities/style/ThemeContext";
interface iItem {
  title?: string;
  listItems: string[];
}

const Item = ({ title, listItems }: iItem) => {
  return (
    <ul className="text-xl font-bold tracking-widest">
      {title}
      <div className="mt-6 tracking-normal">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="font-light cursor-pointer hover:text-neutral-400 transition-colors"
          >
            {item}
          </li>
        ))}
      </div>
    </ul>
  );
};
const SecondItem = ({ listItems }: iItem) => {
  return (
    <ul className="mt-3 node:leading-9 flex flex-row flex-wrap">
      {listItems.map((item, index) => (
        <li key={index}>
          <a href="" className="hover:text-neutral-400 ease-in duration-300 flex-1 m-5">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

interface iSocialMedia {
  href: string;
  icon: ReactNode;
}

const SocialMedia = ({ href, icon }: iSocialMedia) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="hover:text-neutral-500 ease-in duration-300"
      >
        {icon}
      </a>
    </li>
  );
};

function Footer() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } py-4 ease-in duration-300 border-t-[3px]`}
    >
      <div className="text-right px-4">
        <button>
          <a href="#">
            Do góry <KeyboardArrowUpIcon />
          </a>
        </button>
      </div>
      <div className="mt-4">
        <ul className="first:border-t-[1px] border-neutral-100/70 md:hidden">
          <ListItem
            text="Modele"
            listItems={[
              "Menu",
              "Wszystkie modele",
              "Konfigurator",
              "Oferty Specjalne",
            ]}
          />
          <ListItem
            text="Oferty i porady"
            listItems={[
              "Menu",
              "Oferty Audi",
              "Business Edition",
              "Finansowanie i ubezpieczenia",
              "Samochody gotowe do odbioru",
              "Audi Select:plus",
              "Jazda testowa",
              "Audi dla biznesu",
              "Audi exclusive",
              "Audi Expert online",
              "Dealerzy Audi",
            ]}
          />

          <ListItem
            text="Elektromobilność"
            listItems={[
              "Menu",
              "Elektromobilność",
              "Wszystkie modele elektryczne",
              "Wszystkie hybrydy plug-in",
              "Ładowanie",
              "Zasięg",
              "Ładowanie w drodze",
            ]}
          />
          <ListItem
            text="Świat Audi"
            listItems={[
              "Menu",
              "Future in an attitude",
              "Audi R/RS",
              "Audi Sport",
              "Historia marki",
              "Aktualności",
              "Ochrona środowiska",
              "WLTP",
              "Etykieta opon",
            ]}
          />
          <ListItem
            text="Serwis i akcesoria"
            listItems={[
              "Menu",
              "Akcesoria",
              "Serwis części",
              "Audi connect",
              "Centrum napraw powypadkowych",
              "Gwarancja",
              "Akcja serwisowa EA189",
              "Sklep online",
              "Audi Connect Plug&Play",
            ]}
          />
        </ul>
        <ol className="hidden md:block md:flex md:flex-row md:flex-wrap md:justify-between md:px-8 md:gap-2">
          <Item
            title="Modele"
            listItems={["Wszystkie modele", "Konfigurator", "Oferty specjalne"]}
          />
          <Item
            title="Oferty i porady"
            listItems={[
              "Oferty Audi",
              "Business Edition",
              "Finansowanie i ubezpieczenia",
              "Samochody gotowe do odbioru",
              "Audi Select:plus",
              "Jazda testowa",
              "Audi dla biznesu",
              "Audi exclusive",
              "Audi Expert online",
              "Dealerzy Audi",
            ]}
          />
          <Item
            title="Elektromobilność"
            listItems={[
              "Elektromobilność Audi",
              "Wszystkie modele elektryczne",
              "Wszysktie hybrydy plug-in",
              "Ładowanie",
              "Zasięg",
              "Ładowanie w drodze",
            ]}
          />
          <Item
            title="Świat Audi"
            listItems={[
              "Future is an attitude",
              "Audi R/RS",
              "Audi Sport",
              "Historia marki",
              "Aktualności",
              "Ochrona środowiska",
              "WLTP",
              "Etykieta opon",
            ]}
          />
          <Item
            title="Serwis i akcesoria"
            listItems={[
              "Akcesoria",
              "Serwis i części",
              "Audi connect",
              "Centrum napraw powypadkowych",
              "Gwarancja",
              "Akcja serwisowa EA189",
              "Sklep online",
              "Audi Connect Plug&Play",
            ]}
          />
        </ol>
      </div>
      <div className="mt-10 border-b-[1px] border-neutral-100/70 pb-5 mx-4">
        <ul className="flex flex-row justify-between px-14">
          <SocialMedia
            href="https://www.facebook.com/audiofficial/"
            icon={<FacebookIcon />}
          />
          <SocialMedia
            href="https://www.instagram.com/audi/"
            icon={<InstagramIcon />}
          />
          <SocialMedia
            href="https://www.youtube.com/@Audi"
            icon={<YouTubeIcon />}
          />
          <SocialMedia
            href="https://twitter.com/AudiOfficial"
            icon={<Twitter />}
          />
        </ul>
      </div>
      <div className="mt-5 px-4">
        <p>
          <CopyrightIcon /> 2022 Audi Polska.
        </p>
        <SecondItem
          listItems={[
            "Dealerzy i partnerzy",
            "Centrum Medialne Audi",
            "Informacje dla warsztatów",
            "Emisja CO2 oraz Recykling",
            "Polityka prywatności",
            "Polityka plików cookies",
            "Regulamin",
            "Regulamin newslettera",
            "Formularz cofnięcia zgód",
            "Newsletter Audi",
            "System zgłoszeń naruszeń",
            "Ustawienia cookies",
            "Kontakt",
          ]}
        />
        <>
          <ParagraphFooter
            text=" Od 1 września 2018 r. wszystkie nowe pojazdy wprowadzane do obrotu w
            Unii Europejskiej muszą być badane i homologowane zgodnie z
            procedurą WLTP określoną w rozporządzeniu Komisji (UE) 2017/1151.
            WLTP zapewnia bardziej rygorystyczne warunki badania i bardziej
            realistyczne wartości zużycia paliwa/energii elektrycznej i emisji
            CO2 w porównaniu do stosowanej to tej pory metody NEDC. Prezentowane
            dane dotyczące wartości zużycia paliwa/energii elektrycznej i emisji
            CO2 są danymi zgodnymi ze świadectwem homologacji typu wyznaczonymi
            zgodnie z procedurą WLTP. Więcej informacji na temat WLTP na stronie
            audi.pl/danewltp. Montaż akcesoriów w pojeździe może mieć wpływ na
            poziom zużycia paliwa/energii, emisję CO2 lub zasięg oraz może
            nastąpić najwcześniej po pierwszej rejestracji pojazdu, wyłącznie na
            Państwa życzenie."
          />
          <ParagraphFooter
            text="Zasięg dla samochodów elektrycznych lub zasięg w trybie elektrycznym
            dla hybryd typu Plug-In może się różnić w zależności od wersji i
            wyposażenia oraz zamontowanych akcesoriów. W praktyce rzeczywisty
            zasięg różni się w zależności od stylu jazdy, prędkości, korzystania
            z dodatkowych odbiorników energii, temperatury zewnętrznej, liczby
            pasażerów, obciążenia ładunkiem i topografii terenu."
          />
          <ParagraphFooter
            text="Zasięg dla samochodów elektrycznych lub zasięg w trybie elektrycznym
            dla hybryd typu Plug-In może się różnić w zależności od wersji i
            wyposażenia oraz zamontowanych akcesoriów. W praktyce rzeczywisty
            zasięg różni się w zależności od stylu jazdy, prędkości, korzystania
            z dodatkowych odbiorników energii, temperatury zewnętrznej, liczby
            pasażerów, obciążenia ładunkiem i topografii terenu."
          />
          <ParagraphFooter
            text="Wszelkie prezentowane informacje, w szczególności zdjęcia, wykresy,
            specyfikacje, opisy, rysunki lub parametry techniczne nie stanowią
            oferty w rozumieniu Kodeksu cywilnego oraz nie są wiążące i mogą
            ulec zmianie bez wcześniejszego powiadomienia. Prezentowane
            informacje nie stanowią zapewnienia w rozumieniu art. 556(1)§2
            Kodeksu cywilnego. Z uwagi na ograniczenia parametrów ekranu, na
            którym obraz jest wyświetlany, kolory przedstawione w niniejszym
            materiale mogą nieznacznie różnić się od faktycznych kolorów lakieru
            i materiałów."
          />
          <ParagraphFooter
            text="Podane kwoty są rekomendowane i obejmują podatek VAT (23%), chyba że
            inaczej zaznaczono."
          />
          <ParagraphFooter
            text="Audi zastrzega sobie możliwość wprowadzenia zmian w prezentowanych
            wersjach. Przedstawione detale wyposażenia mogą różnić się od
            specyfikacji przewidzianej na rynek polski. Zamieszczone zdjęcia
            mogą przedstawiać wyposażenie opcjonalne, dostępne za dopłatą.
            Wiążące ustalenie ceny, wyposażenia i specyfikacji pojazdu następują
            w umowie sprzedaży, a określenie parametrów technicznych zawiera
            świadectwo homologacji typu pojazdu. Zastrzegamy sobie prawo do
            zmian i pomyłek. Wszelkie informacje prezentowane na stronie są
            aktualne na dzień ich zamieszczania. W celu uzyskania najnowszych
            informacji prosimy kontaktować się z Autoryzowanym Dealerem Marki
            Audi."
          />
          <ParagraphFooter
            text="Wszystkie produkowane obecnie samochody marki Audi są wykonywane z
            materiałów spełniających pod względem możliwości odzysku i
            recyklingu wymagania określone w normie ISO 22628 i są zgodne z
            europejskimi świadectwami homologacji wydanymi wg dyrektywy
            2005/64/WE. Volkswagen Group Polska sp. z o.o. podlega obowiązkowi
            zapewnienia wszystkim użytkownikom samochodów marki Volkswagen sieci
            odbioru pojazdów po wycofaniu ich z eksploatacji, zgodnie z
            wymaganiami ustawy z 20 stycznia 2005 r. o recyklingu pojazdów
            wycofanych z eksploatacji. Więcej informacji dotyczących ekologii
            znajdą Państwo na stronie"
            link="https://vw-group.pl/grupa-volkswagen,srodowisko.html."
          />
        </>
      </div>
    </div>
  );
}

export default Footer;
