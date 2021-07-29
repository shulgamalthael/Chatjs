export const getUserConversation = url => {
    return fetch(url).then( res => {
        if ( res.ok ) {
            return res.json();
        } else {
            throw new Error(`Eternal Error with status: ${res.status}`)
        }
    })
}

export const postUserConvarsation = ( url, convarsationData ) => {
    return fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(convarsationData),
    })
}