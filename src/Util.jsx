export { getCards, postUser, postContact, login, getImgURL}
const URL = 'http://138.68.126.118:3000/api'

/*
    EXAMPLE FILTER    
    const filters = await searchCards({
        title: 'Tutor Senenco',
        tagsAny: ['engrish'],
        tagsAll: ['programming', 'algorithms'],
        area: 'madrid',
        community: 'madrid'
    });
*/
async function getCards(filters = {}) {
    const params = new URLSearchParams();
    if (filters.title) params.append('title', filters.title);
    if (filters.community) params.append('community', filters.community);
    if (filters.area) params.append('area', filters.area);
    if (filters.tagsAny) params.append('tagsAny', filters.tagsAny.join(','));
    if (filters.tagsAll) params.append('tagsAll', filters.tagsAll.join(','));
    return await fetch(`${URL}/cards?${params}`).then(r => r.json())
}


async function postUser(email, password) {
    return await fetch(`${URL}/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(r => r.json())
}


async function postContact(userId, phoneNum, email) {
    return await fetch(`${URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: userId,
            phoneNum: phoneNum,
            email: email
        })
    }).then(r => r.json())
}


async function login(email, password) {
    return await fetch(`${URL}/user/${email}/${password}`).then(r => r.json())
}


function getImgURL(filename) {
    return `${URL}/pfps/${filename}`
}





