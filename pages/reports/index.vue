<template>
  <div class="container">
    <div class="reports-page">
      <h1 class="page-title">
        {{ $t('reports-page.title') }}
      </h1>
      <p class="page-sub-title">
        {{ $t('reports-page.description') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style lang="less">
</style>

<i18n src="./ReportsPageLang.json"/>
