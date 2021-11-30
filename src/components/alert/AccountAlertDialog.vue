<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
  <model-dialog-template>
    <template v-slot:header> 알림 </template>

    <template v-slot:body>
      <div v-if="loading" class="mt-3">
        <div class="spinner-border text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-if="!loading">{{ message }}</div>
    </template>

    <template v-slot:footer>
      <v-row class="d-flex justify-center">
        <v-btn class="btn btn-sm mr-2" text to="/member/account/password">결제비밀번호 등록</v-btn>
        <v-btn class="btn btn-sm" text @click="$emit('close')">닫기</v-btn>
      </v-row>
    </template>
  </model-dialog-template>
</template>

<script>
import ModelDialogTemplate from "@/components/alert/ModelDialogTemplate.vue";

export default {
  name: "AccountAlertDialog",
  components: {
    ModelDialogTemplate,
  },
  data: function () {
    return {};
  },
  methods: {},
  props: ["message", "loading"],
};
</script>

<style scoped></style>
