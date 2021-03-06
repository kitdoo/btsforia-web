<template>
  <div class="container">
    <div class="documents-page">
      <h1 class="page-title">
        {{ $t('documents-page.title') }}
      </h1>
      <p class="page-sub-title">
        {{ $t('documents-page.description') }}
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

<i18n src="./DocumentsPageLang.json"/>
