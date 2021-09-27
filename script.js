let imgs = ["im1", "im2", "im3", "im4", "im6", "im7", "im8", "im9"]

let img_names = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic3.webp"]

let ims = []

let selected = []

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(imgs)
console.log(imgs)
//imgs.pop()
while(imgs.length) ims.push(imgs.splice(0,2));

console.log(ims)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function img_click(id) {
  if (selected.length < 2) {

    var element = document.getElementById(id);

    selected.push(element.id)

    console.log(element.id)

    for (let i = 0; i < ims.length; i++) {
      if (ims[i].includes(element.id)) {
        element.src = img_names[i];
        break;
      }
    }

    //element.src = "pic1.jpg";
  }
  if (selected.length >= 2) {

    await sleep(1000);

    for (let i = 0; i < ims.length; i++) {
      if (ims[i].includes(selected[0]) && ims[i].includes(selected[1])) {
        ims.splice(i, 1);
        img_names.splice(i, 1);
        document.getElementById(selected[0]).src = "";
        document.getElementById(selected[1]).src = "";
        console.log(ims);
        break;
      } else {
        for (elem in selected) {
          document.getElementById(selected[elem]).src = "gufer.jpg";
        }
      }
    }
    selected.length = 0;
  }

  if (ims.length <= 0) {
    document.getElementById("winning_text").innerHTML = "You won!";
    document.getElementById("memory_text").innerHTML = "In memory of Sigurd Rolfnes... RIP";
  }
}
