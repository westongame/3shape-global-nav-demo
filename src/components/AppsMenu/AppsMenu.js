import {
    LitElement,
    html
} from 'lit-element';

import appsConfig from './appsConfig.json';

import getIcon from '../../assets/icons.js';

import css from './AppsMenu-css.js';


class AppsMenu extends LitElement {
    static get styles() {
        return css;
    }

    constructor() {
        super();

        this.apps = appsConfig;
    }

    render() {
        return html`
            <div class="apps-menu">
                <div class="apps-menu__title-container">
                    <div class="apps-menu__title">
                        All apps
                    </div>
                </div>
            
                <div class="apps-menu__container">
                    ${this.apps.map((app) => (html`
                        <div class="apps-menu__item">
                            <a
                                class="apps-menu__link"
                                href="${app.url}"
                            >
                                <span class="apps-menu__icon">
                                    ${getIcon(app.icon)}
                                </span>
                
                                <span
                                    class="apps-menu__icon-title"
                                    title="${app.name}"
                                >
                                    ${app.name}
                                </span>
                            </a>
                        </div>
                    `))}
                </div>
            </div>
        `;
    }
}

customElements.define('g-apps-menu', AppsMenu);
