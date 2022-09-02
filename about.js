console.log('hello world');

const img = document.querySelector('img');
const ul = document.querySelector('ul');

function handleSubmit(evt) {
  evt.preventDefault();

  alert('Your form has been successfully submitted!');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', () => {
  let randomListNum = Math.ceil(Math.random() * ul.childNodes.length);
  if (randomListNum % 2 === 1) {
    alert(ul.childNodes[randomListNum].textContent);
  } else {
    randomListNum--;
    alert(ul.childNodes[randomListNum].textContent);
  }
});
