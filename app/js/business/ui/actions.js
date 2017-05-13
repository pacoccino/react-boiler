export const SET = 'ui:set';

export function set(d) {
  return {
    type: SET,
    d,
  };
}
