const defaultScenarios = {
    house: [
        { id: 'h_fridge', name: 'Холодильник / Fridge', power: 0.3, custom: false },
        { id: 'h_pump', name: 'Насосна станція / Water Pump', power: 1.1, custom: false },
        { id: 'h_boiler', name: 'Бойлер / Water Heater', power: 2.0, custom: false },
        { id: 'h_lights', name: 'Освітлення LED / Lighting', power: 0.2, custom: false },
        { id: 'h_router', name: 'Роутер + Термінал / Router', power: 0.05, custom: false },
        { id: 'h_heating', name: 'Циркуляційний насос / Heating Pump', power: 0.15, custom: false },
        { id: 'h_tv', name: 'Телевізор / TV & Gadgets', power: 0.2, custom: false }
    ],
    apartment: [
        { id: 'a_fridge', name: 'Холодильник / Fridge', power: 0.3, custom: false },
        { id: 'a_lights', name: 'Освітлення LED / Lighting', power: 0.15, custom: false },
        { id: 'a_router', name: 'Wi-Fi Роутер / Router', power: 0.03, custom: false },
        { id: 'a_laptop', name: 'Ноутбуки / Laptops', power: 0.15, custom: false },
        { id: 'a_tv', name: 'Телевізор / TV', power: 0.15, custom: false },
        { id: 'a_multicooker', name: 'Мультиварка / Multicooker', power: 0.9, custom: false }
    ],
    business: [
        { id: 'b_lighting', name: 'Аварійне світло / Emergency Lights', power: 0.5, custom: false },
        { id: 'b_computers', name: 'ПК та каси / POS & PCs', power: 1.5, custom: false },
        { id: 'b_refrigeration', name: 'Вітрини / Shop Fridges', power: 2.5, custom: false },
        { id: 'b_router', name: 'Інтернет та охорона / Internet & Security', power: 0.2, custom: false },
        { id: 'b_ac', name: 'Кондиціонер / Air Conditioner', power: 2.0, custom: false },
        { id: 'b_printer', name: 'Оргтехніка / Printer', power: 0.8, custom: false }
    ]
};

