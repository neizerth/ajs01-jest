export const request = async (options) => {
    const { 
        body, 
        url, 
        method, 
        type = 'text'
    } = options;
    
    const response =  await fetch(url, {
        method,
        body
    });

    return await response[type]();
}