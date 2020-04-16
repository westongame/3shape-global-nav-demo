import {
    LitElement,
    html
} from 'lit-element';

import getIcon from '../../assets/icons.js';

import css from './AccountMenu-css.js';


class AccountMenu extends LitElement {
    static get properties() {
        return {
            userName: { type: String },
            editProfileUrl: { type: String },
            logoutUrl: { type: String }
        };
    }

    static get styles() {
        return css;
    }

    render() {
        return html`
            <div class="account-menu">
                <div class="account-menu__title-container">
                    <div class="account-menu__title">
                        Profile
                    </div>
                </div>
                <div class="account-menu__container">
                    <div class="account-menu__avatar">
                        ${getIcon('placeholder')}
                    </div>

                    <div class="account-menu__username">
                        ${this.userName}
                    </div>
                </div>
                <div class="account-menu__bottom-container">
                    <a
                        class="account-menu__link"
                        href="${this.editProfileUrl}"
                    >
                        <span class="account-menu__link-icon">
                            ${getIcon('user')}
                        </span>

                        Edit profile
                    </a>

                    <a
                        class="account-menu__link"
                        href="${this.logoutUrl}"
                    >
                        <span class="account-menu__link-icon">
                            ${getIcon('logout')}
                        </span>

                        Log out
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('g-account-menu', AccountMenu);
