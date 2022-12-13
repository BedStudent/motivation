const uzrasai = ()=>{
    const url = 'https://strangerthings-quotes.vercel.app/api/quotes/50';
    return fetch(`${url}`)
        .then(response=>response.json())
}
export default uzrasai