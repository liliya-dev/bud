export const baseUrl = 'localhost:3000';

export const checkToken = async (value: string) => {
  const response = await fetch(`http://localhost:3002/check`, 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${value}`,
        Accept: 'application/json',
      },
      credentials: 'include',
    }
  )
  const data = await response.json();
}
