function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    name
    time
    message
    constructor(name, message){
        this.name = name;
        this.time = gettime();
        this.message = message;
    }
    toString(){
        return (`${this.time} ${this.name}: ${this.message}`);
    }
}

class Messenger{
    mgArr = []

    send(name, text){
        this.mgArr.push(new Message(name, text));
    }
    show_history(){
        this.mgArr.forEach(message => {
            console.log(message.toString());
        })
    }
}
let person = new Messenger();
person.send('Medina', 'Zdraste');
person.send('Mehriban', 'Zdraste');
person.show_history();