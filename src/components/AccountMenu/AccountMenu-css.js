import { css } from 'lit-element';


export default css`
    .account-menu {
        width: 320px;
    }

    .account-menu__title-container {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 60px;
        border-bottom: 1px solid #F1F1F3;
        background: #fff;
    }

    .account-menu__title {
        font-size: 20px;
        color: #4D4F5C;
    }

    .account-menu__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F8F8F8;
        padding: 40px;
    }

    .account-menu__avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 68px;
        height: 68px;
        overflow: hidden;
        background: #fff;
        border-radius: 50%;
        margin-bottom: 16px;
    }

    .account-menu__username {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        font-size: 30px;
        line-height: 36px;
        color: #5F5F64;
    }

    .account-menu__bottom-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        height: 60px;
        border-top: 1px solid #F1F1F3;
        background: #F8F8F8;
        padding: 0 16px;
    }

    .account-menu__link {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: 16px;
        color: #828289;
    }

    .account-menu__link:hover {
        color: #5F5F64;
    }

    .account-menu__link:hover .svg-color {
        stroke: #5F5F64;
    }

    .account-menu__link-icon {
        margin: 3px 6px 0 0;
    }
`;
