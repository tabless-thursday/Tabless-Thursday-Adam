class NavLink {
    constructor(navElement) {
        
        this.navElement = navElement;

        navElement.addEventListener('mouseover', () => this.highlight() );
        navElement.addEventListener('mouseleave', () => this.resolve() );
    };

    highlight() {
        this.navElement.style.color = '#D1DBBD';
    }
    resolve() {
        this.navElement.style.color = '';
    }


}



let a = document.getElementsByTagName('a');
Array.from(a).forEach(item => new NavLink(item));

