// Assuming this code is executed in the context of your browser script
window.addEventListener('message', (event) => {
    if (event.data.type === 'updateStats') {
        // Extract the data from the message
        const { health, oxygen, stamina } = event.data;

        // Update the stat bars with the received data
        updateStatBars(health, oxygen, stamina);
    }
});

function updateStatBars(healthValue, oxygenValue, staminaValue) {
    document.getElementById('health-bar').style.width = healthValue + '%';
    document.getElementById('oxygen-bar').style.width = oxygenValue + '%';
    document.getElementById('stamina-bar').style.width = staminaValue + '%';
}
