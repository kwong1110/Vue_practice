<template>
    <div>
        <form @submit.prevent="addNewTodo">
            <label for="newTodo">할 일 추가하기</label>
            <br>
            <input
                type="text"
                v-model="newTodoText"
                id="newTodo"
                placeholder="할 일을 입력해주세요.">
            <button>추가</button>
        </form>
        <!-- 함수의 경우 @넘길함수이름="정의한 함수 이름" 을 통해 자식에게 부모 함수를 넘깁니다. -->
        <ul>
            <TodoItem
                is="todoItem"
                v-for="(todo) in todos"
                :key="todo.id"
                :title="todo.title"
                :todo="todo"
                @delete="deleteTodo"
            >                
            </TodoItem>
        </ul>
    </div>
</template>
<script>
import TodoItem from '../components/TodoItem';

let todos = [
  {
    id: 1,
    title: '운동하기',
    isCheck: true,
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
            todos: todos, nextTodoId: 4,
            newTodoText: '',
        }
    },
    methods: {
        addNewTodo() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText,
                isCheck: false,
            })
            this.newTodoText = '';
        },
        deleteTodo(id) {
            const clicked = todos.filter((todo)=> todo.id == id)[0];
            const index = todos.indexOf(clicked);
            todos.splice(index, 1);
        }
    }    
};
</script>
