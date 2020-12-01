<template>
    <div>
        <h2>vue-google-charts</h2>
        <div>
            <GChart
                type="LineChart"
                :data="chartData"
                :options="chartOptions"
            />
            <GChart
                type="PieChart"
                :data="chartData"
                :options="chartOptions"
            />
        </div>
    </div>
</template>
<script>
import { GChart } from 'vue-google-charts'

export default {
    name: "GoogleChart",
    components: { GChart },
    data () {
        return {
            chartData: [
                ['Year', 'Sales', 'Expenses', 'Profit'],
                ['January', 40, 400, 200],
                ['February', 10, 460, 250],
                ['March', 20, 1120, 300],
            ],
            chartOptions: {
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                },
                curveType: 'function'
            }
        }
    }
}
</script>
