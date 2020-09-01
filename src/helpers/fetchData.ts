import { baseUrl } from './constants'; 
export const fetchLogData = async (method: string, url: string, dataFromUser: any) => {
  const response = await fetch(`${baseUrl}${url}`, 
    {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(dataFromUser)
    }
  )
  const data = await response.json();
  return data;
};

export const getData = async (url: string) => {
  const response = await fetch(`${baseUrl}${url}`, 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  )
  const data = await response.json();
  return data;
}

export const fetchLogDataWithToken = async (method: string, url: string, dataFromUser: any, token: string | null) => {
  console.log(`${baseUrl}${url}`)
  const response = await fetch(`${baseUrl}${url}`, 
    {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: JSON.stringify(dataFromUser)
    }
  )
}