// Копія даних, куди додаватимуться власні прилади
let scenariosData = JSON.parse(JSON.stringify(defaultScenarios));
let currentScenario = 'house';
let currentLang = 'uk';

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
        add_custom_title: "Додати свій прилад:",
        placeholder_name: "Назва приладу (напр. Насос)",
        placeholder_power: "Потужність",
        btn_add: "Додати",
        step3: "Результат підбору та рекомендації",
        total_power: "Розрахункова потужність:",
        rec_power: "Рекомендована потужність (з урахуванням пускових струмів +20%):",
        fuel_title: "Рекомендації щодо типу палива:",
        fuel_gasoline: "⛽ Бензиновий генератор",
        fuel_gasoline_desc: "Ідеально для резервного короткочасного вмикання. Доступна ціна.",
        fuel_gas_dual: "🔵 Газ-Бензин (LPG)",
        fuel_gas_desc: "Практичний вибір: економніша робота на зрідженому газі з балона.",
        fuel_diesel: "🛢️ Диззельний генератор",
        fuel_diesel_desc: "Найкраще для тривалої або постійної роботи. Високий ресурс."
    },
    en: {
        title: "Power-generator-Calc UA",
        subtitle: "Online backup power calculator during blackouts when Russian terrorists attacked energy grid.",
        step1: "Step 1: Select usage scenario",
        sc_house: "Private House",
        sc_apartment: "Apartment",
        sc_business: "Business / Shop",
        step2: "Step 2: Parameters & Appliances",
        phases_label: "Number of phases:",
        add_custom_title: "Add custom appliance:",
        placeholder_name: "Appliance name (e.g., Pump)",
        placeholder_power: "Power",
        btn_add: "Add",
        step3: "Selection Results & Recommendations",
        total_power: "Calculated Power:",
        rec_power: "Recommended Power (incl. starting currents +20%):",
        fuel_title: "Fuel Type Recommendations:",
        fuel_gasoline: "⛽ Gasoline Generator",
        fuel_gasoline_desc: "Ideal for short-term backup. Affordable price.",
        fuel_gas_dual: "Dual Fuel (LPG/Gasoline)",
        fuel_gas_desc: "Practical choice: economical operation on bottled gas.",
        fuel_diesel: "🛢️ Diesel Generator",
        fuel_diesel_desc: "Best for long-term or continuous operation. High durability."
    },
    pl: {
        title: "Power-generator-Calc UA",
        subtitle: "Kalkulator zasilania awaryjnego podczas przerw w dostawie prądu.",
        step1: "Krok 1: Wybierz scenariusz",
        sc_house: "Dom prywatny",
        sc_apartment: "Mieszkanie",
        sc_business: "Firma / Sklep",
        step2: "Krok 2: Parametry i urządzenia",
        phases_label: "Liczba faz:",
        add_custom_title: "Dodaj własne urządzenie:",
        placeholder_name: "Nazwa urządzenia",
        placeholder_power: "Moc",
        btn_add: "Dodaj",
        step3: "Wyniki i rekomendacje",
        total_power: "Moc obliczeniowa:",
        rec_power: "Zalecana moc (+20% prądy rozruchowe):",
        fuel_title: "Rekomendacje dotyczące paliwa:",
        fuel_gasoline: "⛽ Generator benzynowy",
        fuel_gasoline_desc: "Idealny do krótkotrwałego zasilania.",
        fuel_gas_dual: "🔵 Gaz-Benzyna (LPG)",
        fuel_gas_desc: "Ekonomiczna praca na gazie z butli.",
        fuel_diesel: "🛢️ Generator diesla",
        fuel_diesel_desc: "Najlepszy do długotrwałej pracy."
    },
    de: {
        title: "Power-generator-Calc UA",
        subtitle: "Online-Notstromrechner bei Stromausfällen.",
        step1: "Schritt 1: Szenario wählen",
        sc_house: "Privathaus",
        sc_apartment: "Wohnung",
        sc_business: "Gewerbe / Geschäft",
        step2: "Schritt 2: Parameter & Geräte",
        phases_label: "Phasenanzahl:",
        add_custom_title: "Eigenes Gerät hinzufügen:",
        placeholder_name: "Gerätename",
        placeholder_power: "Leistung",
        btn_add: "Hinzufügen",
        step3: "Ergebnisse & Empfehlungen",
        total_power: "Berechnete Leistung:",
        rec_power: "Empfohlene Leistung (inkl. Anlaufströme +20%):",
        fuel_title: "Kraftstoff-Empfehlungen:",
        fuel_gasoline: "⛽ Benzingenerator",
        fuel_gasoline_desc: "Ideal für kurzfristige Notstromversorgung.",
        fuel_gas_dual: "🔵 Dual-Fuel (LPG/Benzin)",
        fuel_gas_desc: "Wirtschaftlicher Betrieb mit Flüssiggas.",
        fuel_diesel: "🛢️ Dieselgenerator",
        fuel_diesel_desc: "Bestens geeignet für den Dauerbetrieb."
    },
    fr: {
        title: "Power-generator-Calc UA",
        subtitle: "Calculateur d'alimentation de secours en cas de pannes.",
        step1: "Étape 1 : Choisir le scénario",
        sc_house: "Maison privée",
        sc_apartment: "Appartement",
        sc_business: "Entreprise / Magasin",
        step2: "Étape 2 : Paramètres et appareils",
        phases_label: "Nombre de phases :",
        add_custom_title: "Ajouter votre appareil :",
        placeholder_name: "Nom de l'appareil",
        placeholder_power: "Puissance",
        btn_add: "Ajouter",
        step3: "Résultats et recommandations",
        total_power: "Puissance calculée :",
        rec_power: "Puissance recommandée (+20%) :",
        fuel_title: "Recommandations de carburant :",
        fuel_gasoline: "⛽ Générateur essence",
        fuel_gasoline_desc: "Idéal pour une utilisation de secours.",
        fuel_gas_dual: "🔵 Double carburant (GPL)",
        fuel_gas_desc: "Choix économique utilisant du gaz.",
        fuel_diesel: "🛢️ Générateur diesel",
        fuel_diesel_desc: "Idéal pour un fonctionnement continu."
    },
    es: {
        title: "Power-generator-Calc UA",
        subtitle: "Calculadora de energía de respaldo durante apagones.",
        step1: "Paso 1: Seleccionar escenario",
        sc_house: "Casa privada",
        sc_apartment: "Apartamento",
        sc_business: "Negocio / Tienda",
        step2: "Paso 2: Parámetros y aparatos",
        phases_label: "Número de fases:",
        add_custom_title: "Añadir aparato personalizado:",
        placeholder_name: "Nombre del aparato",
        placeholder_power: "Potencia",
        btn_add: "Añadir",
        step3: "Resultados y recomendaciones",
        total_power: "Potencia calculada:",
        rec_power: "Potencia recomendada (+20%):",
        fuel_title: "Recomendaciones de combustible:",
        fuel_gasoline: "⛽ Generador de gasolina",
        fuel_gasoline_desc: "Ideal para respaldo a corto plazo.",
        fuel_gas_dual: "🔵 Dual Gas-Gasolina",
        fuel_gas_desc: "Opción económica con gas LP.",
        fuel_diesel: "🛢️ Generador diésel",
        fuel_diesel_desc: "Mejor para funcionamiento continuo."
    },
    it: {
        title: "Power-generator-Calc UA",
        subtitle: "Calcolatore di energia di riserva durante i blackout.",
        step1: "Passo 1: Seleziona scenario",
        sc_house: "Casa privata",
        sc_apartment: "Appartamento",
        sc_business: "Attività / Negozio",
        step2: "Passo 2: Parametri e apparecchi",
        phases_label: "Numero di fasi:",
        add_custom_title: "Aggiungi dispositivo personalizzato:",
        placeholder_name: "Nome dispositivo",
        placeholder_power: "Potenza",
        btn_add: "Aggiungi",
        step3: "Risultati e raccomandazioni",
        total_power: "Potenza calcolata:",
        rec_power: "Potenza consigliata (+20%):",
        fuel_title: "Consigli sul carburante:",
        fuel_gasoline: "⛽ Generatore a benzina",
        fuel_gasoline_desc: "Ideale per backup a breve termine.",
        fuel_gas_dual: "🔵 Dual-Fuel (GPL)",
        fuel_gas_desc: "Scelta pratica ed economica.",
        fuel_diesel: "🛢️ Generatore diesel",
        fuel_diesel_desc: "Ottimale per uso prolungato."
    },
    cs: {
        title: "Power-generator-Calc UA",
        subtitle: "Online kalkulačka záložního napájení.",
        step1: "Krok 1: Vyberte scénář",
        sc_house: "Rodinný dům",
        sc_apartment: "Byt",
        sc_business: "Firma / Obchod",
        step2: "Krok 2: Parametry a spotřebiče",
        phases_label: "Počet fází:",
        add_custom_title: "Přidat vlastní spotřebič:",
        placeholder_name: "Název spotřebiče",
        placeholder_power: "Příkon",
        btn_add: "Přidat",
        step3: "Výsledky a doporučení",
        total_power: "Celkový příkon:",
        rec_power: "Doporučený výkon (+20%):",
        fuel_title: "Doporučení typu paliva:",
        fuel_gasoline: "⛽ Benzínový generátor",
        fuel_gasoline_desc: "Ideální pro krátkodobé zálohování.",
        fuel_gas_dual: "🔵 Plyn-Benzín (LPG)",
        fuel_gas_desc: "Ekonomická volba.",
        fuel_diesel: "🛢️ Dieselový generátor",
        fuel_diesel_desc: "Vhodný pro nepřetržitý provoz."
    },
    sk: {
        title: "Power-generator-Calc UA",
        subtitle: "Online kalkulačka záložného napájania.",
        step1: "Krok 1: Vyberte scenár",
        sc_house: "Rodinný dom",
        sc_apartment: "Byt",
        sc_business: "Podnik / Obchod",
        step2: "Krok 2: Parametre a spotrebiče",
        phases_label: "Počet fáz:",
        add_custom_title: "Pridať vlastný spotrebič:",
        placeholder_name: "Názov spotrebiča",
        placeholder_power: "Príkon",
        btn_add: "Pridať",
        step3: "Výsledky a odporúčania",
        total_power: "Celkový príkon:",
        rec_power: "Odporúčaný výkon (+20%):",
        fuel_title: "Odporúčanie typu paliva:",
        fuel_gasoline: "⛽ Benzínový generátor",
        fuel_gasoline_desc: "Ideálne na krátkodobé zálohovanie.",
        fuel_gas_dual: "🔵 Plyn-Benzín (LPG)",
        fuel_gas_desc: "Ekonomická voľba.",
        fuel_diesel: "🛢️ Dieselový generátor",
        fuel_diesel_desc: "Najlepšie pre nepretržitú prevádzku."
    },
    ro: {
        title: "Power-generator-Calc UA",
        subtitle: "Calculator online pentru alimentare de rezervă.",
        step1: "Pasul 1: Selectați scenariul",
        sc_house: "Casă privată",
        sc_apartment: "Apartament",
        sc_business: "Afacere / Magazin",
        step2: "Pasul 2: Parametri și aparate",
        phases_label: "Număr de faze:",
        add_custom_title: "Adăugați propriul aparat:",
        placeholder_name: "Nume aparat",
        placeholder_power: "Putere",
        btn_add: "Adăugați",
        step3: "Rezultate și recomandări",
        total_power: "Putere calculată:",
        rec_power: "Putere recomandată (+20%):",
        fuel_title: "Recomandări tip combustibil:",
        fuel_gasoline: "⛽ Generator pe benzină",
        fuel_gasoline_desc: "Ideal pentru rezervă pe termen scurt.",
        fuel_gas_dual: "🔵 Gaz-Benzină (GPL)",
        fuel_gas_desc: "Alegere economică.",
        fuel_diesel: "🛢️ Generator diesel",
        fuel_diesel_desc: "Cel mai bun pentru funcționare continuă."
    }
};

