<script setup>

import HelloVue from './components/HelloVue.vue';
import Demo8 from './components/demo/Demo8.vue';
import BMIView from './views/BMIView.vue';
import TemperatureView from './views/TemperatureView.vue';

</script>

<template>
  <!-- <h1>Hello APP</h1> -->

  <!-- 四種寫法，建議大寫寫法，尤其第二種 -->
  <!-- <>裡對應import XXX名稱 -->
  <!-- <HelloVue></HelloVue> -->
  <!-- <HelloVue /> -->
  <!-- <hello-vue></hello-vue> -->
  <!-- <hello-vue /> -->

  <!-- <Demo8></Demo8> -->
  <!-- <BMIView></BMIView> -->
  <!-- <TemperatureView></TemperatureView> -->

  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'Home' }">首頁</RouterLink>
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'About' }">關於</RouterLink>
            <!-- <a class="nav-link" href="#">Link</a> -->
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/bmi">BMI計算機</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'Temperature' }">華氏轉攝氏</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'Demo' }">DEMO</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'StudentScore' }">學生成績單</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'ToDoList' }">待辦清單</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'Lifecycle' }">生命週期</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'DemoList' }">DemoList</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'Parent' }">Parent</RouterLink>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

      </div>

    </div>
  </nav>

  <!-- <p>
    <RouterLink :to="{ name: 'Home' }">首頁666</RouterLink> |
    <RouterLink :to="{ name: 'About' }">關於666</RouterLink> |
    <RouterLink to="/bmi">BMI計算機666</RouterLink> |
  </p> -->
  <hr>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.container {
  margin: 3px;
}
</style>
