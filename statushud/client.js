// Client.js (Backend)

// Define the function and make it global
function updateStatBars(healthValue, oxygenValue, staminaValue) {
    SendNuiMessage(JSON.stringify({
        type: 'updateStats',
        health: healthValue,
        oxygen: oxygenValue,
        stamina: staminaValue
    }));
}

// Your existing code
let ped = GetPlayerPed(-1);
let healthValue = GetEntityHealth(ped);
let oxygenValue = GetPlayerUnderwaterTimeRemaining(ped) * 10;
let staminaValue = GetPlayerSprintStaminaRemaining(ped);

updateStatBars();

setInterval(() => {
    ped = GetPlayerPed(-1);
    healthValue = GetEntityHealth(ped);
    oxygenValue = GetPlayerUnderwaterTimeRemaining(ped) * 10;
    staminaValue = GetPlayerSprintStaminaRemaining(ped);

    // Call the globally defined function
    updateStatBars(healthValue, oxygenValue, staminaValue);
}, 1000);
