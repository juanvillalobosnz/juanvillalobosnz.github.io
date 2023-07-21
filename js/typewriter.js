const texts = [
  'print("Welcome to my profile!")',
  'fmt.Println("Welcome to my profile!")',
  'System.out.println("Welcome to my profile!");'
];
let count = 0;
let index = 0;
const typewriterElement = document.querySelector('#typewriter');

function type() {
  if (count === texts.length) {
    count = 0;
  }
  const currentText = texts[count];
  const letter = currentText.slice(0, ++index);

  typewriterElement.textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
}

type();
