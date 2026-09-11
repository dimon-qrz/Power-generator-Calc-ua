// Дані про прилади для різних сценаріїв (потужність у кВт)
const scenariosData = {
    house: [
        { id: 'h_fridge', name: 'Холодильник / Freezer', power: 0.3 },
        { id: 'h_pump', name: 'Насосна станція / Water Pump', power: 1.1 },
        { id: 'h_boiler', name: 'Бойлер / Water Heater', power: 2.0 },
        { id: 'h_lights', name: 'Освітлення LED / Lighting', power: 0.2 },
        { id: 'h_router', name: 'Роутер + Термінал / Router', power: 0.05 },
        { id: 'h_heating', name: 'Циркуляційний насос котельного опалення / Heating Pump', power: 0.15 },
        { id: 'h_tv', name: 'Телевізор / TV & Gadgets', power: 0.2 }
    ],
    apartment: [
        { id: 'a_fridge', name: 'Холодильник / Fridge', power: 0.3 },
        { id: 'a_lights', name: 'Освітлення LED / Lighting', power: 0.15 },
        { id: 'a_router', name: 'Wi-Fi Роутер / Router', power: 0.03 },
        { id: 'a_laptop', name: 'Ноутбуки та гаджети / Laptops', power: 0.15 },
        { id: 'a_tv', name: 'Телевізор / TV', power: 0.15 },
        { id: 'a_multicooker', name: 'Мультиварка / Multicooker', power: 0.9 }
    ],
    business: [
        { id: 'b_lighting', name: 'Аварійне освітлення / Emergency Lights', power: 0.5 },
        { id: 'b_computers', name: 'ПК та касові апарати / POS & PCs', power: 1.5 },
        { id: 'b_refrigeration', name: 'Вітрини-холодильники / Shop Fridges', power: 2.5 },
        { id: 'b_router', name: 'Інтернет та охорона / Internet & Security', power: 0.2 },
        { id: 'b_ac', name: 'Кондиціонер / Air Conditioner', power: 2.0 },
        { id: 'b_printer', name: 'Оргтехніка / Printer & Scanner', power: 0.8 }
    ]
};

