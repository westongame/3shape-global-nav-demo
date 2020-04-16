/* eslint-disable indent, no-console */
import {
    LitElement,
    html
} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

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

    render() {
        return html`
            <div class="navigation">
                <div
                    class="${classMap({
                        'navigation__icon-btn-wrap': true,
                        'navigation__icon-btn-wrap_state_active': this.activeMenu === 'apps'
                    })}"
                >
                    <div
                        class="navigation__icon-btn"
                        title="Apps"
                        @click="${() => { this.onMenuClick('apps'); }}"
                    >
                        ${getIcon('apps')}
                    </div>
                </div>

                <div
                    class="${classMap({
                        'navigation__icon-btn-wrap': true,
                        'navigation__icon-btn-wrap_state_active': this.activeMenu === 'account'
                    })}"
                >
                    <div
                        class="navigation__icon-btn"
                        title="Profile"
                        @click="${() => { this.onMenuClick('account'); }}"
                    >
                        ${getIcon('account')}
                    </div>
                </div>

                ${this.activeMenu ? html`
                    <div
                        class="navigation__menu-overlay"
                        @click="${this.onMenuClose}"
                    ></div>

                    <div class="navigation__menu">
                        ${this.activeMenu === 'apps' ? html`<g-apps-menu></g-apps-menu>` : null}

                        ${this.activeMenu === 'account' ? html`
                            <g-account-menu
                                .userName="${this.userName}"
                                .editProfileUrl="${this.editProfileUrl}"
                                .logoutUrl="${this.logoutUrl}"
                            ></g-account-menu>
                        ` : null}
                    </div>
                ` : null}
            </div>
        `;
    }
}

customElements.define('g-navigation', Navigation);
