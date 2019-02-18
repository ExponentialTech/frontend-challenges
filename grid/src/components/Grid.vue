<template>
  <div>
    <div class="title">Impact Assessment Data</div>
    <div class="headers">
      <div class="header" v-for="(header, key) in headers" :key="key" @click="sort(header, key)">
        {{header}}
        <div v-if="selected === key" class="triangle">
          &#9660;
        </div>
      </div>
    </div>
    <div class="companies">
      <div class="company"  v-for="(company, key) in companies" :key="key">
        <div class="item name">
          {{company["Company Name"]}}
        </div>
        <div class="item ISIN">
            {{company["ISIN"]}}
        </div>
        <div class="item total-revenue">
            {{company["Total Revenue"]}}
        </div>
        <div class="item market-cap">
            {{company["Company Market Cap"]}}
        </div>
        <div class="item women">
          <div class="item manager">
              {{company["Women Managers"]}}
          </div>
          <div class="item employees">
              {{company["Women Employees"]}}
          </div>
        </div>
        <div class="item co2-scope-1-2">
          <div class="item adjusted">
            {{company["CO2 Scope 1 & 2 Adjusted"]}}
          </div>
          <div class="item revenue-adjusted">
              {{company["CO2 Scope 1 & 2 Revenue Adjusted"]}}
          </div>
        </div>
        <div class="item co2-scope-3">
            <div class="item adjusted">
              {{company["CO2 Scope 3 Adjusted"]}}
            </div>
            <div class="item revenue-adjusted">
                {{company["CO2 Scope 3 Revenue Adjusted"]}}
            </div>
        </div>
        <div class="item esg-score">
          <div class="item percent">
            {{company["ESG Score"]}}
          </div>
          <div class="item">
            <div class="chart" :style="{
              background: getColor(key),
              width: company['ESG Score'] + 'px'
            }" />
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import _sortBy from 'lodash/sortBy';
import json from '@/components/data.json';

@Component
export default class Grid extends Vue {
  public selected: number = -1;
  public data = json;

  get headers(): string[] {
    return Object.keys(this.companies[0]);
  }

  get companies(): any {
    return this.data;
  }

  public sort(header: string, key: number) {
    this.selected = key;
    this.data = _sortBy(this.data, [(company) => {
      if (parseFloat(company[`${header}`])) {
        return parseFloat(company[`${header}`]);
      } else if (company[`${header}`][0] === '$') {
        return parseFloat(company[`${header}`].substring(1));
      } else {
        return company[`${header}`];
      }
    }]);
  }

  public getColor(key: number) {
    const num = key % 4;
    const background = '';

    switch (num) {
      case 0:
        return 'rgba(0,27,66,0.81)';
      case 1:
        return 'rgba(0,27,66,0.5)';
      case 2:
        return 'rgba(0,27,66,0.75)';
      case 3:
        return 'rgba(0,27,66,0.89)';
    }
  }
}
</script>

<style lang="scss">
  @import '@/scss/mixins.scss';

  .title {
    @include font;
    font-size: 18px;
    text-align: center;
  }

  .headers {
    display: flex;
    padding-bottom: 5px;
    user-select: none;
  }

  .header {
    @include font;
    text-align: left;
    text-transform: uppercase;
    font-size: 11px;
    border-bottom: 1.5px solid;
    display: flex;
    margin: 0px 5px;
    width: 100px;
  }

  .company {
    display: flex;
    @include font;
    font-size: 11px;
    border-bottom: 1px solid #BABABA;
  }

  .item {
    flex: 1 1 auto;
    text-align: left;
    width: 100px;
  }

  .women {
    display: flex;
  }

  .co2-scope-1-2 {
    display: flex;
  }

  .co2-scope-3 {
    display: flex;
  }

  .esg-score {
    display: flex;
    align-items: center;
  }

  .chart {
    width: 81px;
    height: 19px;
  }
  </style>
  