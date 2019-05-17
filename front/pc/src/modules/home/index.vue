<style lang="less" scoped>
  @import url('./index.less');
</style>

<template>
  <div class="sdiv">
    <v-chart :loading="loading" :config="bar" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        x: [],
        y: [],
        loading: false,
      }
    },
    computed: {
      bar() {
        return {
          grid: {
            top: '1%',
            right: '1%',
            left: '1%',
            bottom: '1%',
            containLabel: true
          },
          title: {
            text: 'test',
            subtext: 'qqn',
            show: false
          },
          legen: {
            show: true,
            top: '5%'
          },
          tooltip: {},
          dataset: {
            // 提供一份数据。
            dimensions: this.x,
            source: this.y
          },
          // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
          xAxis: {},
          // 声明一个 Y 轴，数值轴。
          yAxis: {
            type: 'category'
          },
          // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
          series: [{
              type: 'bar'
            },
            {
              type: 'bar'
            },
            {
              type: 'bar'
            }
          ]
        }
      }
    },
    mounted() {
      this.loading = true;
      setTimeout(() => {
        this.x.push('product', '2015', '2016');
        this.y.push({
          product: 'Matcha Latte',
          '2015': 43.3,
          '2016': 85.8,
          '2017': 93.7
        }, {
          product: 'Milk Tea',
          '2015': 83.1,
          '2016': 73.4,
          '2017': 55.1
        }, {
          product: 'Cheese Cocoa',
          '2015': 86.4,
          '2016': 65.2,
          '2017': 82.5
        }, {
          product: 'Walnut Brownie',
          '2015': 72.4,
          '2016': 53.9,
          '2017': 39.1
        });
        this.loading = false;
      }, 1100);
    },
  }
</script>