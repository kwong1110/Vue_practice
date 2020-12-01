<template>
    <div>
        <h2>vue-chartjs</h2>
        <div>
            <line-chart
                :chartdata="chartdata"
                :options="options"/>
        </div>
        <div>
            <doughnut
                :chartdata="chartdata"
                :options="options"/>
        </div>
    </div>
</template>
<script>
import LineChart from '../components/LineChart'
import Doughnut from '../components/Doughnut'

export default {
    name: 'Chartjs',
    components: { LineChart, Doughnut },
    data: () => ({
        // loaded: false,
        chartdata: {
            labels: ['January', 'February', 'March'],
            datasets: [
                {
                    label: '판매량',
                    backgroundColor: ['#f87979', 'orange'],
                    data: [40, 10, 20]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        },
    }),
    // async mounted () {
    //     this.loaded = false
    //     try {
    //         const { userlist } = await fetch('/api/userlist')
    //         this.chartdata = userlist
    //         this.loaded = true
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }
}
</script>
