<template>
    <li>
        {{ todo.id }} / {{ todo.title }} / 
        <input type="checkbox" :checked="todo.isCheck">
        <!-- 부모로 받은 함수는 templete에서는 $emit()으로 script에서는 this.$emit()으로 사용. 
        첫번째 인자로는 부모로 받은 인자(@close)인 close를 사용하고 
        두번째 인자는 부모 컴포넌트의 함수의 첫번째 인자로 들어감. (close) -->
        <button @click="$emit('delete', todo.id)">삭제</button>
    </li>
</template>
<script>
export default {
    name: "TodoItem",
    props: {
        todo: Object,
        delete: Function
    }
}
</script>
<style scoped lang='scss'>
    li {
        display: block;
    }
</style>
