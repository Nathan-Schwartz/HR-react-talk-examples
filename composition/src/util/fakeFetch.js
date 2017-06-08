export default function fakeFetch() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ data: { superfake: true} }), 1500);
  });
}