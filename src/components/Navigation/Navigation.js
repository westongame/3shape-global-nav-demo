/* eslint-disable indent */
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

        this.buttons = [
            {
                name: 'apps',
                icon: 'apps',
                title: 'Apps'
            }, {
                name: 'account',
                icon: 'account',
                title: 'Account'
            }
        ];
        this.activeMenu = null;
    }

    firstUpdated() {
        if (!this.userName) {
            if (this.token) {
                const decodedToken = JSON.parse(window.atob(this.token.split('.')[1].replace('-', '+').replace('_', '/')));

                this.userName = `${decodedToken.firstName} ${decodedToken.lastName}`;
            } else {
                throw new Error('Navigation: userName or token is not specified');
            }
        }

        if (!this.editProfileUrl) {
            throw new Error('Navigation: editProfileUrl is not specified');
        }

        if (!this.logoutUrl) {
            throw new Error('Navigation: logoutUrl is not specified');
        }
    }

    onMenuClick(context) {
        if (context !== this.activeMenu) {
            this.activeMenu = context;
        } else {
            this.onMenuClose();
        }
    }

    onMenuClose() {
        this.activeMenu = null;
    }

    renderMenu() {
        if (this.activeMenu === 'apps') {
            return html`<g-apps-menu></g-apps-menu>`;
        }

        if (this.activeMenu === 'account') {
            return html`
                <g-account-menu
                    .userName="${this.userName}"
                    .editProfileUrl="${this.editProfileUrl}"
                    .logoutUrl="${this.logoutUrl}"
                ></g-account-menu>
            `;
        }

        return null;
    }

    render() {
        return html`
            <div class="navigation">
                ${this.buttons.map((button) => (html`
                    <div
                        class="${classMap({
                            'navigation__icon-btn-wrap': true,
                            'navigation__icon-btn-wrap_state_active': this.activeMenu === button.name
                        })}"
                    >
                        <div
                            class="navigation__icon-btn"
                            title="${button.title}"
                            @click="${() => { this.onMenuClick(button.name); }}"
                        >
                            ${getIcon(button.icon)}
                        </div>
                    </div>
                `))}

                ${this.activeMenu ? html`
                    <div
                        class="navigation__menu-overlay"
                        @click="${this.onMenuClose}"
                    ></div>

                    <div class="navigation__menu">
                        ${this.renderMenu()}
                    </div>
                ` : null}
            </div>
        `;
    }
}

customElements.define('g-navigation', Navigation);
