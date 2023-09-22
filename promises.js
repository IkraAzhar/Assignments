// Task 1: Give Car for Maintenance
function giveCarForMaintenance() {
    console.log("Step 1: Give Car for Maintenance");
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Car maintenance complete.");
            resolve();
        }, 2000);
    });
}
// Task 2: Laundry - Pick Dress
function pickDressFromLaundry() {
    console.log("Step 2: Pick Dress from Laundry");
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Dress picked up from the laundry.");
            resolve();
        }, 1000);
    });
}
// Task 3: Go Home and Get Ready
function goHomeAndGetReady() {
    console.log("Step 3: Go Home and Get Ready");
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Ready to go to the event.");
            resolve();
        }, 3000);
    });
}
// Task 4: Go to Event
function goToEvent() {
    console.log("Step 4: Go to the Event");
    console.log("Enjoy the event!");
}
// Sequence
giveCarForMaintenance()
    .then(function () { return pickDressFromLaundry(); })
    .then(function () { return goHomeAndGetReady(); })
    .then(function () { return goToEvent(); })
    .catch(function (error) {
    console.error("An error occurred:", error);
});