function setScenario(scenario) {
    currentScenario = scenario;
    document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.scenario === scenario);
    });
    renderAppliances();
    calculatePower();
}

function renderAppliances() {
    const container = document.getElementById('appliancesList');
    container.innerHTML = scenariosData[currentScenario].map((item, index) => `
        <div class="appliance-item">
            <label>
                <input type="checkbox" value="${item.power}" onchange="calculatePower()" checked>
                <span>${item.name} <b>(${item.power >= 1 ? item.power + ' кВт' : Math.round(item.power * 1000) + ' Вт'})</b></span>
            </label>
            ${item.custom ? `<button type="button" class="btn-delete" onclick="removeCustomAppliance(${index})" title="Видалити">✕</button>` : ''}
        </div>
    `).join('');
}

function addCustomAppliance() {
    const nameInput = document.getElementById('customName');
    const powerInput = document.getElementById('customPower');
    const unitSelect = document.getElementById('powerUnit');

    let name = nameInput.value.trim();
    let val = parseFloat(powerInput.value);

    if (!name || isNaN(val) || val <= 0) {
        alert("Будь ласка, введіть назву та коректну потужність приладу!");
        return;
    }

    // Переводимо у кВт, якщо введено у Вт
    let powerInKW = unitSelect.value === 'W' ? val / 1000 : val;

    scenariosData[currentScenario].push({
        id: 'custom_' + Date.now(),
        name: name,
        power: parseFloat(powerInKW.toFixed(3)),
        custom: true
    });

    // Очищуємо поля вводу
    nameInput.value = '';
    powerInput.value = '';

    renderAppliances();
    calculatePower();
}

function removeCustomAppliance(index) {
    scenariosData[currentScenario].splice(index, 1);
    renderAppliances();
    calculatePower();
}

function calculatePower() {
    let total = 0;
    document.querySelectorAll('#appliancesList input[type="checkbox"]:checked').forEach(cb => {
        total += parseFloat(cb.value);
    });

    let recommended = total * 1.2;

    document.getElementById('totalPowerVal').innerText = total.toFixed(2) + ' кВт';
    document.getElementById('recPowerVal').innerText = recommended.toFixed(2) + ' кВт';
}

function renderFuelRecommendations() {
    const t = translations[currentLang];
    document.getElementById('fuelRecommendations').innerHTML = `
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
        if (t[key]) el.innerText = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    renderFuelRecommendations();
}

document.getElementById('languageSelect').addEventListener('change', changeLanguage);

window.onload = function() {
    renderAppliances();
    calculatePower();
    renderFuelRecommendations();
};
