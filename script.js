const destinazioniGennaio = [
    {
        nome: "Parigi",
        descrizione: "La capitale della Francia, famosa per la Torre Eiffel e il Louvre.",
        link: "https://www.parisinfo.com/",
        dettagli: `
            <strong>Cosa fare:</strong> Passeggia lungo la Senna, visita Montmartre e la Basilica del Sacro Cuore. Non dimenticare di fare un giro sulla Torre Eiffel.<br>
            <strong>Cosa vedere:</strong> Il Museo del Louvre, il Musée d'Orsay, il Quartiere Latino.<br>
            <strong>Perché è consigliato in gennaio:</strong> In gennaio, Parigi è meno affollata, il che significa che puoi goderti i musei e i monumenti senza lunghe code. Il clima è freddo ma sopportabile, perfetto per scoprire la città con calma.
        `
    },
    {
        nome: "Roma",
        descrizione: "La Città Eterna, ricca di storia e cultura.",
        link: "https://www.turismoroma.it/",
        dettagli: `
            <strong>Cosa fare:</strong> Visita il Colosseo, il Foro Romano, il Pantheon e la Fontana di Trevi.<br>
            <strong>Cosa vedere:</strong> Piazza di Spagna, i Musei Vaticani, Villa Borghese.<br>
            <strong>Perché è consigliato in gennaio:</strong> Gennaio è il periodo ideale per visitare Roma, poiché il clima è fresco e meno affollato. Puoi visitare i principali siti turistici senza la ressa estiva.
        `
    },
    {
        nome: "New York",
        descrizione: "La città che non dorme mai, famosa per i suoi grattacieli e le attrazioni iconiche.",
        link: "https://www.nycgo.com/",
        dettagli: `
            <strong>Cosa fare:</strong> Visita Times Square, Central Park, il Metropolitan Museum of Art e il Ponte di Brooklyn.<br>
            <strong>Cosa vedere:</strong> La Statua della Libertà, l'Empire State Building, il 9/11 Memorial.<br>
            <strong>Perché è consigliato in gennaio:</strong> Gennaio a New York è molto freddo, ma la città è magica durante le festività natalizie. Se ami l'atmosfera invernale, potrai godere di una vista spettacolare su Central Park coperto di neve.
        `
    },
    {
        nome: "Londra",
        descrizione: "La capitale del Regno Unito, famosa per la storia, la cultura e i suoi monumenti iconici.",
        link: "https://www.visitlondon.com/",
        dettagli: `
            <strong>Cosa fare:</strong> Visita il British Museum, Buckingham Palace, e fai una passeggiata nel parco di Hyde Park.<br>
            <strong>Cosa vedere:</strong> Il Big Ben, la London Eye, la Torre di Londra.<br>
            <strong>Perché è consigliato in gennaio:</strong> Gennaio è il mese perfetto per esplorare Londra se non ti dispiace il clima freddo. Ci sono meno turisti, il che ti permetterà di visitare i musei e i monumenti senza la folla.
        `
    },
    // Puoi aggiungere altre destinazioni in modo simile
];

const caricaDestinazioni = (mese, destinazioni) => {
    const sezione = document.getElementById(mese);
    const destinazioniContainer = sezione.querySelector(".destinazioni");
    destinazioniContainer.innerHTML = ''; // Pulisce il contenuto esistente

    destinazioni.forEach(destinazione => {
        const destinazioneDiv = document.createElement("div");
        destinazioneDiv.classList.add("destinazione");

        destinazioneDiv.innerHTML = `
            <h3>${destinazione.nome}</h3>
            <p>${destinazione.descrizione}</p>
            <a href="${destinazione.link}" target="_blank">Prenota il tuo viaggio</a>
            <button class="maggiori-info-btn">Maggiori informazioni</button>
            <div class="dettagli" style="display: none;">
                ${destinazione.dettagli}
            </div>
        `;
        
        // Aggiungi l'evento al bottone
        const infoBtn = destinazioneDiv.querySelector(".maggiori-info-btn");
        const dettagliDiv = destinazioneDiv.querySelector(".dettagli");

        infoBtn.addEventListener("click", () => {
            // Mostra o nascondi le informazioni aggiuntive
            if (dettagliDiv.style.display === "none") {
                dettagliDiv.style.display = "block";
                infoBtn.textContent = "Meno informazioni";
            } else {
                dettagliDiv.style.display = "none";
                infoBtn.textContent = "Maggiori informazioni";
            }
        });

        destinazioniContainer.appendChild(destinazioneDiv);
    });
}

// Carica le destinazioni per Gennaio (aggiungi anche per gli altri mesi)
caricaDestinazioni('gennaio', destinazioniGennaio);
