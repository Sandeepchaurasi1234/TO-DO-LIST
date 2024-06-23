function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered 
    if (newTask != "") {
        // create new HTML list item
        var item = document.createElement("li");
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" class="important" onclick="important(this.parentNode)" Value="!" />' + newTask;

        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item); 

        /* Step 4 below here */
   var input = document.getElementById("input");
    input.value=" ";

    input.placeholder="enter task......";
    }
}

// change styling used for given item
function markDone (item) {
    item.className = 'finished';
}

/* Step 7 below here */
function remove (item) {
  if(item.className=='finished')
    item.remove();
}

function doAbout() {
  var dd1 = document.getElementById('divabout');
  dd1.innerHTML = "Author is Muskan";
  dd1.className = "aboutcolor";
}

/* Step 14 below here */
function clearAbout() {
    let author = document.getElementById("divabout");
  author.innerText = " ";
}
function important(item){
  item.className = 'important';
}
