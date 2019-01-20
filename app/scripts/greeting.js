function defaultGreeting() {
  return 'Hello World!';
}

export default defaultGreeting;

export function customGreeting(greeting) {
  return `Hello ${greeting}`;
}
