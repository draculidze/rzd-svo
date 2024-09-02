let parentGroups = document.querySelectorAll('section table tr[parent_group]');
parentGroups.forEach((item) => {
    //console.log(item);
    item.addEventListener('click', showGroup);
});

let items = document.querySelectorAll('.left-menu .item');
items.forEach((item) => {
    item.addEventListener('click', selectItem);
});

let def = "1,2,3,4,5,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,5.10,6,7,8,8.1,8.2,8.3";
showSupport(def);

    
function showSupport(stringElements)
{
    let arrElements = stringElements.split(',');
    //console.log(arrElements);
    let allParams = document.querySelectorAll('.who_helps .right-menu div[param]');
    allParams.forEach(function(el){
        el.style = "display: none";
    });

    arrElements.forEach(function(elem){
        let curEl = document.querySelector('.who_helps .right-menu div[param="'+ elem + '"]');
        //console.log(curEl);
        curEl.style = "display: block";
    });
}

function selectItem()
{
    let items = this.parentNode.querySelectorAll('.item');
    items.forEach((item) => {
        item.classList.remove('selected');
    });
    this.classList.add('selected');
}

function showTable($tableName)
{
    let child = document.querySelector('.child');
    let zoo = document.querySelector('.zoo');
    let sankur = document.querySelector('.sankur');

    child.style = "display: none";
    zoo.style = "display: none";
    sankur.style = "display: none";

    document.querySelector("." + $tableName).style = "display: block";
}

function showQuestion(stringElements)
{
    let arrElements = stringElements.split(',');
    //console.log(arrElements);
    let allParams = document.querySelectorAll('.questions .right-menu div[param]');
    allParams.forEach(function(el){
        el.style = "display: none";
    });

    arrElements.forEach(function(elem){
        let curEl = document.querySelector('.questions .right-menu div[param="'+ elem + '"]');
        //console.log(curEl);
        curEl.style = "display: block";
    });
}

function showGroup()
{

    let group = this.getAttribute('parent_group');
    let parentTable = this.parentNode.parentNode;
    let show = 1;
    
    let allGroupElements = parentTable.querySelectorAll('tr[group]');
    allGroupElements.forEach(function(el){
        el.style = "display: none";
    });

    let groupElements = parentTable.querySelectorAll('tr[group="' + group + '"]');
    
    if(show) {
        groupElements.forEach(function(el){
            el.style = "display: table-row";
        });
    }
   //console.log(this);
    
}
