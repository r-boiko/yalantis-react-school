export const validators = {
  required: value => value ? undefined : 'Required',
  number: value => value && isNaN(Number(value)) ? 'Must be a number' : undefined,
};