// Словник для 10 мов інтерфейсу
const translations = {
    uk: {
        title: "Power-generator-Calc UA",
        subtitle: "Онлайн-калькулятор автономного живлення під час блек-аутів будинку коли російські терористи атакували енергетику країни.",
        step1: "Крок 1: Виберіть сценарій використання",
        sc_house: "Приватний будинок",
        sc_apartment: "Квартира",
        sc_business: "Підприємство / Магазин",
        step2: "Крок 2: Параметри та побутові прилади",
        phases_label: "Кількість фаз мережі:",
        step3: "Результат підбору та рекомендації",
        total_power: "Розрахункова потужність:",
        rec_power: "Рекомендована потужність (з урахуванням пускових струмів +20%):",
        fuel_title: "Рекомендації щодо типу палива:",
        fuel_gasoline: "⛽ Бензиновий генератор",
        fuel_gasoline_desc: "Ідеально для резервного короткочасного вмикання. Доступна ціна, але висока витрата палива.",
        fuel_gas_dual: "🔵 Газ-Бензин (LPG/Gasoline)",
        fuel_gas_desc: "Практичний вибір: економніша робота на зрідженому газі з балона або магістральному газі.",
        fuel_diesel: "🛢️ Диззельний генератор",
        fuel_diesel_desc: "Найкраще для тривалої або постійної роботи (магазини, приватні будинки). Високий ресурс та економічність."
    },
    en: {
        title: "Power-generator-Calc UA",
        subtitle: "Online backup power calculator during blackouts when Russian terrorists attacked the country's energy grid.",
        step1: "Step 1: Select usage scenario",
        sc_house: "Private House",
        sc_apartment: "Apartment",
        sc_business: "Business / Shop",
        step2: "Step 2: Parameters & Appliances",
        phases_label: "Number of phases:",
        step3: "Selection Results & Recommendations",
        total_power: "Calculated Power:",
        rec_power: "Recommended Power (incl. starting currents +20%):",
        fuel_title: "Fuel Type Recommendations:",
        fuel_gasoline: "⛽ Gasoline Generator",
        fuel_gasoline_desc: "Ideal for short-term backup use. Affordable price, but higher fuel consumption.",
        fuel_gas_dual: "🔵 Dual Fuel (LPG/Gasoline)",
        fuel_gas_desc: "Practical choice: more economical operation on bottled or main gas.",
        fuel_diesel: "🛢️ Diesel Generator",
        fuel_diesel_desc: "Best for long-term or continuous operation (shops, private houses). High durability and efficiency."
    },
    pl: {
        title: "Power-generator-Calc UA",
        subtitle: "Kalkulator zasilania awaryjnego podczas przerw w dostawie prądu, gdy rosyjscy terroryści zaatakowali energetykę kraju.",
        step1: "Krok 1: Wybierz scenariusz",
        sc_house: "Dom prywatny",
        sc_apartment: "Mieszkanie",
        sc_business: "Firma / Sklep",
        step2: "Krok 2: Parametry i urządzenia",
        phases_label: "Liczba faz:",
        step3: "Wyniki i rekomendacje",
        total_power: "Moc obliczeniowa:",
        rec_power: "Zalecana moc (w tym prądy rozruchowe +20%):",
        fuel_title: "Rekomendacje dotyczące paliwa:",
        fuel_gasoline: "⛽ Generator benzynowy",
        fuel_gasoline_desc: "Idealny do krótkotrwałego zasilania awaryjnego. Przystępna cena, ale wyższe zużycie paliwa.",
        fuel_gas_dual: "🔵 Gaz-Benzyna (LPG)",
        fuel_gas_desc: "Praktyczny wybór: bardziej ekonomiczna praca na gazie z butli.",
        fuel_diesel: "🛢️ Generator diesla",
        fuel_diesel_desc: "Najlepszy do długotrwałej pracy (sklepy, domy). Wysoka trwałość i wydajność."
    },
    de: {
        title: "Power-generator-Calc UA",
        subtitle: "Online-Notstromrechner bei Stromausfällen, während russische Terroristen die Energieinfrastruktur angriffen.",
        step1: "Schritt 1: Szenario wählen",
        sc_house: "Privathaus",
        sc_apartment: "Wohnung",
        sc_business: "Gewerbe / Geschäft",
        step2: "Schritt 2: Parameter & Geräte",
        phases_label: "Phasenanzahl:",
        step3: "Ergebnisse & Empfehlungen",
        total_power: "Berechnete Leistung:",
        rec_power: "Empfohlene Leistung (inkl. Anlaufströme +20%):",
        fuel_title: "Kraftstoff-Empfehlungen:",
        fuel_gasoline: "⛽ Benzingenerator",
        fuel_gasoline_desc: "Ideal für kurzfristige Notstromversorgung. Günstiger Preis, höherer Verbrauch.",
        fuel_gas_dual: "🔵 Dual-Fuel (LPG/Benzin)",
        fuel_gas_desc: "Praktische Wahl: Wirtschaftlicher Betrieb mit Flüssiggas.",
        fuel_diesel: "🛢️ Dieselgenerator",
        fuel_diesel_desc: "Bestens geeignet für den Dauerbetrieb. Hohe Lebensdauer und Effizienz."
    },
    fr: {
        title: "Power-generator-Calc UA",
        subtitle: "Calculateur d'alimentation de secours en cas de pannes de courant suite aux attaques terroristes russes.",
        step1: "Étape 1 : Choisir le scénario",
        sc_house: "Maison privée",
        sc_apartment: "Appartement",
        sc_business: "Entreprise / Magasin",
        step2: "Étape 2 : Paramètres et appareils",
        phases_label: "Nombre de phases :",
        step3: "Résultats et recommandations",
        total_power: "Puissance calculée :",
        rec_power: "Puissance recommandée (+20% courants de démarrage) :",
        fuel_title: "Recommandations de carburant :",
        fuel_gasoline: "⛽ Générateur essence",
        fuel_gasoline_desc: "Idéal pour une utilisation de secours à court terme.",
        fuel_gas_dual: "🔵 Double carburant (GPL/Essence)",
        fuel_gas_desc: "Choix économique utilisant du gaz en bouteille.",
        fuel_diesel: "🛢️ Générateur diesel",
        fuel_diesel_desc: "Idéal pour un fonctionnement continu de longue durée."
    },
    es: {
        title: "Power-generator-Calc UA",
        subtitle: "Calculadora de energía de respaldo durante apagones por los ataques terroristas rusos.",
        step1: "Paso 1: Seleccionar escenario",
        sc_house: "Casa privada",
        sc_apartment: "Apartamento",
        sc_business: "Negocio / Tienda",
        step2: "Paso 2: Parámetros y aparatos",
        phases_label: "Número de fases:",
        step3: "Resultados y recomendaciones",
        total_power: "Potencia calculada:",
        rec_power: "Potencia recomendada (incl. corrientes de arranque +20%):",
        fuel_title: "Recomendaciones de combustible:",
        fuel_gasoline: "⛽ Generador de gasolina",
        fuel_gasoline_desc: "Ideal para respaldo a corto plazo.",
        fuel_gas_dual: "🔵 Dual Gas-Gasolina (LPG)",
        fuel_gas_desc: "Opción práctica y más económica con gas LP.",
        fuel_diesel: "🛢️ Generador diésel",
        fuel_diesel_desc: "Mejor para funcionamiento continuo a largo plazo."
    },
    it: {
        title: "Power-generator-Calc UA",
        subtitle: "Calcolatore di energia di riserva durante i blackout causati dagli attacchi terroristici russi.",
        step1: "Passo 1: Seleziona scenario",
        sc_house: "Casa privata",
        sc_apartment: "Appartamento",
        sc_business: "Attività / Negozio",
        step2: "Passo 2: Parametri e apparecchi",
        phases_label: "Numero di fasi:",
        step3: "Risultati e raccomandazioni",
        total_power: "Potenza calcolata:",
        rec_power: "Potenza consigliata (correnti di spunto +20%):",
        fuel_title: "Consigli sul carburante:",
        fuel_gasoline: "⛽ Generatore a benzina",
        fuel_gasoline_desc: "Ideale per backup a breve termine.",
        fuel_gas_dual: "🔵 Dual-Fuel (GPL/Benzina)",
        fuel_gas_desc: "Scelta pratica ed economica con gas in bombola.",
        fuel_diesel: "🛢️ Generatore diesel",
        fuel_diesel_desc: "Ottimale per uso prolungato e continuo."
    },
    cs: {
        title: "Power-generator-Calc UA",
        subtitle: "Online kalkulačka záložního napájení během blackoutů po útocích ruských teroristů na energetiku.",
        step1: "Krok 1: Vyberte scénář",
        sc_house: "Rodinný dům",
        sc_apartment: "Byt",
        sc_business: "Firma / Obchod",
        step2: "Krok 2: Parametry a spotřebiče",
        phases_label: "Počet fází:",
        step3: "Výsledky a doporučení",
        total_power: "Celkový příkon:",
        rec_power: "Doporučený výkon (včetně startovacích proudů +20%):",
        fuel_title: "Doporučení typu paliva:",
        fuel_gasoline: "⛽ Benzínový generátor",
        fuel_gasoline_desc: "Ideální pro krátkodobé zálohování.",
        fuel_gas_dual: "🔵 Plyn-Benzín (LPG)",
        fuel_gas_desc: "Ekonomická volba na propan-butan.",
        fuel_diesel: "🛢️ Dieselový generátor",
        fuel_diesel_desc: "Vhodný pro dlouhodobý a nepřetržitý provoz."
    },
    sk: {
        title: "Power-generator-Calc UA",
        subtitle: "Online kalkulačka záložného napájania počas blackoutov po útokoch ruských teroristov na energetiku.",
        step1: "Krok 1: Vyberte scenár",
        sc_house: "Rodinný dom",
        sc_apartment: "Byt",
        sc_business: "Podnik / Obchod",
        step2: "Krok 2: Parametre a spotrebiče",
        phases_label: "Počet fáz:",
        step3: "Výsledky a odporúčania",
        total_power: "Celkový príkon:",
        rec_power: "Odporúčaný výkon (vrátane štartovacích prúdov +20%):",
        fuel_title: "Odporúčanie typu paliva:",
        fuel_gasoline: "⛽ Benzínový generátor",
        fuel_gasoline_desc: "Ideálne na krátkodobé zálohovanie.",
        fuel_gas_dual: "🔵 Plyn-Benzín (LPG)",
        fuel_gas_desc: "Ekonomická voľba na fľaškový plyn.",
        fuel_diesel: "🛢️ Dieselový generátor",
        fuel_diesel_desc: "Najlepšie pre dlhodobú a nepretržitú prevádzku."
    },
    ro: {
        title: "Power-generator-Calc UA",
        subtitle: "Calculator online pentru alimentare de rezervă în timpul peniilor de curent cauzate de atacurile teroriste ruse.",
        step1: "Pasul 1: Selectați scenariul",
        sc_house: "Casă privată",
        sc_apartment: "Apartament",
        sc_business: "Afacere / Magazin",
        step2: "Pasul 2: Parametri și aparate",
        phases_label: "Număr de faze:",
        step3: "Rezultate și recomandări",
        total_power: "Putere calculată:",
        rec_power: "Putere recomandată (inclusiv curenți de pornire +20%):",
        fuel_title: "Recomandări tip combustibil:",
        fuel_gasoline: "⛽ Generator pe benzină",
        fuel_gasoline_desc: "Ideal pentru rezervă pe termen scurt.",
        fuel_gas_dual: "🔵 Gaz-Benzină (GPL)",
        fuel_gas_desc: "Alegere practică și economică folosind gaz lichefiat.",
        fuel_diesel: "🛢️ Generator diesel",
        fuel_diesel_desc: "Cel mai bun pentru funcționare continuă pe termen lung."
    }
};

