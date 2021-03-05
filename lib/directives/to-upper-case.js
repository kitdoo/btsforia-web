export const toUpperCase = {
    update: function (el, binding, vnode) {
        el.addEventListener('input', function (ev) {
            if (ev.target.value) {
                let value = ev.target.value;
                ev.target.value = value.toUpperCase();
                vnode.componentInstance.$emit('input', ev.target.value.toUpperCase())
            }
        });
    }
};