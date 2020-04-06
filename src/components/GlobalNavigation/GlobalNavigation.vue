<template>
    <div class="global-nav">
        <div
            class="global-nav__icon-btn"
            @click="() => { onNavItemClick('products'); }"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path class="aApplications" d="M0 .667v2.666A.67.67 0 00.667 4h2.666A.67.67 0 004 3.333V.667A.67.67 0 003.333 0H.667A.67.67 0 000 .667zM7 .667v2.666A.67.67 0 007.667 4h2.666A.67.67 0 0011 3.333V.667A.67.67 0 0010.333 0H7.667A.67.67 0 007 .667zM14 .667v2.666a.67.67 0 00.667.667h2.666A.67.67 0 0018 3.333V.667A.67.67 0 0017.333 0h-2.666A.67.67 0 0014 .667zM0 7.667v2.666A.67.67 0 00.667 11h2.666A.67.67 0 004 10.333V7.667A.67.67 0 003.333 7H.667A.67.67 0 000 7.667zM7 7.667v2.666a.67.67 0 00.667.667h2.666a.67.67 0 00.667-.667V7.667A.67.67 0 0010.333 7H7.667A.67.67 0 007 7.667zM14 7.667v2.666a.67.67 0 00.667.667h2.666a.67.67 0 00.667-.667V7.667A.67.67 0 0017.333 7h-2.666a.67.67 0 00-.667.667zM0 14.667v2.666A.67.67 0 00.667 18h2.666A.67.67 0 004 17.333v-2.666A.67.67 0 003.333 14H.667a.67.67 0 00-.667.667zM7 14.667v2.666a.67.67 0 00.667.667h2.666a.67.67 0 00.667-.667v-2.666a.67.67 0 00-.667-.667H7.667a.67.67 0 00-.667.667zM14 14.667v2.666a.67.67 0 00.667.667h2.666a.67.67 0 00.667-.667v-2.666a.67.67 0 00-.667-.667h-2.666a.67.67 0 00-.667.667z" fill="#828289" />
            </svg>
        </div>

        <div
            class="global-nav__icon-btn"
            @click="() => { onNavItemClick('account'); }"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                <path
                    d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z"
                    fill="#828289"
                    opacity="0.697"
                />
                <g transform="translate(6.402 6.225)">
                    <circle
                        cx="4.295"
                        cy="4.295"
                        r="4.295"
                        transform="translate(3.211 0)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="2px"
                    />
                    <path
                        d="M5,95.694A7.417,7.417,0,0,1,12.546,88.4a7.425,7.425,0,0,1,7.546,7.294"
                        transform="translate(-5 -76.158)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="2px"
                    />
                </g>
            </svg>
        </div>

        <div
            v-if="activeMenu"
            class="global-nav__menu-overlay"
            @click="onMenuClose"
        />

        <ProductsMenu v-if="activeMenu === 'products'" />

        <AccountMenu
            v-if="activeMenu === 'account'"
            :token="token"
        />
    </div>
</template>

<script src="./GlobalNavigation.js"></script>

<style
    src="./GlobalNavigation.css"
    scoped
></style>
