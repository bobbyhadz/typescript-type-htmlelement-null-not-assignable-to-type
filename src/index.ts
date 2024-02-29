// 👇️ const input: HTMLElement | null
const input = document.getElementById('submit');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const el1: HTMLElement = input!; // 👈️ non-null assertion

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const el2: Element = input!; // 👈️ non-null assertion

function example(el: Element) {
  return el;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
example(input!); // 👈️ non-null assertion