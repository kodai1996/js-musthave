const div1 = document.getElementById("div1");
const items = ['1:黒スキニーパンツ', '2:革靴', '3:白シャツ', '4:スラックス', '5:セットアップ', '6:ロングコート', '7:黒靴下', '8:パーカー', '9:白スニーカー'];

for(let i=0; i<3; i++){
  const newDiv = document.createElement("div");
  for(let j=0; j<3; j++){
    const newButton = document.createElement("button");
    const newButtonNumber =i * 3 + j + 1;
    const itemNumber = newButtonNumber - 1; 
    newButton.innerHTML = newButtonNumber;

    newButton.onclick = ()=>{
      const item = document.getElementById("item");
      item.innerHTML = items[itemNumber];
    }
    newDiv.appendChild(newButton);
  }
  div1.appendChild(newDiv);
}

const allBtn = document.getElementById("all");
const itemName = document.getElementById("itemName");
const div2 = document.getElementById("div2");

allBtn.onclick = () => {
  div2.innerHTML = "";
  const allItem = () => {
    for(let a=0; a<9 ; a++){
      const newText = document.createElement("h4");
      newText.innerHTML = items[a];
      div2.appendChild(newText);
    }
  }
  allItem();
}