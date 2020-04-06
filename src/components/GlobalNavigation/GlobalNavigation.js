import ProductsMenu from '../ProductsMenu/ProductsMenu.vue';
import AccountMenu from '../AccountMenu/AccountMenu.vue';


export default {
    name: 'GlobalNav',

    props: {
        token: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            default: null
        }
    },

    components: {
        ProductsMenu,
        AccountMenu
    },

    data() {
        return {
            activeMenu: null
        };
    },

    methods: {
        onNavItemClick(context) {
            this.activeMenu = context;
        },

        onMenuClose() {
            this.activeMenu = null;
        }
    }
};
