export default (await import('vue')).defineComponent({
    data() {
        return {
            messageVisible: false,
        };
    },
    methods: {
        showMessage() {
            this.messageVisible = true;
        }
    }
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['love-button'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), ...{ class: ("love-note") }, });
    if (!__VLS_ctx.messageVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.showMessage) }, ...{ class: ("love-button") }, });
    }
    if (__VLS_ctx.messageVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("message-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("material-icons heart") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("picture-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("@/assets/1515342933.svg"), alt: ("pic"), ...{ class: ("pic") }, });
    }
    __VLS_styleScopedClasses['love-note'];
    __VLS_styleScopedClasses['love-button'];
    __VLS_styleScopedClasses['message-container'];
    __VLS_styleScopedClasses['material-icons'];
    __VLS_styleScopedClasses['heart'];
    __VLS_styleScopedClasses['picture-container'];
    __VLS_styleScopedClasses['pic'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
