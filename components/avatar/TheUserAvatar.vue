<template>
  <div class="user-avatar--container">
    <Dropdown placement="bottom-start"
              trigger="click"
              @on-click="$_onClickDropdown">
      <Avatar class="avatar-image"
              icon="ios-person"/>
      <span class="user-name">Руби</span>
      <Icon type="md-arrow-dropdown"/>
      <DropdownMenu slot="list">
        <DropdownItem name="profile">
          <font-awesome-icon far icon="user-alt"/>
          <span>{{ $t('users-avatar.drop-down-item.my-profile') }}</span>
        </DropdownItem>
        <DropdownItem name="logout">
          <font-awesome-icon far icon="sign-out-alt"/>
          <span>{{ $t('users-avatar.drop-down-item.exit') }}</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<style lang="less">
@import '~assets/css/main.less';

.user-avatar--container {
  display: flex;
  width: auto;
  justify-content: flex-end;

  .ivu-avatar {
    background: none;
    width: 25px;
    border-radius: unset;
  }

  .user-name {
    color: white;
  }

  .ivu-dropdown {
    .ivu-dropdown-rel {
      .ivu-icon-md-arrow-dropdown:before {
        color: white;
      }
    }

    .ivu-dropdown-item {
      span {
        margin-left: 5px;
      }

      path {
        fill: @color-purple-fade;
      }

      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }

  .ivu-select-dropdown {
    right: 50px !important;
    left: auto !important;
  }
}
</style>

<script>
export default {
  name: 'user-avatar',
  methods: {
    $_onClickDropdown(name) {

    }
  }
};
</script>

<i18n src="./TheUsersAvatarLang.json"/>
