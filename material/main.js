const book_data= [
  {id:1, bookName:"aaaa",bookCover:"aaaa", price:100, author:{Name:"aaaa",Email:"@gmail.com",Website:"writer.com"}, publishedDate:"10/07/1999" },
  {id:2, bookName:"aaaa",bookCover:"aaaa", price:100, author:{Name:"aaaa",Email:"@gmail.com",Website:"writer.com"}, publishedDate:"10/07/1999" },
  {id:3, bookName:"aaaa",bookCover:"aaaa", price:100, author:{Name:"aaaa",Email:"@gmail.com",Website:"writer.com"}, publishedDate:"10/07/1999" },
  {id:4, bookName:"aaaa",bookCover:"aaaa", price:100, author:{Name:"aaaa",Email:"@gmail.com",Website:"writer.com"}, publishedDate:"10/07/1999" },
  {id:5, bookName:"aaaa",bookCover:"aaaa", price:100, author:{Name:"aaaa",Email:"@gmail.com",Website:"writer.com"}, publishedDate:"10/07/1999" }
]

function checkInputs() {
  let inputs = document.querySelectorAll("input");
  let dataLength =0;
  for(let i = 0; i < inputs.length; i++) {
    if(inputs[i].value === "") {
      alert("Pleas fill the form")
      dataLength=0;
      break;
    } else {
      dataLength += 1;
    }
  }

  if(dataLength === 4) {
    addItems(inputs);
  }  
}

function addItems(inputs) {
 $$("table").add({
   bookName: document.querySelector("#bookName").value,
   bookCover: document.querySelector("#bookCover").value,
   price: document.querySelector("#price").value,
   publishedDate: document.querySelector("#date").value,
 })

 for(let i = 0; i < inputs.length; i++) {
  inputs[i].value = "";
 }
}

function updateItem() {

}
function removeItem(){

}

webix.ui({
  view:"popup",
  id:"editwin",
  head:"Edit.. ",
  left: "100px",
  body: {
    view: "form", id:"editform", elements: [
      {view:"text", lable:"Book Name", name:"bookName"},
      {view:"text", lable:"Book Cover", name:"bookCover"},
      {view:"text", lable:"Price", name:"price"},
      {view:"text", lable:"Published Date", name:"publishedDate"},
      {cols: [
        { view:"button", value:"Cancel", click:function(){
          this.getTopParentView().hide(); 
        }},
        { view:"button", type:"form", value:"Save", click:function(){
          this.getFormView().save();
          this.getTopParentView().hide(); 
        }}
      ]}
    ]
  }
});

webix.ui({
  rows:[
    {
      view:"button", value:"Add item", click:checkInputs, width:200
    },
    {
    view:"datatable",
    id:"table",
    columns:[
       {id:"bookName", fillspace:true, header:"Book Name"},
       {id:"bookCover",fillspace:true, header:"Book Cover"},
       {id:"price", fillspace:true,header:"Price"},
       {id:"publishedDate",fillspace:true, header:"Published Date", format: webix.Date.dateToStr("%d/%n/%Y")},
       {template:function(obj) {
        return "<button class='edit_btn'> Edit </button>";
      }
     },
     {template:function(obj) {
      return "<button class='remove_btn'> Remove </button>";
    }
   }
    ],
    select:true,
    data: book_data,    
    onClick: {
      edit_btn:function(e, id, node){
        $$("editwin").show(node);
      },
      remove_btn:function(e,id, node) {
        $$("table").remove(id);
      }
    }
  }
  ] ,
});

$$("editform").bind($$("table"));
