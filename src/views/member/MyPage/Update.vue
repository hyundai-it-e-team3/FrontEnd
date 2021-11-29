<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>

    <v-card
     height="auto">
        <v-card-title>회원 정보 수정</v-card-title>
        <v-divider/>
        <v-card-text>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    ma-2
  >
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

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="이름"
      required
    ></v-text-field>

    

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="tel"
      :counter="10"
      :rules="nameRules"
      label="휴대전화"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="이름"
      required
    ></v-text-field>

    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
            v-model="date"
            label="생년월일"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            ></v-text-field>
        </template>
        <v-date-picker
            v-model="date"
            :active-picker.sync="activePicker"
            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
        ></v-date-picker>
      </v-menu>

    <v-text-field
      v-model="address"
      :counter="10"
      :rules="nameRules"
      label="배송지 주소"
      required
    ></v-text-field>

    <v-text-field
      v-model="account"
      :counter="10"
      :rules="nameRules"
      label="계좌번호"
      required
    ></v-text-field>


    <v-divider/>
    <v-row
    justify="center"
    >
    <v-btn
        x-large
        depressed
        tile
        color=white
    >취소</v-btn>
    <v-btn
        x-large
        depressed
        tile
        color=primary
    >회원정보수정</v-btn>
    </v-row>
  </v-form>

      </v-card-text>
    </v-card>  
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "join",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            activePicker: null,
            date: null,
            menu: false,
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        save (date) {
        this.$refs.menu.save(date)
      },
    },
    watch: {
        menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>