

export async function getBirds() {
  const response = await fetch (`https://api.ebird.org/v2/data/obs/DK/recent`, {
    headers: {
      'X-eBirdApiToken': 'phfs1qktjj86'
    }
  });
   
if (!response.ok) {
  throw new Error("Network response was not ok");
}
const data = await response.json();

}

{
  const getData = data.map((bird: any) => ({
    birdname: bird.birdname,
    scientificname: bird.scientificname,
    size: bird.size,
    weight: bird.weight,
    habitats: bird.habitats
  }));

    console.log(getData);
    return getData;
    
}
  
