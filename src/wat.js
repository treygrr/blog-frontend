let object = {
    string: 'like what',
    funny: function(messege) {
        this.string = messege;
        console.log(this.string);
    }
}

let object2 = {
    string: 'big what mood',
    funny: function() {
        return this.string
    }
}

object.funny(object2.funny());