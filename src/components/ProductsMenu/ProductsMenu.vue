<template>
    <div class="products-menu">
        <div class="products-menu__header">
            <div>
                My3Shape
            </div>
        </div>
        <div class="products-menu__content">
            <a
                v-for="(product, index) in products"
                :key="index"
                class="products-menu__item"
                :href="product.url"
            >
                <span class="products-menu__icon">
                    <svg
                        v-if="product.icon === 'my3shape'"
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="38"
                    >
                        <g class="svgHover" fill="none" stroke="#828289" stroke-width="1.6px">
                            <rect width="10" height="10" rx="3" stroke="none" />
                            <rect x=".8" y=".8" width="8.4" height="8.4" rx="2.2" fill="none" />
                        </g>
                        <g class="color" transform="translate(0 14)" fill="none" stroke="#828289" stroke-width="1.6px">
                            <rect width="10" height="10" rx="3" stroke="none" />
                            <rect x=".8" y=".8" width="8.4" height="8.4" rx="2.2" fill="none" />
                        </g>
                        <g class="color" transform="translate(0 28)" fill="none" stroke="#828289" stroke-width="1.6px">
                            <rect width="10" height="10" rx="3" stroke="none" />
                            <rect x=".8" y=".8" width="8.4" height="8.4" rx="2.2" fill="none" />
                        </g>
                        <g class="color" transform="translate(14 14)" fill="none" stroke="#828289" stroke-width="1.6px">
                            <rect width="10" height="10" rx="3" stroke="none" />
                            <rect x=".8" y=".8" width="8.4" height="8.4" rx="2.2" fill="none" />
                        </g>
                        <g class="color" transform="translate(14)" fill="none" stroke="#828289" stroke-width="1.6px">
                            <rect width="10" height="10" rx="3" stroke="none" />
                            <rect x=".8" y=".8" width="8.4" height="8.4" rx="2.2" fill="none" />
                        </g>
                        <g class="color" transform="translate(14 28)" fill="none" stroke="#828289" stroke-width="1.6px">
                            <rect width="10" height="10" rx="3" stroke="none" />
                            <rect x=".8" y=".8" width="8.4" height="8.4" rx="2.2" fill="none" />
                        </g>
                        <g class="color" transform="translate(28 28)" fill="none" stroke="#828289" stroke-width="1.6px">
                            <rect width="10" height="10" rx="3" stroke="none" />
                            <rect x=".8" y=".8" width="8.4" height="8.4" rx="2.2" fill="none" />
                        </g>
                        <g class="color" transform="translate(28 14)" fill="none" stroke="#828289" stroke-width="1.6px">
                            <rect width="10" height="10" rx="3" stroke="none" />
                            <rect x=".8" y=".8" width="8.4" height="8.4" rx="2.2" fill="none" />
                        </g>
                        <g class="color" transform="translate(28)" fill="none" stroke="#828289" stroke-width="1.6px">
                            <rect width="10" height="10" rx="3" stroke="none" />
                            <rect x=".8" y=".8" width="8.4" height="8.4" rx="2.2" fill="none" />
                        </g>
                    </svg>

                    <svg
                        v-if="product.icon === 'ecommerce'"
                        xmlns="http://www.w3.org/2000/svg"
                        width="41.6"
                        height="41.6"
                    >
                        <path class="color" d="M38.457 29.54H3.143A2.35 2.35 0 01.8 27.2V3.143A2.35 2.35 0 013.143.8h35.314A2.35 2.35 0 0140.8 3.143V27.2a2.335 2.335 0 01-2.343 2.34z" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px" />
                        <path class="color" d="M26.026 37.051H15.2l.9-7.487h9.022z" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px;stroke-linejoin:round" />
                        <path class="color" d="M3.542 25.182h34.423M12.071 40.8h17.434M29.552 40.73a3.718 3.718 0 00-3.761-3.679M12.071 40.73a3.718 3.718 0 013.761-3.679" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px" />
                        <g transform="translate(12.539 6.807)">
                            <path class="svgHover" d="M0 0h1.851l2.468 9.332h7.774l1.851-6.852H4.689" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px;stroke-linejoin:round" />
                            <ellipse class="svgHover" cx=".972" cy=".963" rx=".972" ry=".963" transform="translate(4.405 11.414)" fill="#828289" />
                            <ellipse class="svgHover" cx=".972" cy=".963" rx=".972" ry=".963" transform="translate(10.237 11.414)" fill="#828289" />
                        </g>
                    </svg>

                    <svg
                        v-if="product.icon === 'communicate'"
                        xmlns="http://www.w3.org/2000/svg"
                        width="41.6"
                        height="41.6"
                    >
                        <g transform="translate(.8 .8)">
                            <path class="color" d="M37.657 28.74H2.343A2.35 2.35 0 010 26.4V2.343A2.35 2.35 0 012.343 0h35.314A2.35 2.35 0 0140 2.343V26.4a2.335 2.335 0 01-2.343 2.34z" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-width:1.6px;stroke-miterlimit:10" />
                            <path class="color" d="M25.226 36.251H14.4l.9-7.487h9.022z" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-width:1.6px;stroke-miterlimit:10;stroke-linejoin:round" />
                            <path class="color" d="M11.271 40h17.434" fill="none" stroke="#828289" stroke-linecap="round" stroke-width="1.6" />
                            <path class="color" d="M28.752 39.93a3.718 3.718 0 00-3.761-3.679M11.271 39.93a3.718 3.718 0 013.761-3.679" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-width:1.6px;stroke-miterlimit:10" />
                            <circle class="svgHover" cx="3.14" cy="3.14" transform="translate(17.024 6.145)" r="3.14" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-width:1.6px;stroke-miterlimit:10" />
                            <path class="svgHover" d="M14.766 19.8a5.449 5.449 0 0110.873 0" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-width:1.6px;stroke-miterlimit:10;stroke-linejoin:round" />
                            <path class="color" d="M2.226 24.359h34.423" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-width:1.6px;stroke-miterlimit:10" />
                        </g>
                    </svg>

                    <svg
                        v-if="product.icon === 'partnerPortal'"
                        xmlns="http://www.w3.org/2000/svg"
                        width="41.6"
                        height="41.659"
                    >
                        <g transform="translate(-16.53 .8)">
                            <circle class="svgHover" cx="3.527" cy="3.527" transform="translate(20.382 .119)" r="3.527" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px" />
                            <path class="color" d="M17.378 24.275l-.048-7.767a6.663 6.663 0 016.615-6.722 6.535 6.535 0 014.785 2.09" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px" />
                            <ellipse class="svgHover" cx="3.658" cy="3.646" rx="3.658" ry="3.646" transform="translate(33.672)" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px" />
                            <path class="color" d="M45.311 24.466v-6.508a8.249 8.249 0 00-16.485 0v6.413" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px" />
                            <circle class="svgHover" cx="3.527" cy="3.527" transform="translate(47.151 .119)" stroke-linejoin="round" fill="none" stroke="#828289" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.6" r="3.527"/>
                            <path class="color" d="M45.703 12.126a6.538 6.538 0 015.012-2.34 6.679 6.679 0 016.615 6.722v8.052M41.403 16.437v23.622M53.529 16.437v23.456M32.757 16.437v23.622M20.857 16.437v23.456M37.092 27.458v12.399M24.764 28.266v11.591M49.55 28.135v11.722M18.802 27.161a3.28 3.28 0 01-1.437-2.684M30.251 27.161a3.28 3.28 0 01-1.437-2.684M43.885 27.161a3.28 3.28 0 001.437-2.684M55.881 27.197a3.28 3.28 0 001.437-2.684" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px" />
                        </g>
                    </svg>

                    <svg
                        v-if="product.icon === 'community'"
                        xmlns="http://www.w3.org/2000/svg"
                        width="42.6"
                        height="42.021"
                    >
                        <path class="svgHover" d="M7.245 6.617h15.22M7.245 11.469H22.32M7.245 16.237h15.051" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px" />
                        <path class="color" d="M25.868 21.789H14.245l-6.964 9.5-.012-.76v-8.74a.012.012 0 00-.012-.012H3.866A2.968 2.968 0 01.8 18.928V3.648A2.968 2.968 0 013.866.8h22a2.968 2.968 0 013.066 2.848v15.3a2.958 2.958 0 01-3.064 2.841z" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px;stroke-linejoin:round" />
                        <path class="color" d="M18.373 24.673v6.088a2.455 2.455 0 002.378 2.523H31.36l5.214 7.942h.012v-7.942h2.836a2.455 2.455 0 002.378-2.523V18.084a2.455 2.455 0 00-2.378-2.523h-6.988" style="fill:none;stroke:#828289;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px;stroke-linejoin:round" />
                    </svg>
                </span>

                <span class="products-menu__title">
                    {{product.name}}
                </span>
            </a>
        </div>
    </div>
</template>

<script src="./ProductsMenu.js"></script>

<style
    src="./ProductsMenu.css"
    scoped
></style>
