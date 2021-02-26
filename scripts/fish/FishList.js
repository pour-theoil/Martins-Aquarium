import { Fish } from "./fish.js";
import { getFish, getSoldierFish } from "./fishData.js";

export const FishList = () => {
    // get the array of fishes
    const allFishes = getSoldierFish();
    // get reference to the location on the DOM where to dispay
    const DOMlocation = document.querySelector("#fishList");
    // Declare variable to hold on to the fish HTML
    let fishHTMLRepresentations = "";
    // loop over the array of fish
    for (let x of allFishes) {
        fishHTMLRepresentations += Fish(x);   
    }
    console.log("harvest html", fishHTMLRepresentations);
    DOMlocation.innerHTML += fishHTMLRepresentations;
}

