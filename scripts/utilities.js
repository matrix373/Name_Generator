const names = ["Efe", "Mehmet", "Alex", "Jhon", "Max", "Cristian", "Chirs", "Marvins", "Ian", "Eric"];

function GetRandomIndex(){
  return Math.floor(Math.random() * names.length)
}

function GetName(){
  return names[GetRandomIndex()];
}
