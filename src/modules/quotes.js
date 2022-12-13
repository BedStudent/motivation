import uzrasai from "./service"
const motyvacija = ()=>{
    uzrasai()
        .then(result=>{
            for(let object in result){
                const div = document.createElement('div')
                    if(object === '0'){
                        div.classList = "carousel-item active"
                    }else{
                        div.classList = "carousel-item"
                    }
                    document.querySelector('.carousel-inner').appendChild(div)
                    
                for(let key in result[object]){
                    //console.log(`${key}: ${result[object][key]}`)
                    const p = document.createElement('p')
                    p.textContent = `${result[object][key]}`
                    div.appendChild(p)
                }
            }
        }
)}

export default motyvacija