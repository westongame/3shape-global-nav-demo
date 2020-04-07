export default {
    name: 'AccountMenu',

    props: {
        token: {
            type: String
        },
        userName: {
            type: String
        },
        changeProfileUrl: {
            type: String,
            required: true
        },
        logoutUrl: {
            type: String,
            required: true
        }
    },

    computed: {
        decodedToken() {
            if (this.userName || !this.token) {
                return null;
            }

            return JSON.parse(window.atob(this.token.split('.')[1].replace('-', '+').replace('_', '/')));
        },

        fullName() {
            if (this.userName) {
                return this.userName;
            }

            if (!this.decodedToken) {
                return null;
            }

            return `${this.decodedToken.firstName} ${this.decodedToken.lastName}`;
        },

        avatar() {
            if (this.fullName) {
                const colours = [
                    "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50",
                    "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
                ];

                const initials = this.fullName.charAt(0);

                let size;

                if (window.devicePixelRatio) {
                    size = (60 * window.devicePixelRatio);
                }

                const charIndex = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
                const colourIndex = charIndex % colours.length;
                let canvas = document.createElement('canvas');
                canvas.width = size;
                canvas.height = size;
                const context = canvas.getContext("2d");

                context.fillStyle = colours[colourIndex - 1];
                context.fillRect(0, 0, canvas.width, canvas.height);
                context.font = Math.round(canvas.width / 1.7) + "px Arial";
                context.textAlign = "center";
                context.fillStyle = "#FFF";
                context.fillText(initials, size / 2, size / 1.4);

                const dataURI = canvas.toDataURL();
                canvas = null;

                return dataURI;
            }
        }
    }
};
