class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(){
        const data = document.getElementById("todo").value;
        this.todos.push(data);
        console.log(this.todos);
    }
    removeTodo(){
        if(this.todoos === ""){
                return false;
            }else{
                return this.todos;
            }
    }
    showTodoos(){
        return this.todoos;
    }
}

const Td = new TodoList();

document.getElementById('NovoTodo').onclick = function(){
    Td.addTodo();
}

const Aluno ={
    name: "Washington",
    idade: 27,
    empresa: "Rocketseat"
}

function Alunos({name,idade}){
    console.log(`Meu nome é ${name} eu tenho ${idade} anos de idade.`);
}

Alunos(Aluno);