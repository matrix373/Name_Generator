const names = ["efe", "mehmet", "alex", "jhon", "max", "cristian", "chirs", "marvins", "Ian", "eric"];

function GetRandomIndex(){
  return Math.floor(Math.random() * names.length)
}

function GetName(){
  return names[GetRandomIndex()];
}
