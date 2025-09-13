var checkbox = document.getElementsByClassName("checkbox");
var deleteBtn = document.querySelector("#delete-task");

// console.log(checkbox);
// console.log(deleteBtn);
let idArr = [];

for (let i of checkbox) {
  i.addEventListener("change", () => {
    if (i.checked) {
      let text = i.getAttribute("action");
      const id = (text.split("id=")[1]);
    //   console.log(id);
      idArr.push(id);
    //   console.log(text);
    //   console.log(idArr,"idArr");
      let str="?"
      for(let i=0;i<idArr.length; i++){
        if(i!=0){
            str+=`&id=${idArr[i]}`
        }else{
            str+=`id=${idArr[i]}`
        }
      }
    //   console.log(str);
      deleteBtn.setAttribute("href", `/delete-task/${str}`);
      return;
    } else {
      let text = i.getAttribute("action");
      const id = (text.split("id=")[1]);
    //   console.log(id ,"removed");
      idArr=idArr.filter(i=>i!=id);
    //   console.log(idArr,"idArr");
      let str="?"
      for(let i=0;i<idArr.length; i++){
        if(i!=0){
            str+=`&id=${idArr[i]}`
        }else{
            str+=`id=${idArr[i]}`
        }
      }
    //   console.log(str);
      deleteBtn.setAttribute("href", `/delete-task/${str}`);
      return;
    }
  });
}
