class Actions {
    actions = {
        onGlobalStateChange: {},
        setGlobalState: {}
    };

    setActions(actions) {
        this.actions = actions;
    }

    onGlobalStateChange(...args) {
        if(typeof this.actions?.onGlobalStateChange==='function'){
            return this.actions?.onGlobalStateChange(...args);
        }
        return false
    }

    setGlobalState(...args) {
        return this?.actions?.setGlobalState(...args);
    }
}

const actions = new Actions();
export default actions;