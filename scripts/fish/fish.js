export const Fish = (fishObj) => {
    return (
        `<article class="fish-card">
				<div><img class="fish-image" src="/images/${fishObj.image}" /></div>
				<h3 class="fish-name">${fishObj.name}</h3>
				<ul>
					<li class="fish-details">${fishObj.species}</li>
					<li class="fish-details">Length: ${fishObj.inches}</li>
					<li class="fish-details">Harvested: ${fishObj.harvestlocation}</li>
					<li class="fish-details">Diet: ${fishObj.diet}</li>
				</ul>
        </article>
        `
    )
}