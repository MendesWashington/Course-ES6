"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  }

  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      var data = document.getElementById("todo").value;
      this.todos.push(data);
      console.log(this.todos);
    }
  }, {
    key: "removeTodo",
    value: function removeTodo() {
      if (this.todoos === "") {
        return false;
      } else {
        return this.todos;
      }
    }
  }, {
    key: "showTodoos",
    value: function showTodoos() {
      return this.todoos;
    }
  }]);

  return TodoList;
}();

var Td = new TodoList();

document.getElementById('NovoTodo').onclick = function () {
  Td.addTodo();
};
