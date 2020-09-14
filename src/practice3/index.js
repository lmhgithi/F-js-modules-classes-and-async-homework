// export const getPoetry = () => {
//     const URL='https://v1.jinrishici.com/all.json'
//     return fetch(URL, {
//         method: 'GET',
//     }).then(response => {
//         if(response.status == 200){
//             return Promise.resolve(response.json())
//         } else {
//             return Promise.reject('sth wrong')
//         }
//     }).then(data => {
//         return [data.origin, data.author, data.content]
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

export const getPoetry = async () => {
    try{
        const URL='https://v1.jinrishici.com/all.json'
        const response = await fetch(URL, {method: 'GET',})
        const jsonData = await response.json()
        const result = [jsonData.origin, jsonData.author, jsonData.content]

        return result
    } catch (error) {
        console.log(error)
    }
}