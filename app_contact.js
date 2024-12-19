const app = Vue.createApp({
    data() {
        return {
            name: '',
            message: '',
            submitted: false,
            thankYouMessage: '感谢你的留言！',
            messages: [] // 用于存储留言的数组
        };
    },
    methods: {
        submitForm() {
            // 把当前的留言添加到留言数组中
            this.messages.push({ name: this.name, message: this.message });
            this.submitted = true;

            // 清空输入框
            this.name = '';
            this.message = '';
        }
    }
});

app.mount('#app');
