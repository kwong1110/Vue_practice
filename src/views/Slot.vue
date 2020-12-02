<template>
    <div id="app">
        <children-test :type="'rawhtml'" :title="'Raw HTML code'" :code="htmlcode"></children-test>
        <children-test :type="'html'" :title="'HTML code'" :code="htmlcode"></children-test>
        <children-test :type="'js'" :title="'JavaScript code'" :code="jscode"></children-test>
        <children-test :type="'php'" :title="'PHP code'" :code="phpcode"></children-test>
        
        <hr />
        <br />

        <children-test :title="'Raw HTML code'" :type="'rawhtml'" :code="htmlcode">
            <template slot="titleSlot" slot-scope="props">
                <h3 class="title">{{ props.title }}</h3>
            </template>
            <template slot="codeSlot" slot-scope="props">
                <pre>{{ props.code }}</pre>        
            </template>
        </children-test>
    </div>
</template>
<script>
import { ChildrenTest } from '../components';

export default {
    name: 'SlotTest',
    components: { ChildrenTest },
    data: function () {
        return {
            htmlcode: "html code !",
            phpcode: "php code !",
            jscode: "js code !"
        }
    }
}
</script>