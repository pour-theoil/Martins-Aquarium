import { Fish } from "./fish.js";
import { getFish } from "./fishData.js";

export const FishList = () => {
    // get the array of fishes
    const allFishes = getFish();
    // get reference to the location on the DOM where to dispay
    const DOMlocation = document.querySelector("#fishList");
    // Declare variable to hold on to the fish HTML
    let fishHTMLRepresentations = "";
    // loop over the array of fish
    for (let x of allFishes) {
        fishHTMLRepresentations += Fish(x);
        
    }
    console.log("fishHTMLRepresentations", fishHTMLRepresentations)
    DOMlocation.innerHTML += fishHTMLRepresentations;
}

