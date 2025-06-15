var BookmarkNameInp =document.getElementById('BookmarkName')
var BookmarkURLInp =document.getElementById('BookmarkURL')
  const form = document.getElementById('myForm');
  const urlInput = document.getElementById('validationCustomUrl');
  const centeredAlert = document.getElementById('centeredAlert');

var BookList =[]
BookList=JSON.parse(localStorage.getItem('BooK'))||[]
displayBook()
function isValidInput() {
  let nameValid = BookmarkNameInp.value.trim().length >= 3;
  let urlValid = BookmarkURLInp.validity.valid;

  if (!nameValid || !urlValid) {
    centeredAlert.style.display = "block";

    centeredAlert.innerHTML = `
      <p class="font-page">
        Site Name or URL is not valid, please follow the rules below:
      </p>
      <i class="fa-regular fa-circle-right p-2"></i> Site name must contain at least 3 characters<br />
      <i class="fa-regular fa-circle-right p-2"></i> Site URL must be valid
    `;

    setTimeout(() => {
      centeredAlert.style.display = "none";
    }, 4000);

    return false;
  }

  return true;
}


function getInputValue(){
if(isValidInput()==true){
    var BookObject ={
        BookName:BookmarkNameInp.value,
        BookURL:BookmarkURLInp.value,
        
    }
    
    BookList.push(BookObject)
    localStorage.setItem('BooK',JSON.stringify(BookList))
 displayBook()   }
 
}


function displayBook(){
var books=""
for(var i=0; i<BookList.length;i++){
books+=`
<tr>
            <th>${i+1}</th>
            <th>${BookList[i].BookName}</th>
            <th><a href="${BookList[i].BookURL}" target="_blank" class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i>Visit</a></th>
            <th><button type="button" onclick="deleteBookmark(${i})" class="btn btn-danger "><i class="fa-solid fa-trash-can"></i> Delete</button></th>
   </tr>
`


}
document.getElementById('bookrow').innerHTML=books
}
function deleteBookmark(index) {
  BookList.splice(index, 1);
  displayBook();
}
