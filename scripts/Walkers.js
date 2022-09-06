import { getWalkers, getWalkerCities, getCities } from "./database.js"

const filterWalkerCitiesByWalker = (id) => {
    let walkerCityIDs = []
    let walkerCityNames = []
    for (const walkerCity of walkerCities) {
        if (walkerCity.walkerId === id) {
            walkerCityIDs.push(walkerCity.cityId)
        }
    }
    for (const id of walkerCityIDs) {
        for (const city of cities) {
            if (city.id === id) {
                walkerCityNames.push(city.name)
            }
        }
    }
    return walkerCityNames
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const walkerId = itemClicked.id.split("--")[1]
            console.log(walkerId)
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${filterWalkerCitiesByWalker(walker.id)}`)
                }
            }
        }
    }
)



const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

export const Walkers = () => {

    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    return walkerHTML += "</ul>"

}

