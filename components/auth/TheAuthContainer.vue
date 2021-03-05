<template>
  <div class="auth-container--container">
    <div class="auth-wrapper">
      <div class="header">
        <Row>
          <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="0" :xxl="0">
            <!--                        <img src="~/assets/images/logo-gb.png" alt="" style="height: 60px" class="mb30" >-->
          </Col>
        </Row>
        <h1>
          <slot name="title"></slot>
        </h1>
      </div>
      <slot name="form"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'auth-container',
}
</script>

<style lang="less">
div.auth-container--container {
  padding: 0;
  width: 100%;
  align-items: center;
  height: 100vh;
  display: flex;
  justify-content: center;

  div.auth-wrapper {
    padding: 10px;
    width: 500px;
    margin-left: 15px;
    margin-right: 15px;

    div.header {
      width: 100%;
      height: auto;

      h1 {
        font-size: 2rem;
      }
    }
  }
}
</style>
