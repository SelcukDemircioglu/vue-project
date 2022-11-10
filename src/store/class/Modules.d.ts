import { VueElement } from 'vue';
import { ActionTree, CustomVue, GetterTree, Module, ModuleTree, MutationTree } from 'vuex'

 
export declare class Modules {
    namespaced?: boolean;
    state?: any | (() => any);
    getters?: GetterTree<any, any>;
    actions?: ActionTree<any, any>;
    mutations?: MutationTree<any>;
    modules?: ModuleTree<any>;
}