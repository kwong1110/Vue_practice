<template>
  <div class="start">
    <Title msg="시작하기 (기초)" />
    
    <h3>v-bind</h3>
    <div id="bind">
      <span v-bind:title="message">마우스를 올려보세요!</span>
    </div>

    <h3>v-if, v-else, v-else-if / v-on:click</h3>
    <div v-if="seen">보이지않게 하려면 버튼을 눌르세요</div>
    <div v-else>보이지 않는 상태 입니다.</div>
    <button v-on:click="view()">현재 상태 : {{seen}}</button>

    <h3>v-for</h3>
    <ul>
      <li :key="todo.id" v-for="todo in todos">
        {{ todo.id }}, {{ todo.title }}, {{ todo.isCheck }}
      </li>
    </ul>

    <h3>v-for의 index</h3>
    <ul>
      <li :key="todo.id" v-for="(todo, index) in todos">
        인덱스({{ index }}){{ todo.id }}, {{ todo.title }}, {{ todo.isCheck }}
      </li>
    </ul>

    <h3>v-on</h3>
    <div>
      DOM을 건드리지 않고 앱의 상태만을 업데이트
      <p>{{ message2 }}</p>
      <button @click="reverseMessage">메시지 뒤집기</button>
    </div>

    <h3>v-model</h3>
    <p>{{inputMsg}}</p>
    <input v-model="inputMsg">

    <h3>v-once</h3>
    <div>
      데이터 변경 시 업데이트 되지 않는 '일회성 보간' 수행 <br>
      같은 노드의 바인딩에도 영향을 미침으로 주의 <br>
      (위의 input을 변경해보면 여기의 '초기값'은 변하지 않는 것을 알 수 있다.)
      <p v-once>다시는 변경하지 않습니다 : {{ inputMsg }} </p>
    </div>

    <h3>v-html</h3>
    <div>
      원래의 text는 무시됨.
      <span v-html="rawHtml">그대로 출력</span>
    </div>

    <h3>v-bind:class</h3>
    <div>
      클래스 동적 토글
      <div class="static" v-bind:class="{ classActive: isActive }"></div>
      <button @click="activeBtn">{{ isActive }}</button>
    </div>
  </div>
</template>
<script>
import Title from "@/components/Title.vue";

let todos = [
  {
    title: '운동하기',
    isCheck: false,
    id: 1,
  },
  {
    title: 'JAVA',
    isCheck: false,
    id: 2,
  },
  {
    title: 'javascript',
    isCheck: false,
    id: 3,
  }
];

export default {
  name: "Start",
  components: {
    Title
  },
  data() {
    return {
      message: `이 페이지는 ${new Date()} 에 로드 되었습니다!!`,
      message2: `안녕하세요!ㅋ`,
      seen: true,
      todos: todos,
      inputMsg: "초기값",
      rawHtml: "<span style='color:red'>HTML 그대로 출력!</span>",
      isActive: true,
    }
  },
  methods: {
    view(){
      this.seen = !this.seen;
    },
    reverseMessage() {
      this.message2 = this.message2.split('').reverse().join('')
    },
    activeBtn(){
      this.isActive = !this.isActive;
    }
  }
};
</script>