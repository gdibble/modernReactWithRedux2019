export default (state, action) => {
  // Never mutate state:
  state[0] = 'Sam';
  state.pop();
  state.push();
  state.name = 'Same';
  state.age = '30';
};