let currentScenario = 'house';
let currentLang = 'uk';

function setScenario(scenario) {
    currentScenario = scenario;
    document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.scenario === scenario) {
            btn.classList.add('active');
        }
    });
    renderAppliances();
    calculatePower();
}

function renderAppliances() {
    const container = document.getElementById('appliancesList');
    container.innerHTML = '';
    
    scenariosData[currentScenario].forEach(item => {
        const div = document.createElement('div');
        div.className = 'appliance-item';
        div.innerHTML = `
            <label>
                <input type="checkbox" value="${item.power}" onchange="calculatePower()" checked>
                <span>${item.name} <b>(${item.power * 1000} W)</b></span>
            </label>
        `;
        container.appendChild(div);
    });
}

function calculatePower() {
    const checkboxes = document.querySelectorAll('#appliancesList input[type="checkbox"]:checked');
    let total = 0;
    checkboxes.forEach(cb => {
        total += parseFloat(cb.value);
    });

    // Рекомендована потужність з урахуванням пускових струмів (+20%)
    let recommended = total * 1.2;

    document.getElementById('totalPowerVal').innerText = total.toFixed(2) + ' кВт';
    document.getElementById('recPowerVal').innerText = recommended.toFixed(2) + ' кВт';

    renderFuelRecommendations(recommended);
}

function renderFuelRecommendations(power) {
    const container = document.getElementById('fuelRecommendations');
    const t = translations[currentLang];
    
    container.innerHTML = `
        <div class="fuel-card">
            <h4>${t.fuel_gasoline}</h4>
            <p>${t.fuel_gasoline_desc}</p>
        </div>
        <div class="fuel-card">
            <h4>${t.fuel_gas_dual}</h4>
            <p>${t.fuel_gas_desc}</p>
        </div>
        <div class="fuel-card">
            <h4>${t.fuel_diesel}</h4>
            <p>${t.fuel_diesel_desc}</p>
        </div>
    `;
}

function changeLanguage() {
    currentLang = document.getElementById('languageSelect').value;
    const t = translations[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerText = t[key];
        }
    });

    renderAppliances();
    calculatePower();
}

document.getElementById('languageSelect').addEventListener('change', changeLanguage);

// Ініціалізація при завантаженні
window.onload = function() {
    renderAppliances();
    calculatePower();
};