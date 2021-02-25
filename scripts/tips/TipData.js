const tankTips = [
{
    tanktype: "Saltwater",
    salinity: "45mg/L",
    gallons: 100,
    cleaning: "Every 2 weeks",
    image: "saltwatertank.jpg"
},
{
    tanktype: "Freshwater",
    salinity: "> 5mg/L",
    gallons: 50,
    cleaning: "Every week",
    image: "freshwatertank.jpg"
}
]

export const getTip = () => {
    return tankTips;
}