<template>
    <div>
        <form @submit="addNewTodo">
            <label for="newTodo">할 일 추가하기</label>
            <br>
            <input
                v-model="newTodoText"
                id="newTodo"
                placeholder="할 일을 입력해주세요.">
            <button>추가</button>
        </form>
        <ul>
            <TodoItem
                is="todoItem"
                v-for="(todo, index) in todos"
                :key="todo.id"
                :title="todo.title"
                @remove="todos.splice(index, 1)"
                :todo="todo"
            >                
            </TodoItem>
        </ul>
    </div>
</template>
<script>
import TodoItem from '../components/TodoItem.vue';

let todos = [
  {
    id: 1,
    title: '운동하기',
    isCheck: false,
  },
  {
    id: 2,
    title: 'JAVA',
    isCheck: false,
  },
  {
    id: 3,
    title: 'javascript',
    isCheck: false,
  }
];

export default {
    name: "TodoList",
    components: {
        TodoItem
    },
    data() {
        return {
            todos: todos,
        }
    },
    methods: {
        addNewTodo() {
            this.todos.push({
                id: this.todos.length + 2,
                title: this.newTodoText,
                isCheck: false,
            })
            this.newTodoText = '';
        }
    }
};
</script>
