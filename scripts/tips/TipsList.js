import { Tip } from "./Tip.js";
import { getTip } from "./TipData.js";

export const TipList = () => {
    const allTips = getTip();
    const DOMlocation1 = document.querySelector("#tips");
    let tipsHTML = "";
    for (let x of allTips) {
        tipsHTML += Tip(x);
    }
    DOMlocation1.innerHTML += tipsHTML;
}