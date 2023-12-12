export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'c0bc50847emshf9e876cbb63bfd0p10f6c1jsn088835a564bf',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
