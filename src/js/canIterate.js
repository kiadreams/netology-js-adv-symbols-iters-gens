export default function canIterate(obj) {
  return obj == null ? false : typeof obj[Symbol.iterator] === 'function';
}
