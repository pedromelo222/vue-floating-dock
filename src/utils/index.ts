export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function pixelToNumber(value: string | number) {
  if (typeof value === 'string')
    return value.endsWith('px') ? +value.slice(0, -2) : +value
  return value
}
