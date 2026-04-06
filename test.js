
async function btc() { 
    const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSD&interval=1d&limit=30' ; 
    try  {
        const response = await fetch(url) ;
        if(!response.ok) {
            throw new Error('Erreur') ;
        }
         const data = await  response.json() ; 
         //console.log(data) ; 
         return data; 
    }
    catch {
        console.error(error.message)   ; 
        return null ;
     }
}



const objet = (async() =>{
    const bitcoin = await btc() ; 
    return bitcoin ;
    })() ;


objet.then(data => {
console.log(objet) ; 
}) ;