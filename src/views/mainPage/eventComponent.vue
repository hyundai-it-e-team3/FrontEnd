<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card
    flat
    tile
    width="100%"
  >
    <v-window
      v-model="onboarding"
      reverse
    >
      <v-window-item>
        <v-card
          color="grey"
          width="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-img src="@/assets/images/live.jpg" width="100%" dark class="justify-end">
                <h1>LIVE OPEN 기념 SALE</h1>
            </v-img>
          </v-row>
        </v-card>
      </v-window-item>
      <v-window-item>
        <v-card
          color="grey"
          width="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-img src="@/assets/images/man.jpg" width="100%" dark>
                한섬 브랜드 WEEK
            </v-img>
          </v-row>
        </v-card>
      </v-window-item>
      <v-window-item>
        <v-card
          color="grey"
          width="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-img src="@/assets/images/sale.jpg" width="100%">
                한섬 SALE WEEK
            </v-img>
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>
    

    <v-card-actions class="justify-space-between">
      <v-btn
        text
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot="{ active, toggle }"
        >
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn
        text
        @click="next"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card> 
</template>

<script>
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "eventComponent",
    //추가하고 싶은 컴포넌트 등록
    components: {
    },
    //컴포넌트 데이터 정의
    data: function() {
        return {
            length: 3,
            onboarding: 0,
        };
    },
    //컴포넌트 메소드 정의
    methods: {
        next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
        },
        prev () {
            this.onboarding = this.onboarding - 1 < 0
            ? this.length - 1
            : this.onboarding - 1
        },
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
</style>