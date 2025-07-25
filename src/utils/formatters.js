export const getCityAndCountry = (address) => {
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  return { city, country };
};

export const formatMileage = (mileage) => {
  return mileage.toLocaleString('en-US').replace(/,/g, ' ');
};

export const idFromImg = (url) => {
  const match = url.match(/\/(\d{4})-ai\.jpg$/);
  return match ? match[1] : null;
};
