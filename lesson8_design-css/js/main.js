document.addEventListener('DOMContentLoaded', function(){
    const mt = new MenuToggle('.header-btn');
    mt.el.addEventListener('click', function(){
            mt.open();
    });
});

class MenuToggle {
    constructor(el) {
        this.el = document.querySelector(el);
        this.body = document.querySelector('body');
    }
    open() {
        this.body.classList.toggle('open');
    }
}