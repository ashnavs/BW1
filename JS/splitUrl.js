// const baseUrl = 'https://blog.example.com'
// function parseUrl(baseUrl){
//     const {protocol,hostname} = new URL(baseUrl)
//     const [subdomain,domain,tld] = hostname.split(".")
//     return {schema: protocol.replace(":",""),subdomain,domain,tld}
// }

// console.log(parseUrl(baseUrl));


//every typeof url;
function parseURL(url){
    const {protocol,hostname} = new URL(url)
    const parts = hostname.split(".")

    let subdomain = ""
    let domain = ""
    let tld = ""

    if(parts.length===3){
        [subdomain,domain,tld] = parts
    }else if(parts.length===2){
        [domain,tld] = parts
    }else if(parts.length>3){
        subdomain = parts.slice(0,-2).join(".")
        domain = parts[parts.length-2]
        tld = parts[parts.length-1]
    }
    return {schema:protocol.replace(":",""),subdomain,domain,tld}
}

console.log(parseURL("https://sub.example.com"));
console.log(parseURL("https://example.com"));
console.log(parseURL("https://deep.sub.example.com"));
