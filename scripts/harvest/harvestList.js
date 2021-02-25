import { Harve } from "./harvest.js";
import { harvlocation } from "./harvestData.js";

export const harvestList = () => {
    const allHarvest = harvlocation();
    const DOMlocation = document.querySelector('#harvest');
    let harvestHTML = "";
    for (let x of allHarvest) {
        harvestHTML += Harve(x);
    } 
    DOMlocation.innerHTLM += harvestHTML;
}