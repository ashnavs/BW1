function constructUrl(baseUrl,queryParams){
    const url = new URL(baseUrl)

    Object.keys(queryParams).forEach(keys=>{
        url.searchParams.append(keys,queryParams[keys])
    })
    return url.toString()
}

const baseUrl = 'https://example.com'
const queryParams = {
    search : 'javascript',
    page : 2,
    sort: 'asc'
}

const fullUrl = constructUrl(baseUrl,queryParams)
console.log(fullUrl);
