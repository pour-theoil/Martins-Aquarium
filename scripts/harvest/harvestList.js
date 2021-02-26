import { Harve } from "./harvest.js";
import { harvlocation } from "./harvestData.js";

export const HarvestList = () => {
    const allHarvest = harvlocation();
    const DOMlocation2 = document.querySelector("#harvest");
    let harvestHTML = "";
    for (let x of allHarvest) {
        harvestHTML += Harve(x);
    } 

    console.log("harvest html", harvestHTML);
    DOMlocation2.innerHTML += harvestHTML;
}