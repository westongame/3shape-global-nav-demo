/* eslint-disable indent, no-console */
import {
    LitElement,
    html
} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import navigationConfig from './navigationConfig.json';

import '../AppsMenu/AppsMenu.js';
import '../AccountMenu/AccountMenu.js';

import getIcon from '../../assets/icons.js';

import css from './Navigation-css.js';


class Navigation extends LitElement {
    static get properties() {
        return {
            token: { type: String },
            userName: { type: String },
            editProfileUrl: { type: String },
            logoutUrl: { type: String },
            activeMenu: { type: String }
        };
    }

    static get styles() {
        return css;
    }

    constructor() {
        super();

        this.activeMenu = null;
        this.navigation = navigationConfig;
    }

    firstUpdated() {
        if (!this.userName) {
            if (this.token) {
                const decodedToken = JSON.parse(window.atob(this.token.split('.')[1].replace('-', '+').replace('_', '/')));

                this.userName = `${decodedToken.firstName} ${decodedToken.lastName}`;
            } else {
                console.error('Navigation: userName or token is not specified');
            }
        }

        if (!this.editProfileUrl) {
            console.error('Navigation: editProfileUrl is not specified');
        }

        if (!this.logoutUrl) {
            console.error('Navigation: logoutUrl is not specified');
        }
    }

    onMenuClick(context) {
        this.activeMenu = context;
    }

    onMenuClose() {
        this.activeMenu = null;
    }

    renderNavigationMenu() {
        switch (this.activeMenu) {
            case 'apps':
                return html`<g-apps-menu></g-apps-menu>`;
            case 'account':
                return (html`
                    <g-account-menu
                        .userName="${this.userName}"
                        .editProfileUrl="${this.editProfileUrl}"
                        .logoutUrl="${this.logoutUrl}"
                    ></g-account-menu>
                `);
            default:
                return null;
        }
    }

    render() {
        return html`
            <div class="navigation">
                ${this.navigation.map((item) => (html`
                    <div
                        class="${classMap({
                            'navigation__icon-btn-wrap': true,
                            'navigation__icon-btn-wrap_state_active': this.activeMenu === item.name
                        })}"
                    >
                        <div
                            class="navigation__icon-btn"
                            title="${item.title}"
                            @click="${() => { this.onMenuClick(item.name); }}"
                        >
                            ${getIcon(item.icon)}
                        </div>
                    </div>
                `))}

                ${this.activeMenu ? html`
                    <div
                        class="navigation__menu-overlay"
                        @click="${this.onMenuClose}"
                    ></div>

                    <div class="navigation__menu">
                        ${this.renderNavigationMenu()}
                    </div>
                ` : null}
            </div>
        `;
    }
}

customElements.define('g-navigation', Navigation);
