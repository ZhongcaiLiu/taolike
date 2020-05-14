import Vue from 'vue'
import MessageBox from './MessageBox'
import Confirm from './Confirm'

export const messageBox = (function () {

    let defaults = {
        content: ''
    };
    return function (opts) {
        for (let attr in opts) {
            defaults[attr] = opts[attr];
        }
        let Mycomponent = Vue.extend(MessageBox);
        let vm = new Mycomponent({
            el: document.createElement('div'),
            data() {
                return {
                    content:defaults.content
                }
            }
        })
        document.body.appendChild(vm.$el)
        setTimeout(() => {
            document.body.removeChild(vm.$el)
        }, 2000);
    }
})();

export const confirm = (function () {
    let defaults = {
        title: '',
        cancel: '',
        ok: '',
        handelcancel: null,
        handelok: null
    }
    return function (opts) {
        for (let attr in opts) {
            defaults[attr] = opts[attr];
        }
        let Mycomponent = Vue.extend(Confirm);
        let vm = new Mycomponent({
            el: document.createElement('div'),
            data() {
                return {
                    title: defaults.title,
                    cancel: defaults.cancel,
                    ok:defaults.ok,
                }
            },
            methods: {
                handelcancel() {
                    defaults.handelcancel && defaults.handelcancel.call(this);
                    document.body.removeChild(vm.$el)
                },
                handelok() {
                    defaults.handelok && defaults.handelok.call(this);
                    document.body.removeChild(vm.$el)
                }
            }
        })
        document.body.appendChild(vm.$el);
    }
})();