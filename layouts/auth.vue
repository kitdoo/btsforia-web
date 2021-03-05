<template>
  <div class="layout-auth--container">
    <Row>
      <Col :xs="0" :sm="0" :md="0" :xl="12" :lg="0" class="col-wrapper bg-black">
        <div class="welcome">
          <!--                    <img src="~/assets/images/logo-gw.png" alt="" style="height: 200px">-->
        </div>
      </Col>
      <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="12" class="col-wrapper">
        <nuxt/>
      </Col>
    </Row>
  </div>
</template>

<script>

export default {
  components: {},
}
</script>

<style lang="less">
@import '~assets/css/main';

.layout-auth--container {
  .col-wrapper {
    height: 100vh;
  }

  .welcome {
    padding: 0;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    height: 100vh;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
  }
}
</style>
