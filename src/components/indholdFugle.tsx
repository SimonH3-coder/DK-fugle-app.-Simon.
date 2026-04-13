

export async function getBirds() {
  const response = await fetch ("https://api.ebird.org/v2/data/obs/{{regionCode}}/recent")
   
if (!response.ok) {
  throw new Error("Network response was not ok");
}
return response.json();

}
  
