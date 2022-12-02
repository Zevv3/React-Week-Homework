let token = `9f2d14750efa519567546c647f3009f9ef73fe4706235d5a`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://opaque-mountainous-trowel.glitch.me/api/albums`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    
    create: async (data:any) => {
        const response = await fetch(`https://opaque-mountainous-trowel.glitch.me/api/albums`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },

    update: async (id:string, data:any) => {
        const response = await fetch(`https://opaque-mountainous-trowel.glitch.me/api/albums/${id}`, {
            // PUT alters data and POST either updates or creates new data
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async (id:string) => {
        const response = await fetch(`https://opaque-mountainous-trowel.glitch.me/api/albums/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
    }
}