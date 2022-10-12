export const getPost = async id => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await resp.json()
    return data;
}


export const getPosts = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await resp.json()
    return data;
}