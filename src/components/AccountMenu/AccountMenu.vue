<template>
    <div class="account-menu">
        <div class="account-menu__header">
            <div>
                Profile
            </div>
        </div>

        <div class="account-menu__user">
            <div class="account-menu__img-wrap">
                <img
                    class="account-menu__img"
                    :src="avatar"
                    alt=""
                    width="70"
                    height="70"
                />
            </div>

            <div class="account-menu__name">
                {{fullName}}
            </div>
        </div>

        <div class="account-menu__footer">
            <div class="account-menu__edit">
                <a
                    href="/account/login?ReturnUrl=%2Fprofile"
                    target="_blank"
                >
                    Change Profile
                </a>
            </div>
            <div class="account-menu__logout">
                <a
                    href="/account/logout"
                >
                    Log out
                </a>
            </div>
        </div>
    </div>
</template>

<script src="./AccountMenu.js"></script>

<style
    src="./AccountMenu.css"
    scoped
></style>
