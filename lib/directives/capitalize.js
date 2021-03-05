export const capitalize = {
    update: function (el, binding, vnode) {
        el.addEventListener('input', function (ev) {
            if (ev.target.value) {
                let value = ev.target.value;
                ev.target.value = value.charAt(0).toUpperCase() + value.slice(1);
                vnode.componentInstance.$emit('input', ev.target.value.charAt(0).toUpperCase() + value.slice(1));
            }
        });
    }
};
