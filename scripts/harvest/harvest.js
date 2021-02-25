export const Harve = (harvObj) => {
    return (
        `<article class="harvest-card">
            <div><img class="harvest-image" src="/images/${harvObj.image}" /></div>
            <h3 class="harvest-name">${harvObj.location}</h3>
            <ul>
                <li class="harvest">Date Visited: ${harvObj.DateVisited}</li>
                <li class="harvest">Fish Collected: ${harvObj.numfish}</li>
        </article>
        `
    )
}