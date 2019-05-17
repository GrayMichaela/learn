<template>
    <van-row>
        <van-col span="24">
            <van-search placeholder="请输入搜索关键词" v-model="keyWord" />
        </van-col>
        <van-col span="24" v-if="images.length>0">
            <van-swipe :autoplay="1500" indicator-color="white">
                <van-swipe-item v-for="item in images" :key="item">
                    <img class="img" v-lazy="item">
                </van-swipe-item>
            </van-swipe>
        </van-col>
        <van-col span="24" v-if="images.length>0">
            <van-notice-bar mode="closeable" :text="noticeMsg"></van-notice-bar>
        </van-col>
        <van-col span="24">
            <van-pull-refresh :value="index.loading" @refresh="refreshList">
                <van-list :value="index.loading" :finished="index.done" finished-text="我已经没有什么可以给你了"
                    @load="refreshList">
                    <van-cell v-for="item in index.list" :key="item.id" :title="item.name" :value="item.typeName"
                        :label="item.grade" />
                </van-list>
            </van-pull-refresh>
        </van-col>
    </van-row>
</template>
<script>
    export default {
        data() {
            return {
                keyWord: "",
                loading: false,
                images: [],
                noticeMsg: ""
            };
        },
        computed: {
            index() {
                return this.$store.state;
            }
        },
        mounted() {
            this.pushData();
        },
        destroyed() {
            this.$store.commit("resetQuery");
        },
        methods: {
            refreshList() {
                this.getUserList({
                    pageIndex: 1
                });
            },
            loadMore() {
                this.getUserList({
                    pageIndex: this.index.query.pageIndex + 1
                });
            },
            getUserList(query) {
                this.$store
                    .dispatch("getUserList", {
                        ...this.index.query,
                        ...query
                    })
                    .catch(msg =>
                        this.$toast({
                            type: "fail",
                            message: msg,
                            duration: 1000
                        })
                    );
            },
            pushData() {
                setTimeout(() => {
                    this.images.push(
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556908452339&di=1af2c483cd4fa6537201a2007545991c&imgtype=0&src=http%3A%2F%2Fimg2.a0bi.com%2Fupload%2Fttq%2F20140730%2F1406719313412.jpg",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556908469499&di=69e932e0d97b118cbe00d3bb8e81b6db&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201309%2F09%2F20130909004300_3iZSN.jpeg",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556908487780&di=637e541acd1faeee60a9d58b99509bd1&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F738b4710b912c8fc7177d2c5fa039245d6882135.jpg"
                    );
                }, 1000);
                setTimeout(() => {
                    this.noticeMsg =
                        "有天我睡醒看到我的身边没有你,在我的右边是你曾经喜欢的玩具,可当我站起身来在房间里寻找你,留下的只有带着你味道的一封信";
                }, 1000);
            },
            what() {
                this.$store
                    .dispatch("list", {
                        pageIndex: 1
                    })
                    .then(res => {
                        this.res = res;
                    });
            }
        }
    };
</script>
<style lang="less" scoped>
    .img {
        width: 100%;
        height: 100%;
    }
</style>