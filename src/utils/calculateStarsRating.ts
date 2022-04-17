/**
 * @description return an array of 5 positions where 1 represents complete stars and 0 empty stars.
 */

export function calculateStarsRating(rating: number) {
  if (rating <= 1) {
    return [0, 0, 0, 0, 0];
  }
  if (rating <= 3) {
    return [1, 0, 0, 0, 0];
  }
  if (rating <= 5) {
    return [1, 1, 0, 0, 0];
  }
  if (rating <= 7) {
    return [1, 1, 1, 0, 0];
  }
  if (rating <= 9) {
    return [1, 1, 1, 1, 0];
  }
  if (rating > 9) {
    return [1, 1, 1, 1, 1];
  }
  return [0, 0, 0, 0, 0];
}
