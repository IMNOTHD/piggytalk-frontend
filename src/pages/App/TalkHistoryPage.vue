<template>
  <el-container style="height: 100%">
    <el-main>
      <!--    {{ $route.params.id }}-->
      <a-list item-layout="horizontal" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta
              :description="`${item.nickname}    ${item.time}`">
            <a slot="title" href="https://www.antdv.com/">{{ item.message }}</a>
            <a-avatar
                slot="avatar"
                :src="item.avatar"/>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </el-main>
    <el-footer>
      <v-text-field
          dense
          flat
          hide-details
          rounded
          solo
          solo-inverted
          prepend-icon="mdi-emoticon"
          append-outer-icon="mdi-send"
          @click:append-outer="appendIconCallback"
          v-model="msg"
      ></v-text-field>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "TalkHistoryPage",
  data() {
    return {
      data: [],
      msg: "",
    };
  },
  mounted() {
    if (this.$route.params.id === "8f52b66f-f1fd-4f05-ba0a-7488ebdb8b21") {
      this.data = [
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/05/ac7b85b48f79.jpg',
          message: '123123',
          time: '2022-05-04 23:06:08',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/16/6293136ade3d.jpg',
          message: 'Hello!',
          time: '2022-05-04 21:36:08',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/05/ac7b85b48f79.jpg',
          message: 'not bad',
          time: '2022-05-04 18:42:48',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/16/6293136ade3d.jpg',
          message: 'hello, world',
          time: '2022-05-04 18:42:01',
          nickname: '噫',
        },
      ]
    } else {
      this.data = [
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/05/ac7b85b48f79.jpg',
          message: 'hello',
          time: '2022-05-12 23:03:51',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/05/ac7b85b48f79.jpg',
          message: '123123',
          time: '2022-05-04 23:06:08',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/16/6293136ade3d.jpg',
          message: 'Hello!',
          time: '2022-05-04 21:36:08',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/05/ac7b85b48f79.jpg',
          message: 'not bad',
          time: '2022-05-04 18:42:48',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/16/6293136ade3d.jpg',
          message: 'hello, world',
          time: '2022-05-04 18:42:01',
          nickname: '噫',
        },
      ]
    }
  },
  methods: {
    appendIconCallback() {
      this.msg = ""
      this.data = [
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/05/ac7b85b48f79.jpg',
          message: 'hello',
          time: '2022-05-12 23:03:51',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/05/ac7b85b48f79.jpg',
          message: '123123',
          time: '2022-05-04 23:06:08',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/16/6293136ade3d.jpg',
          message: 'Hello!',
          time: '2022-05-04 21:36:08',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/05/ac7b85b48f79.jpg',
          message: 'not bad',
          time: '2022-05-04 18:42:48',
          nickname: '噫',
        },
        {
          avatar: 'https://i.impiggy.cn/images/2022/04/16/6293136ade3d.jpg',
          message: 'hello, world',
          time: '2022-05-04 18:42:01',
          nickname: '噫',
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
