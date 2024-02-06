let gridContent = document.getElementById("grid");

const grid = () => {
  for(let i = 0; i < 16; ++i){
    let row = document.createElement("div");
    row.className = "row"
    gridContent.appendChild(row);
    
    for(let j = 0; j < 16; ++j) {
      let col = document.createElement("div");
      col.className = "col-sm";
      col.innerHTML = j;
      row.appendChild(col);
    }
    
  }
}