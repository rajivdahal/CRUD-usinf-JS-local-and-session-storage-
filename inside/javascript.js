console.log('a')
shownotes()
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener('click',function(e){
	let addTxt=document.getElementById("addTxt")
	let notes=localStorage.getItem("notes");
	if (notes==null) {
		var notes_repo=[];
	}
	else{
		notes_repo=JSON.parse(notes);
	}
	notes_repo.push(addTxt.value);
	localStorage.setItem('notes',JSON.stringify(notes_repo));
	addTxt.value="";
	console.log(notes_repo)
	shownotes();

});
function shownotes(){
	let notes=localStorage.getItem('notes');
	if (notes==null) {
		var notes_rep=[];
	}
	else{
		notes_rep=JSON.parse(notes);
	}
	let html='';
	notes_rep.forEach(function(element,index){
		 html =html+ `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text" id='textp'> ${element}</p>
                        <button id="${index}"onclick="deletee(this.id)" class="btn btn-primary">Delete Note</button>
                        <button id="${index}"onclick="edit(this.id)" class="btn btn-primary">Edit Note</button>
                    </div>
                </div>`;
	})
	let div=document.getElementById('notes');
	div.innerHTML=html
}

function deletee(index){
	let notes=localStorage.getItem("notes");
	var notes_repo
	if (notes==null) {
		 notes_repo=[];
	}
	else{
		 notes_repo=JSON.parse(notes);
	}
	notes_repo.splice(index,1);
	localStorage.setItem('notes',JSON.stringify(notes_repo));
	shownotes();




}
let search=document.getElementById('searchTxt');
search.addEventListener('input',function(){

    let input_value=search.value;
    console.log("fired",input_value)
    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
    	let cardtxt=element.getElementsByTagName("p")[0].innerText;

    	if (cardtxt.includes(input_value)) {
    		element.style.display='block';
    	}
    	else{
    		element.style.display='none';
    	}
    	
    })



})
function edit(index){
	let text=localStorage.getItem('notes');
	var notes_repo;
	if (text==null) {
		notes_repo=[];

	}
	else{
		notes_repo=JSON.parse(text);
	}
   document.getElementById('addTxt').value=notes_repo[index]
   console.log(notes_repo[index]);
   let innerText=document.getElementById('addTxt');
   innerText.innerText=notes_repo[index]
   zz=index;
   let html='';
   html=html+'<button class="btn btn-primary" onclick="updateBtn(zz)">update Note</button>'
   let div=document.getElementById('updateBtn');
	div.innerHTML=html

}

function updateBtn(id){
	let value=document.getElementById('addTxt').value;
	let text=localStorage.getItem('notes')

	let notes_repo;
	if (text==null) {
		notes_repo=[];

	}
	else{
		notes_repo=JSON.parse(text);
	}
	
	notes_repo[id]=value;
	console.log(notes_repo)
    document.getElementById('addTxt').value='';
    localStorage.setItem('notes',JSON.stringify(notes_repo));
    shownotes()




}

/*let updateBtn=document.getElementById('updateBtn')
updateBtn.addEventListener('click',function(e){
	let adtxt=document.getElementById('addTxt');
	let text=localStorage.getItem('notes');
	let notes_repo;
	if (text==null) {
		notes_repo=[];

	}
	else{
		notes_repo=JSON.parse(text);
	}
	console.log(e)
	

})*/

/*owl carasoul coding*/



/*end of owl carasoul*/
