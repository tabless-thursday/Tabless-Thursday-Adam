class TabSelect {
    constructor(element) {

        this.element = element;//Assign this.element to passed in DOM element (all elements of class ".team-tab") 
        this.data = this.element.dataset.tab;//Assign this.data to custom data attributes ("data-tab="num") set to the number values of each occurrence (1-7)
        this.cardElement = document.querySelector(`.team-card[data-tab='${element.dataset.tab}']`);   //set this.cardElement to all the div elements class ".team-card" (and all their contained child elements ) of the counterpart element.dataset.tab 
        this.cardItem = new CardSelect(this.cardElement);  //  this.cardElement passed through to CardSelect set to variable this.cardItem => next have to create CardSelect object creator
//         // console.log(this.cardElement); What are the fundamental differences between these two?
//         // console.log(this.cardItem);

        element.addEventListener("click", () => this.select() ); //this.select() function executes on ".team-tab" item being 'clicked'

    };

    select() {
        let tabs = document.querySelectorAll('.team-tab'); //get all elements from class "team-tab"
        Array.from(tabs).forEach(item => item.classList.remove("team-tab-selected")); //removes the stated class from each instance of the ".team-tab" items
        this.element.classList.add("team-tab-selected"); //adds the referenced class to this.element (the item that was clicked on ?????? )
        this.cardItem.select();
    } 

}


class CardSelect {
    constructor(element) {

        this.element = element;
    }

    select() {
        const cards = document.querySelectorAll(".team-card"); //grabbed all ".team-card" elements from DOM
        cards.forEach(item => item.classList.remove("team-card-selected"));
        this.element.classList.add("team-card-selected");
    }
}

/*Selected all classes named ".team-tab" and assigned the value to variable tabs */

tabs = document.querySelectorAll('.team-tab'); //tabs is a NodeList (arrayLike structure) containing all ".team-tab" instances
tabs.forEach(item => new TabSelect(item)); // Each item from NodeList is passed into new object called new TabSelect
