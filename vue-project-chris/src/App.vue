<script setup></script>
<template>

  <!-- 導航列（header/navbar） -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'Home' }">
              首頁
              <!-- 實際上是a標籤 只是幫我們簡化  -->
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'About' }">
              關於偶們
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'Temperature' }">
              華氏轉攝氏
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link active" :to="{ name: 'Demo12' }">
              Demo12食物表
            </RouterLink>
          </li>

          <!-- <li class="nav-item">
            <RouterLink class="nav-link active" to="/bmi">BMI計算機</RouterLink>
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
          </li> -->
        </ul>

        <div>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Searchggggggg</button>
          </form>
        </div>
      </div>

    </div>
  </nav>

  <!-- <p>
    <RouterLink :to="{ name: 'Home' }">首頁666</RouterLink> 
    <RouterLink :to="{ name: 'About' }">關於666</RouterLink> 
    <RouterLink to="/bmi">BMI計算機666</RouterLink>
  </p> -->



  <!-- 頁面內容區 <router-view /> -->
  <router-view />


  <!-- 頁腳footer -->
  <footer class="text-center py-3 bg-light mt-4">
    <p>Chris | Taiwan | Exercise</p>
  </footer>
</template>



<style scoped></style>
