import { css } from 'lit-element';


export default css`
    :host {
        height: 100%;
    }

    .navigation {
        display: inline-flex;
        font-size: 0;
        height: 100%;
        min-height: 48px;
        position: relative;
        z-index: 9999;
    }

    .navigation__icon-btn-wrap {
        display: inline-flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        width: 40px;
        position: relative;
        z-index: 2;
    }

    .navigation__icon-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        cursor: pointer;
    }

    .navigation__icon-btn:hover .svg-color {
        fill: #5F5F64;
    }

    .navigation__icon-btn-wrap_state_active .svg-color {
        fill: #5F5F64;
    }

    .navigation__menu-overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
    }

    .navigation__menu {
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 2;
        font-size: 18px;
        box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.1);
    }

    .navigation__icon-btn-wrap_state_active::before {
        content: '';
        position: absolute;
        top: 100%;
        margin-top: -3px;
        left: 0;
        right: 0;
        height: 3px;
        background: #828289;
    }
`;
