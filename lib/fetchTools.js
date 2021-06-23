/**
 * 
 * @param {string} email 
 * @param {toolEndpoint} toolEndpoint full URL for tool data
 */
export async function fetchTools(email,toolEndpoint){

    const res = await fetch(toolEndpoint + '/tools',{method:'GET',headers:{email}});
    return res.json()

}

