export function toTimestamp(value: string | Date) {
  return value instanceof Date ? value.getTime() : Date.parse(value);
}

export function formatDate(value: string | Date) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return value;
}
