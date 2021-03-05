export const toLowCase = {
    update: function (el, binding, vnode) {
        el.addEventListener('input', function (ev) {
            if (ev.target.value) {
                let value = ev.target.value;
                ev.target.value = value.toLowerCase();
                vnode.componentInstance.$emit('input', ev.target.value.toLowerCase());
            }
        });
    }
};