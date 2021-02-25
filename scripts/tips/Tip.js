export const Tip = (tipObj) => {
    return (
        `<article class="tip-card">
            <div><img class="tank-image" src="/images/${tipObj.image}" /></div>
            <h3 class="tank-name">${tipObj.tanktype}</h3>
            <ul>
                <li class="tank-tips">Salinity: ${tipObj.salinity}</li>
                <li class="tank-tips">Tank Size: ${tipObj.gallons}</li>
                <li class="tank-tips">Cleaning: ${tipObj.cleaning}</li>
        </article>
        `
    )
}