import { css } from 'lit-element';


export default css`
    .apps-menu {
        width: 346px;
    }

    .apps-menu__title-container {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 60px;
        border-bottom: 1px solid #F1F1F3;
        background: #fff;
    }

    .apps-menu__title {
        font-size: 20px;
        color: #4D4F5C;
    }

    .apps-menu__container {
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
        background: #F8F8F8;
    }

    .apps-menu__item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 110px;
    }

    .apps-menu__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90px;
        text-decoration: none;
    }

    .apps-menu__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        overflow: hidden;
        transition: transform 0.4s;
    }

    .apps-menu__icon-title {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
        font-size: 14px;
        line-height: 16px;
        color: #828289;
    }

    .apps-menu__link:hover .apps-menu__icon {
        transform: scale(1.1);
    }

    .apps-menu__link:hover .svg-color {
        stroke: #5F5F64;
    }

    .apps-menu__link:hover .svg-color2 {
        stroke: #d1004b;
    }

    .apps-menu__link:hover .apps-menu__icon-title {
        color: #5F5F64;
    }
`;
