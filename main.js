//My api Key
const apiKey = {
    key: "ad837b65-297a-4861-a3c5-de8aa1ed600a"
}

//GET Fetch Requisition
fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" + apiKey.key)
.then((response) => {
    if(!response.ok) throw new Error("Erro ao executar a requisicao, status" + response.status)
    return response.json()
})

.then((api) => {
    console.log(api)
})

.catch((error) => {
    console.error(error.message)
})
