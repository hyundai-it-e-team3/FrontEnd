<!-- 컴포넌트 UI 정의, root element가 하나만 존재해야한다 -->
<template>
    <v-card>
      <v-card-title></v-card-title>
      <v-card-subtitle></v-card-subtitle>
      <v-divider/>
      <product-component/>

    <v-expansion-panels flat>
        <v-expansion-panel>
            <v-expansion-panel-header>
                쿠폰 선택
            </v-expansion-panel-header>
            <v-expansion-panel-content>

            <v-card width="100%" flat>
                <v-divider></v-divider>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                    >
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >

                        <v-list-item-content>
                        <v-row>
                            <v-col cols="8" v-text="item.text"></v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="4" class="text-right" v-text="item.rate"></v-col>
                        </v-row>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>

            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>




     <v-expansion-panels flat>
        <v-expansion-panel>
            <v-expansion-panel-header>
                포인트 사용
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                    <v-col cols="8">
                        <v-text-field
                            label="Point"
                        ></v-text-field> 
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="4" class="text-right d-flex align-center">
                        <v-btn
                        color="black" dark
                        >적용</v-btn>
                    </v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>



      <v-expansion-panels accordion flat>
        <v-expansion-panel>
            <v-expansion-panel-header>
                주문자 정보
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row height="50px">
                <v-col cols="4">아이디</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">kjw12344</v-col>
                </v-row>
                <v-row height="50px">
                <v-col cols="4" class="d-flex align-center">이름</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right"><v-text-field :rules="rules" label="Name" value="김정우"></v-text-field></v-col>
                </v-row>

                <v-row height="50px">
                <v-col cols="4" class="d-flex align-center" >전화번호</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">        
                    <v-text-field
                    label="Phone Number"
                    required
                    value="010-1234-5678"
                    ></v-text-field>
                </v-col>
                </v-row>

                <v-row height="50px">
                <v-col cols="4">등급</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">Lv.4</v-col>
                </v-row>
                <v-row height="50px">
                <v-col cols="4">포인트</v-col>
                <v-spacer></v-spacer>
                <v-col cols="8" class="text-right">30,000P</v-col>
                </v-row>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>


    <v-expansion-panels flat>
        <v-expansion-panel>
            <v-expansion-panel-header>
                배송지 정보
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                    <v-col cols="4" class="d-flex align-center">받으시는 분</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right"><v-text-field :rules="rules" label="Name" value="김정우"></v-text-field></v-col>
                </v-row>
                <v-row>
                    <v-col cols="4" class="d-flex align-center">연락처</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8" class="text-right">        
                        <v-text-field
                        label="Phone Number"
                        required
                        value="010-1234-5678"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4" class="d-flex align-center">배송지</v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="8">
                        <div>
                            <v-text-field
                            label="우편번호" value="67639"
                            ></v-text-field>        
                            <v-text-field
                            label="주소"
                            value="서울시 송파구 가락동"
                            ></v-text-field>
                            <v-text-field label="상세주소" value="12-xx 1xx호"></v-text-field>
                        </div>
                    </v-col>
                </v-row>

            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    
    
   

    </v-card>  
</template>

<script>
import ProductComponent from './ProductComponent.vue';
export default {
    //컴포넌트의 대표이름 (devtools에 나오는 이름)
    name: "complete",
    //추가하고 싶은 컴포넌트 등록
    components: {
        ProductComponent
    },
    //컴포넌트 데이터 정의
    data:()=> ({
        rules: [
            value => !!value || 'Required.',
            value => (value || '').length <= 20 || 'Max 20 characters',
            value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
            },
        ],
        selectedItem: 0,
        items: [
        { text: '신규회원가입 환영쿠폰', rate: '5%' },
        { text: '추석 이벤트 쿠폰', rate: '3,000₩' },
        { text: '설날 이벤트 쿠폰', rate: '5,500₩' },
        { text: '생일 쿠폰', rate: '15%' }
        ],
    }),
    //컴포넌트 메소드 정의
    methods: {
    },
    mounted(){
        this.$store.commit("setPageFlag",'order');
    }
}
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>