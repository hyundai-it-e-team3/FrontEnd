<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-card-title>로그인</v-card-title>
      <v-divider/>
      <v-card-text>
          <v-text-field
        v-model="id"
        :counter="10"
        :rules="nameRules"
        label="ID"
        required
        ></v-text-field>

        <v-text-field
        v-model="password"
        :counter="10"
        :rules="nameRules"
        label="비밀번호"
        required
        ></v-text-field>

        <v-row
        class="justify-space-around mt-2"

        >
        <v-btn
            color="black"
            dark
            width=auto
        >로그인</v-btn>
        <img src="@/assets/images/kakao_login.png" height="38px"/>
        </v-row>
        
      </v-card-text>
    </v-card>  
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "login",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
        };
    },
    //컴포넌트 메소드 정의
    methods: {
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
