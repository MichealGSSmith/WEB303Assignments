/*
    Assignment 4
    Micheal Smith #0777761
*/

$(document).ready(function(){
    // your code here
//this is our class, just like PHPS
    class ContentCard {
        constructor(id, title, description, catagoryType) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.catagoryType = catagoryType;
        };

        updateContent(title, description, catagoryType) {
            if((title || description || catagoryType) == !null) {
                ContentCard.title = this.title;
                ContentCard.description = this.description;
                ContentCard.catagoryType = this.catagoryType;
            }
        }; 

        toString() {
            return `<div style= "border: 1px solid black; margin: 2px 0; border-radius: 5px; text-align: center" id="${this.id}">
            <h4>${this.title}</h4>
            <p>${this.description}</p>
            <div>${this.catagoryType}</div>
            </div>`
        } 

    }

    let newCard1 = new ContentCard("1", "49ers", "Best team to ever play the good ol'game of football", "NFL");
    let newCard2 = new ContentCard("2", "Hamilton Ti-Cats", "My favorite CFL team, Oskee wee wee Oskee waa waa", "CFL");
    let newCard3 = new ContentCard("3", "Ottawa Red Blacks", "They left and came back but the name change sucks, the Ottawa RazorBacks was so much better", "CFL");
    let newCard4 = new ContentCard("4", "Saskatchewan Roughriders", "If the name was close enough to being broke back mountain they are based in Calgary... do i need to say more?", "CFL");
    let newCard5 = new ContentCard("5", "Raiders", "Literal garbage fire!! These guys when they were Oakland raiders, always stole 49ers sloppy seconds and would make us eat the trade!! i hate them sooo much", "NFL");

    $("#content-list").append(newCard1.toString());
    $("#content-list").append(newCard2.toString());
    $("#content-list").append(newCard3.toString());
    $("#content-list").append(newCard4.toString());
    $("#content-list").append(newCard5.toString());

    /* console.log(newCard1);
    console.log(newCard2);
    console.log(newCard3);
    console.log(newCard4);
    console.log(newCard5); */





    
});


