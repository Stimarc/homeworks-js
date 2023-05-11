class MyButton {
    constructor(text, btnClass) {
        this._text = text;
        this._btnClass = btnClass;
        this._value = text;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
        this.render();
    }

    render() {
        const button = document.querySelector(`#${this._btnClass}`);
        button.innerHTML = this._value;
    }

    show() {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('my-btn', this._btnClass);
        button.textContent = this._text;
        document.body.appendChild(button);
    }
}

//Extends
class ColorButton extends MyButton {
    constructor(text, btnClass, colorClass) {
        super(text, btnClass);
        this._colorClass = colorClass;
    }

    show() {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('btn', this._btnClass, this._colorClass);
        button.textContent = this._value;
        document.body.appendChild(button);
    }

    get value() {
        return this._value;
    }

    set value(newVal) {
        this._value = newVal;
        this.render();
    }
}

const btn1 = new MyButton("Click me", "btn1");
btn1.show();

const btn2 = new MyButton("Press me", "btn2");
btn2.show();

const btn3 = new ColorButton("See more", "btn3", "btn3");
btn3.show();
btn3.value = "Learn more";
