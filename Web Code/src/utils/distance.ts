export function calculateDistance(
  currentLatitude: number,
  currentLongitude: number,
  docLatitude: number,
  docLongitude: number
): number {
  const earthRadiusKm = 6371;

  const dLat: number = toRadians(docLatitude - currentLatitude);
  const dLon: number = toRadians(docLongitude - currentLongitude);

  const lat1: number = toRadians(currentLatitude);
  const lat2: number = toRadians(docLatitude);

  const a: number =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
}

export function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}
