import { getPets, getWalkers, getWalkerCities, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

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

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${filterWalkerCitiesByWalker(currentPetWalker.id)}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

