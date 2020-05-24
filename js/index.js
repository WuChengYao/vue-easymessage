var vm = new Vue({
    el: '#all',
    data: {
        myData: [],
        username: '',
        usercontainer: '',
        nowIndex: -100,
        chDel: '', //要做全部刪除的預留key
    },
    methods: {
        add: function () { //將v-modal資料上傳至myData
            this.myData.push({
                tablename: this.username,
                tablecontainer: this.usercontainer,

            });
            //v-modal資料上傳清空欄位
            this.username = '';
            this.usercontainer = '';
        },
        deltablecontainer: function (n) {
            //
            // this.myData.splice(n,1);
            if (n == -2) {
                this.myData = [];
            } else {
                this.myData.splice(n, 1);
            }
        }
    }
})