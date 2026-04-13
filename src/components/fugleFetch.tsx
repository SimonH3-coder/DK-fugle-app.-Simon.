
fugleFetch()
export async function fugleFetch() {
fetch("https://api.ebird.org/v2/data/obs/{{dk}}/recent")
try {
    const birdName = document.getElementById("birdName").value.toLowerCase()
    const response = await fetch(`https://api.ebird.org/v2/data/obs/{{dk}}/recent/${birdName}`);
    if (!response.ok) {
        throw new Error("Could not fetch resource");

}
const data = await response.json()

const birdsAbout = data.sprites.front_default
const imgElement = document.getElementById("birdsAbout")
imgElement.src = birdsAbout
imgElement.style.display = "block"

}
catch (error) {
    console.error(error)

}
}
