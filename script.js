const selectedOption = document.querySelector('#select');
const Wrapper = document.querySelector('.wrapper')
const body = document.querySelector('body')
const grid = document.querySelector('.grid')


const imgList =[];

let dragIndex;

/* Array of the img src attribute */
let imgGridSrc =[]
const Pro = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg'
]
const Biginer = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg'
]
const Intermediate = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg'
]
let x;







function ShowGridBoard(){
    if (grid.children.length > 0){
        console.log(grid.children);
       
    }else{
    
    if(selectedOption.value == 'Beginner'){ x=0}
    else if(selectedOption.value == 'Intermediate'){x=1}
    else{x=2}

    
    switch(x){

    case 0:
    imgGridSrc = Biginer  ;
    break;
    case 1:
      imgGridSrc =Intermediate  ;
   
    break;
    case 2:
      imgGridSrc = Pro  ;

    break;
    default:
      imgGridScr = [];
}
  
    [...imgGridSrc].map(a=>({value:a, sort: Math.random()}))
        .sort((a,b)=>{return a.sort-b.sort})
        .map(a=> a.value).forEach((imgSrc,index)=>{
        console.log(imgSrc)
    const listItem = document.createElement('li')
    listItem.setAttribute('data-index', index);
    listItem.setAttribute('class', 'draggable');    
    listItem.innerHTML= `<div class="draggable" draggable="true">
                        <img src="${imgSrc}"/>
                   </div>`  
    grid.appendChild(listItem);
        
        imgList.push(listItem);
        
    
})
addEventListeners();
    

    if(selectedOption.value == 'Beginner'||selectedOption.value == 'Intermediate'||selectedOption.value == 'Pro!'){
        Wrapper.style.display='block';
        body.style.height='auto';
    }else{
        Wrapper.style.display='none';
        body.style.height='100vh';
    }}

}

function dragStart(){
   dragIndex = +this.closest('li').getAttribute('data-index')
   console.log(dragIndex)
}
function dragEnter(){
   // console.log('drag Enter')
}
function dragLeave(){
    //console.log('drag leave')
}
function dragOver(e){
    //console.log('drag over')
    e.preventDefault();
}
function dragDrop(){
    //console.log('drag drop')
    const dragEndIndex = +this.getAttribute('data-index')
    swapImg(dragIndex,dragEndIndex)
}

function swapImg(fromIndex,toIndex){
// console.log('me')
    
    const imgOne = imgList[fromIndex].querySelector('.draggable');
    const imgTwo = imgList[toIndex].querySelector('.draggable')
    
    imgList[fromIndex].appendChild(imgTwo);
    imgList[toIndex].appendChild(imgOne)
    
    console.log(imgOne,imgTwo);
}

function addEventListeners(){
    const draggables = document.querySelectorAll('.draggable');
    const imgList = document.querySelectorAll('.grid li');
    
    draggables.forEach((draggable)=>{
    draggable.addEventListener('dragstart',dragStart)
        console.log(draggable)
    })
    
    imgList.forEach(img=>{
    img.addEventListener('dragover',dragOver)
    img.addEventListener('drop',dragDrop)
    img.addEventListener('dragenter',dragEnter)
    img.addEventListener('dragleave',dragLeave)

        
    })
}