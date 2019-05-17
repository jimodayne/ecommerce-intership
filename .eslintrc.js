module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "google",
        "prettier"
    ],
    "rules": {
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "require-jsdoc": "off",
        "react/prop-types": "off",
        "no-invalid-this": "off",
        "max-len": "off",
        "no-reserved-keys": "off",
        "react/no-did-mount-set-state": "off",
        "react/display-name": "off",
        "new-cap": "off"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "meteor",
        "react"
    ],
    "env": {
        "meteor": true,
        "browser": true,
        "es6": true,
        "node": false
    },
    "settings": {
        "import/resolver": "meteor"
    },
    "globals": {
        "Meteor": true,
        "Partitioner": true,
        "SimpleSchema": true,
        "accounting": true,
        "Roles": true,
        "FlowRouter": true,
        "moment": true,
        "Counts": true,
        "WrappedValidatedMethod": true,
        "SubsManager": true
    }
}

