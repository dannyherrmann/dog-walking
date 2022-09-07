import { getWalkers, getCitiesForWalker } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const walkerId = parseInt(itemClicked.id.split("--")[1])
            const walkerCities = getCitiesForWalker(walkerId).join(', ')
            for (const walker of walkers) {
                if (walker.id === walkerId) {
                    window.alert(`${walker.name} services ${walkerCities}`)
                }
            }
        }
    }
)

const walkers = getWalkers()

export const Walkers = () => {

    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    return walkerHTML += "</ul>"

}

