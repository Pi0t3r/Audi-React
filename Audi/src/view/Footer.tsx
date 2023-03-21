import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ListItem } from "../components/List";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
  return (
    <div className="bg-black text-white py-4">
      <div className="text-right px-4">
        <button>
          <a href="#">
            Do góry <KeyboardArrowUpIcon />
          </a>
        </button>
      </div>
      <div className="mt-4">
        <ul className="last:border-b-[1px] border-neutral-100/70 ">
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
      </div>
      <div className="mt-10 border-b-[1px] border-neutral-100/70 pb-5 mx-4">
        <ul className="flex flex-row justify-between px-14">
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
          <li>
            <Twitter />
          </li>
        </ul>
      </div>
      <div className="mt-5 pl-4">
        <p>
          <CopyrightIcon /> 2022 Audi Polska.
        </p>
        <ul className="mt-3">
          <li>
            <a href="">Dealerzy i partnerzy</a>
          </li>
          <li>
            <a href="">Centrum Medialne Audi</a>
          </li>
          <li>
            <a href="">Informacje dla warsztatów</a>
          </li>
          <li>
            <a href="">Emisja CO2 oraz Recykling</a>
          </li>
          <li>
            <a href="">Polityka prywatności</a>
          </li>
          <li>
            <a href="">Polityka plików cookies</a>
          </li>
          <li>
            <a href="">Regulamin</a>
          </li>
          <li>
            <a href="">Regulamin newslettera</a>
          </li>
          <li>
            <a href="">Formularz cofnięcia zgód</a>
          </li>
          <li>
            <a href="">Newsletter Audi</a>
          </li>
          <li>
            <a href="">System zgłoszeń naruszeń</a>
          </li>
          <li>
            <a href="">Ustawienia cookies</a>
          </li>
          <li>
            <a href="">Kontakt</a>
          </li>
        </ul>
        <>
          <p>
            Od 1 września 2018 r. wszystkie nowe pojazdy wprowadzane do obrotu w
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
            Państwa życzenie.
          </p>
          <p>
            Zasięg dla samochodów elektrycznych lub zasięg w trybie elektrycznym
            dla hybryd typu Plug-In może się różnić w zależności od wersji i
            wyposażenia oraz zamontowanych akcesoriów. W praktyce rzeczywisty
            zasięg różni się w zależności od stylu jazdy, prędkości, korzystania
            z dodatkowych odbiorników energii, temperatury zewnętrznej, liczby
            pasażerów, obciążenia ładunkiem i topografii terenu.
          </p>
          <p>
            Zasięg dla samochodów elektrycznych lub zasięg w trybie elektrycznym
            dla hybryd typu Plug-In może się różnić w zależności od wersji i
            wyposażenia oraz zamontowanych akcesoriów. W praktyce rzeczywisty
            zasięg różni się w zależności od stylu jazdy, prędkości, korzystania
            z dodatkowych odbiorników energii, temperatury zewnętrznej, liczby
            pasażerów, obciążenia ładunkiem i topografii terenu.
          </p>
          <p>
            Wszelkie prezentowane informacje, w szczególności zdjęcia, wykresy,
            specyfikacje, opisy, rysunki lub parametry techniczne nie stanowią
            oferty w rozumieniu Kodeksu cywilnego oraz nie są wiążące i mogą
            ulec zmianie bez wcześniejszego powiadomienia. Prezentowane
            informacje nie stanowią zapewnienia w rozumieniu art. 556(1)§2
            Kodeksu cywilnego. Z uwagi na ograniczenia parametrów ekranu, na
            którym obraz jest wyświetlany, kolory przedstawione w niniejszym
            materiale mogą nieznacznie różnić się od faktycznych kolorów lakieru
            i materiałów.
          </p>
          <p>
            Podane kwoty są rekomendowane i obejmują podatek VAT (23%), chyba że
            inaczej zaznaczono.
          </p>
          <p>
            Audi zastrzega sobie możliwość wprowadzenia zmian w prezentowanych
            wersjach. Przedstawione detale wyposażenia mogą różnić się od
            specyfikacji przewidzianej na rynek polski. Zamieszczone zdjęcia
            mogą przedstawiać wyposażenie opcjonalne, dostępne za dopłatą.
            Wiążące ustalenie ceny, wyposażenia i specyfikacji pojazdu następują
            w umowie sprzedaży, a określenie parametrów technicznych zawiera
            świadectwo homologacji typu pojazdu. Zastrzegamy sobie prawo do
            zmian i pomyłek. Wszelkie informacje prezentowane na stronie są
            aktualne na dzień ich zamieszczania. W celu uzyskania najnowszych
            informacji prosimy kontaktować się z Autoryzowanym Dealerem Marki
            Audi.
          </p>
          <p>
            Wszystkie produkowane obecnie samochody marki Audi są wykonywane z
            materiałów spełniających pod względem możliwości odzysku i
            recyklingu wymagania określone w normie ISO 22628 i są zgodne z
            europejskimi świadectwami homologacji wydanymi wg dyrektywy
            2005/64/WE. Volkswagen Group Polska sp. z o.o. podlega obowiązkowi
            zapewnienia wszystkim użytkownikom samochodów marki Volkswagen sieci
            odbioru pojazdów po wycofaniu ich z eksploatacji, zgodnie z
            wymaganiami ustawy z 20 stycznia 2005 r. o recyklingu pojazdów
            wycofanych z eksploatacji. Więcej informacji dotyczących ekologii
            znajdą Państwo na stronie{" "}
            <a
              className="font-medium"
              href="https://vw-group.pl/grupa-volkswagen,srodowisko.html."
            >
              https://vw-group.pl/grupa-volkswagen,srodowisko.html.
            </a>
          </p>
        </>
      </div>
    </div>
  );
}

export default Footer;
