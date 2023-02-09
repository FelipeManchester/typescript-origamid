export default async function fetchData<T>(url: string): Promise<T | null> {

  try {
    const res = await fetch(url);
    if(!res.ok) throw new Error('Erro:' + res.status);
    const json = await res.json();
    return json;
  } catch (error) {
    if(error instanceof Error) console.error('FetchData: ' + error.message)
    return null
  }

}